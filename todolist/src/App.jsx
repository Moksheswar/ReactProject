import { useState } from 'react'
import './App.css'
// import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className='w-full h-screen bg-no-repeat bg-center' 
           style={{backgroundImage:'url("https://images.pexels.com/photos/7002678/pexels-photo-7002678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: '100% 100%'}}>
        <div className='w-full h-full flex flex-col items-center space-y-10'>
          <h1 className='text-4xl font-bold text-white mt-12 shadow-2xl drop-shadow-2xl'>TODO LIST</h1>
          <div className='bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg w-96 p-6 rounded-md flex flex-col items-center mt-10 shadow-[0_4px_6px_rgba(0,0,0,0.3),0_-4px_6px_rgba(0,0,0,0.3),4px_0_6px_rgba(0,0,0,0.3),-4px_0_6px_rgba(0,0,0,0.3)]'>
            <div className='flex space-x-3 mt-4'>
              <input 
                type="text" 
                size={25} 
                className='outline p-2 rounded' 
                placeholder='Add Tasks' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                className='bg-blue-500 text-white p-2 rounded'
                onClick={handleAddTask}
              >
                Add
              </button>
            </div>

            <div className='mt-5 w-full max-h-96 overflow-auto'>
              {tasks.length > 0 && tasks.map((task, index) => (
                <div key={index} className='flex justify-between items-center bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg p-2 rounded-md mt-2'>
                  <h2 className='text-lg break-words w-2/3'>{task}</h2>
                  <button 
                    className='bg-red-500 text-white p-2 rounded'
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {/* <TodoList alltasks={tasks} onDeleteTask={handleDeleteTask} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

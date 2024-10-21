import React from 'react';

const TodoList = ({ alltasks, onDeleteTask }) => {
  return (
    <div>
      {alltasks.length > 0 ? (
        alltasks.map((task, index) => (
          <div key={index} className='flex justify-between items-center bg-gray-300 p-2 rounded-md mt-2'>
            <h2 className='text-lg'>{task}</h2>
            <button 
              className='bg-red-500 text-white p-2 rounded'
              onClick={() => onDeleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2 className='text-gray-500'>No tasks added</h2>
      )}
    </div>
  );
};

export default TodoList;

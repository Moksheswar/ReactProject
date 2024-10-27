import { createContext,useContext} from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export function UseTheme() {
    return useContext(ThemeContext);
}
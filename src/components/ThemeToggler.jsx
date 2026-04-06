import {createContext, useState } from 'react';

//create theme context
const themecontext = createContext();

//Theme provider component
export function Themeprovider({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark"
  };

  return <themecontext.Provider value={value} >{children}</themecontext.Provider>
}

function ThemeToggler() {
  return <div>ThemeToggler</div>
}

export default ThemeToggler;
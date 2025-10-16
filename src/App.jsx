<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
import "./App.css";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 2c634d31417c3b0a87ba88d828da431c1f84efe0

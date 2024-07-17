// src/components/DarkModeToggle.js

import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa'; // on Importe l'icon de react-icons

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;

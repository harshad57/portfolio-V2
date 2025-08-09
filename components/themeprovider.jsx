'use client';

import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = storedTheme || systemTheme;

    setTheme(currentTheme);
    document.documentElement.className = currentTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          fontSize: '15px',
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '10px',
          zIndex: 999,
          background: theme === 'dark' ? '#1F2937' : '#f3f4f6',
          color: theme === 'dark' ? '#fff' : '#000',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      {children}
    </>
  );
};

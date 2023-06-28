import React from 'react';
import useLocalStorage from './components/useLocalStorage';
import useWindowSize from './components/useWindowSize';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const windowSize = useWindowSize();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <h1>My App</h1>
      <p>Window width: {windowSize.width}</p>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;

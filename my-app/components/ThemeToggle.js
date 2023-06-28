import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="toggle-button">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;

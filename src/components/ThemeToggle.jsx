import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/Theme/ThemeSlice';


const ThemeToggle = () => {
  const dispatch = useDispatch();
  // Read the current mode from the Redux store
  const currentMode = useSelector((state) => state.theme.mode);
  
  const icon = currentMode === 'dark' ? '☀️ ' : '🌙 ';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-full font-semibold transition-colors duration-300
                 bg-gray-200 text-gray-800 hover:bg-gray-300
                 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
    {icon} 
    </button>
  );
};

export default ThemeToggle;
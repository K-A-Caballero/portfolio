'use client'

import { useContext } from 'react';
import { ThemeContext } from '@/app/themeContext';
import ThemeIcon from '../../public/theme-icon.svg';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <button
        className="flex items-center justify-center min-w-4"
        onClick={toggleTheme}
        aria-label="auto"
      >
        <ThemeIcon 
          width="24"
          height="24"
          fill="var(--textPrimary)"
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
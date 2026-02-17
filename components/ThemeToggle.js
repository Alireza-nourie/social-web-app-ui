import React from 'react';
import { MoonStar, Sun } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative inline-flex items-center gap-2 px-2.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70 transition-colors"
    >
      <span className="relative w-5 h-5 inline-flex items-center justify-center">
        <Sun
          size={16}
          className={`absolute transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'} text-amber-500`}
        />
        <MoonStar
          size={16}
          className={`absolute transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'} text-red-400`}
        />
      </span>
      <span className="hidden sm:inline text-[13px] font-medium text-neutral-700 dark:text-neutral-200">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

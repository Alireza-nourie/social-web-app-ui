import React from 'react';
import { Bell, LayoutDashboard, Search, CircleUserRound } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center text-white shadow-sm">
              <LayoutDashboard size={18} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">FlowBoard</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-1 ml-2">
            {[{ name: 'Dashboard' }, { name: 'Projects' }, { name: 'Notifications' }, { name: 'Profile' }].map((item, idx) => (
              <a href="#" key={item.name} className={`px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors ${idx === 0 ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800'}`}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex-1 mx-2 md:mx-6">
            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus-within:ring-2 focus-within:ring-red-400/50">
              <Search size={16} className="text-neutral-400" />
              <input type="text" placeholder="Search projects, tasks, people..." className="w-full bg-transparent placeholder-neutral-400 focus:outline-none text-neutral-700 dark:text-neutral-200" />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <Bell size={18} className="text-neutral-600 dark:text-neutral-300" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-neutral-900" />
            </button>
            <button className="p-1.5 pl-2 pr-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition-colors flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                <CircleUserRound size={16} className="text-neutral-600 dark:text-neutral-300" />
              </span>
              <span className="hidden sm:block text-[13px] text-neutral-700 dark:text-neutral-200 font-medium">You</span>
            </button>
          </div>
        </div>
        <div className="mt-3 md:hidden">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus-within:ring-2 focus-within:ring-red-400/50">
            <Search size={16} className="text-neutral-400" />
            <input type="text" placeholder="Search projects, tasks, people..." className="w-full bg-transparent placeholder-neutral-400 focus:outline-none text-neutral-700 dark:text-neutral-200" />
          </div>
        </div>
      </div>
    </header>
  );
}

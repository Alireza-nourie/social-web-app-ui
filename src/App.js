import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProjectGrid from './components/ProjectGrid';
import TaskList from './components/TaskList';
import QuickActions from './components/QuickActions';
import { motion } from 'framer-motion';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Persist and apply theme to root for proper scrollbar + color-scheme
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [isDark]);

  const user = { name: 'Alex Morgan' };

  const tasks = useMemo(
    () => [
      { id: 1, title: 'Finalize project brief', project: 'Aurora', status: 'In Progress', dueDate: '2025-11-02' },
      { id: 2, title: 'Create onboarding checklist', project: 'Helix CRM', status: 'Todo', dueDate: '2025-11-05' },
      { id: 3, title: 'QA test cycle 2', project: 'Nimbus', status: 'Review', dueDate: '2025-11-03' },
      { id: 4, title: 'Hand-off to marketing', project: 'Pulse', status: 'Done', dueDate: '2025-10-30' },
      { id: 5, title: 'Sprint planning deck', project: 'Aurora', status: 'In Progress', dueDate: '2025-11-04' },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        name: 'Project Aurora',
        description: 'A unified analytics dashboard for cross-team insights.',
        progress: 62,
        updatedAt: '2h ago',
        members: 12,
        image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop',
      },
      {
        id: 2,
        name: 'Nimbus',
        description: 'Mobile-first experience with offline-ready sync.',
        progress: 38,
        updatedAt: '1d ago',
        members: 8,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
      },
      {
        id: 3,
        name: 'Helix CRM',
        description: 'Streamlining customer relationships at scale.',
        progress: 80,
        updatedAt: '3d ago',
        members: 20,
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop',
      },
      {
        id: 4,
        name: 'Pulse',
        description: 'Real-time monitoring and alerting platform.',
        progress: 47,
        updatedAt: '4d ago',
        members: 15,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 antialiased text-sm">
      {/* Global minimal scrollbar styles */}
      <style>{`
        html { scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent; }
        [data-theme='dark'] { scrollbar-color: #404040 transparent; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background-color: #d4d4d8; border-radius: 9999px; border: 2px solid transparent; background-clip: padding-box; }
        [data-theme='dark'] ::-webkit-scrollbar-thumb { background-color: #404040; }
      `}</style>

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-4 lg:gap-6 py-4 lg:py-6">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="space-y-6">
            {/* Welcome / Overview */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-5 py-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Welcome back, {user.name.split(' ')[0]}
                  </h1>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Here's a quick snapshot of your work today.
                  </p>
                </div>
                <QuickActions />
              </div>
              {/* Tiny Stats */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <StatCard label="Tasks due today" value="3" trend="+1" />
                <StatCard label="Open projects" value="7" trend="0" />
                <StatCard label="Team online" value="12" trend="-2" />
              </div>
            </motion.section>

            {/* Two column layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="xl:col-span-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur"
              >
                <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">My Tasks</h2>
                </div>
                <TaskList tasks={tasks} />
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur"
              >
                <div className="px-5 pt-4 pb-3 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Recent Projects</h2>
                </div>
                <ProjectGrid projects={projects} />
              </motion.section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend }) {
  const trendColor = trend.startsWith('-')
    ? 'text-red-600'
    : trend === '0'
    ? 'text-neutral-500'
    : 'text-emerald-600';
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-900/60">
      <div className="flex items-center justify-between">
        <div className="text-neutral-500 dark:text-neutral-400">{label}</div>
        <div className={`text-[12px] font-medium ${trendColor}`}>{trend}</div>
      </div>
      <div className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-50">{value}</div>
    </div>
  );
}

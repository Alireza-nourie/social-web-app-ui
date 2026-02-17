import React from 'react';
import { CalendarDays, CheckCircle2, Clock, Loader, CircleDashed } from 'lucide-react';
import { motion } from 'framer-motion';

const statusStyles = {
  'Todo': 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
  'In Progress': 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'Review': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Done': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
};

const statusIcon = {
  'Todo': CircleDashed,
  'In Progress': Loader,
  'Review': Clock,
  'Done': CheckCircle2,
};

export default function TaskRow({ task }) {
  const Icon = statusIcon[task.status] || CircleDashed;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="px-5 py-4 hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className={`px-2.5 py-1.5 rounded-full text-[12px] font-medium flex items-center gap-1.5 ${statusStyles[task.status]}`}>
          <Icon size={14} className="shrink-0" />
          <span>{task.status}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="truncate font-medium text-neutral-900 dark:text-neutral-100">{task.title}</div>
          <div className="text-neutral-500 dark:text-neutral-400">{task.project}</div>
        </div>
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
          <CalendarDays size={16} />
          <span>{new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>
    </motion.div>
  );
}

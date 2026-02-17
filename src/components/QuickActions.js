import React from 'react';
import { Plus, StickyNote } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-800 font-medium">
        <Plus size={16} />
        <span>Create Project</span>
      </button>
      <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-red-500/90 hover:bg-red-500 text-white transition-colors font-medium">
        <StickyNote size={16} />
        <span>Add Task</span>
      </button>
    </div>
  );
}

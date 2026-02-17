import React from 'react';
import { Home, LayoutGrid, BellDot, Settings, MessageSquare } from 'lucide-react';

const items = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'Projects', icon: LayoutGrid },
  { name: 'Notifications', icon: BellDot },
  { name: 'Settings', icon: Settings },
  { name: 'Feedback', icon: MessageSquare },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-20">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-2">
        <nav className="grid gap-1">
          {items.map(({ name, icon: Icon, active }) => (
            <a key={name} href="#" className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${active ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100' : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70'}`}>
              <Icon size={16} />
              <span className="font-medium">{name}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

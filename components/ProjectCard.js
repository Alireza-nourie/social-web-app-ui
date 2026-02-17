import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -2 }}
      className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/60"
    >
      <div className="h-28 w-full overflow-hidden">
        <img
          src={project.image}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-neutral-50 truncate">{project.name}</h3>
          <span className="text-[12px] text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{project.updatedAt}</span>
        </div>
        <p className="mt-1 text-neutral-600 dark:text-neutral-300 line-clamp-2">{project.description}</p>

        {/* Progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[12px] text-neutral-500 dark:text-neutral-400">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
          <Users size={16} />
          <span className="text-[13px]">{project.members} members</span>
        </div>
      </div>
    </motion.a>
  );
}

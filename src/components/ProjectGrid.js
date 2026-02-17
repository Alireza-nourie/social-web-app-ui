import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 pt-0">
      {projects.map((p, idx) => (
        <ProjectCard key={p.id} project={p} delay={idx * 0.05} />
      ))}
    </div>
  );
}

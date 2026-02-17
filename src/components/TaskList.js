import React from 'react';
import TaskRow from './TaskRow';

export default function TaskList({ tasks = [] }) {
  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </div>
  );
}

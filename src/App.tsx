import React, { useState, useEffect } from 'react';
import { TaskPrioritizer, Task } from './services/priotity';
import { TaskList } from './services/task-list';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [prioritizedTasks, setPrioritizedTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(TaskList);
  }, []);

  useEffect(() => {
    const taskPrioritizer = new TaskPrioritizer(tasks);
    setPrioritizedTasks(taskPrioritizer.prioritizeTasks());
  }, [tasks]);

  const handleUpdateProgress = (task: Task, newProgress: number) => {
    setTasks(
      tasks.map(t => {
        if (t === task) {
          return {
            ...t,
            progress: newProgress
          };
        }
        return t;
      })
    );
  };
  
  return (
    <div className="app">
      <h1>Task Management App</h1>
      <h2>Prioritized Tasks:</h2>
      <ul>
        {prioritizedTasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}:</strong>
            <br />
            deadline: {task.deadline.toDateString()},
            <br />
            estimated time to complete: {task.estimatedTime.value} {task.estimatedTime.unit}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

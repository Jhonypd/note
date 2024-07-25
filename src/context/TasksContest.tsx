import React, { createContext, useState, useEffect } from 'react';

interface Task {
  id: string;
  type: string;
  createdAt: string;
  text: string;
}

interface TasksContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

export const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

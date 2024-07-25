import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface Task {
  id: string;
  type: string;
  createdAt: Date;
  text: string;
}

interface TasksContextProps {
  tasks: Task[];
  addTask: (type: string, text: string) => void;
  editTask: (id: string, updatedTask: Omit<Task, "id" | "createdAt">) => void;
  deleteTask: (id: string) => void;
}

const TasksContext = createContext<TasksContextProps | undefined>(undefined);

const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (type: string, text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      type,
      createdAt: new Date(),
      text,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (id: string, updatedTask: Omit<Task, "id" | "createdAt">) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export { TasksProvider, useTasks };

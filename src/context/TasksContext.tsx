import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { TaskType } from "../components/Cards/Card";

interface Task {
  id: string;
  title: string;
  type: string;
  createdAt: Date;
  text: string;
}

interface TasksContextProps {
  tasks: Task[];
  addTask: (type: TaskType, text: string, title: string) => void;
  editTask: (id: string, updatedTask: Omit<Task, "id" | "createdAt">) => void;
  deleteTask: (id: string) => void;
}

const TasksContext = createContext<TasksContextProps | undefined>(undefined);

const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [nextId, setNextId] = useState<number>(() => {
    const storedId = localStorage.getItem("nextId");
    return storedId ? parseInt(storedId, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("nextId", nextId.toString());
  }, [nextId]);

  const addTask = (type: TaskType, title: string, text: string) => {
    const newTask: Task = {
      id: `Nota #${Math.floor(Math.random() * 10000)}`,
      type,
      title,
      createdAt: new Date(),
      text,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    showToastSuccess(`${newTask.id} criada com sucesso`);
  };

  const editTask = (id: string, updatedTask: Omit<Task, "id" | "createdAt">) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
    showToastSuccess(`Nota ${id} atualizada`);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    showToastSuccess(`${id} removida com sucesso`);
  };

  const showToastSuccess = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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

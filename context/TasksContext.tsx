import React, { createContext, useState, ReactNode } from 'react';
import initialTasks from '../assets/data/tasks.json';

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface TasksContextData {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
}

export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask = { ...task, id: String(Date.now()) };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

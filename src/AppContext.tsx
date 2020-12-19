import React, { useState } from 'react';
import { ITask } from './interfaces/task';

interface ContextType {
  tasks: ITask[];
  addTask: (name: string) => void;
  deleteTasks: (...ids: number[]) => void;
}
export const AppContext = React.createContext<ContextType>({
  tasks: [],
  addTask: () => {},
  deleteTasks: () => {},
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (name: string) => {
    const id = Math.max(...(tasks.length > 0 ? tasks.map(({ id }) => id) : [0]));
    setTasks([...tasks, { id: id + 1, name }]);
  };

  const deleteTasks = (...ids: number[]) => {
    setTasks(tasks.filter((task) => !ids.includes(task.id)));
  };
  return <AppContext.Provider value={{ tasks, addTask, deleteTasks }}>{children}</AppContext.Provider>;
};

import React, { useContext } from 'react';
import './CommonStyles.css';
import { AppContext } from '../AppContext';
import TaskList from '../components/TaskList';

const ListTasks: React.FC = () => {
  const { tasks } = useContext(AppContext);
  return (
    <div className='container'>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ListTasks;

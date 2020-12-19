import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import TaskList from '../components/TaskList';
import './CommonStyles.css';

const BulkDelete: React.FC = () => {
  const { tasks, deleteTasks } = useContext(AppContext);
  const [selected, setSelected] = useState<Record<number, boolean>>(
    tasks.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {}),
  );

  const handleSelectChange = (taskId: number, value: boolean) => {
    setSelected({ ...selected, [taskId]: value });
  };

  const handleDelete = () => {
    const tasksToDelete = Object.entries(selected)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    deleteTasks(...tasksToDelete.map(Number));
  };

  return (
    <>
      <div className='container'>
        <TaskList tasks={tasks} selectable={true} selected={selected} onSelectChange={handleSelectChange} />
        <button style={{ margin: 20, width: 100, height: 50 }} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default BulkDelete;

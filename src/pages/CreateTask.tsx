import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../AppContext';
import './CommonStyles.css';

const CreateTask: React.FC = () => {
  const { addTask } = useContext(AppContext);
  const [name, setName] = useState('');
  const history = useHistory();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    addTask(name);
    setName('');
    history.push('/list-tasks');
  };
  return (
    <div className='container'>
      <input value={name} onChange={handleInputChange} />
      <button style={{ fontSize: 15 }} disabled={!name} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateTask;

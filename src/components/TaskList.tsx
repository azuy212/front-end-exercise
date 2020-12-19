import React from 'react';
import Task from './Task';
import { ITask } from '../interfaces/task';

type IProps = { tasks: ITask[] } & (
  | {
      selectable?: false;
    }
  | {
      selectable: true;
      selected: Record<number, boolean>;
      onSelectChange: (taskId: number, selected: boolean) => void;
    }
);

const TaskList: React.FC<IProps> = (props) => (
  <>
    {props.tasks.length > 0 ? (
      props.tasks.map(
        (task) =>
          props.selectable ? (
            <Task
              key={task.id}
              task={task}
              selectable
              selected={props.selected[task.id]}
              onSelectChange={props.onSelectChange}
            />
          ) : (
            <Task key={task.id} task={task} />
          ),
      )
    ) : (
      <div>No task available</div>
    )}
  </>
);

export default TaskList;

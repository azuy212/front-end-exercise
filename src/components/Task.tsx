import React from 'react';
import { ITask } from '../interfaces/task';
import Card from './Card';
import CardAction from './CardAction';
import CardText from './CardText';

type IProps = { task: ITask } & (
  | { selectable?: false }
  | {
      selectable: true;
      selected: boolean;
      onSelectChange: (id: number, value: boolean) => void;
    }
);

const Task: React.FC<IProps> = (props) => (
  <Card onClick={() => props.selectable && props.onSelectChange(props.task.id, !props.selected)}>
    {props.selectable && (
      <CardAction
        checked={props.selected}
        onChange={({ target: { checked } }) => props.onSelectChange(props.task.id, checked)}
      />
    )}
    <CardText>{props.task.name}</CardText>
  </Card>
);

export default Task;

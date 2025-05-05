/**
 * This is the grid layout of the todo list.
 */

import classes from './todoGrid.module.css';
import { useAppSelector } from '../../reducers/hooks';

const TodoGrid: React.FC = () => {
  const originalTodos = useAppSelector(state => state.todoReducer);
  const rows = [];
  for (let i = 0; i < originalTodos.length; i++) {
    const t = originalTodos[i];
    rows.push(<div key={i}>{`${t.UserId} - ${t.Id} - ${t.Title} - ${t.Completed}`}</div>)
  }
  return (
    <div className={classes.todoGridContainer}>
      This is Todo Grid.
      {rows}
    </div>
  );
}

export default TodoGrid;
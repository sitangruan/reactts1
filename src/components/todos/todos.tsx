import { useEffect } from 'react';
import classes from './todos.module.css';
import { useLoadingMask } from '../common/loadingMaskService';

const Todos: React.FC = () => {
  const mask = useLoadingMask();
  console.log(mask);

  useEffect(() => {
    //mask(true);
  })

  return (
    <div className={classes.todosContainer}>
      This is TODOS.
    </div>
  );
}

export default Todos;
/**
 * This is the Todox component which contains two components TodosGrid and TodosGraph (will be implemented if they are were not yet).
 * The two subcomponents has dedicated 2nd level routing. It is triggered by the raido button selection.
 * By default, it is loading the TodosGrid first. Any wrong sub routing url will be forced to redirect to TodosGrid.
 */

import { useEffect } from 'react';
import classes from './todos.module.css';
import { useLoadingMask } from '../common/loadingMaskService';
import apiCaller from '../../api/apiCaller';

const Todos: React.FC = () => {
  const mask = useLoadingMask();

  const loadTodos = () => {
    mask(true);
    apiCaller.todos.getTodos().then(data => {
      console.log('The Todos data has been fetched:', data);

      //To be implemented: handle the data
    })
    .catch(e => {
      console.log('Error happened. ', e);
    })
    .finally(() => {
      mask(false);
    });
  }

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className={classes.todosContainer}>
      This is TODOS.
    </div>
  );
}

export default Todos;
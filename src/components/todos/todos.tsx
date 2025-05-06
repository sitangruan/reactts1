/**
 * This is the Todox component which contains two components TodosGrid and TodosGraph (will be implemented if they are were not yet).
 * The two subcomponents has dedicated 2nd level routing. It is triggered by the raido button selection.
 * By default, it is loading the TodosGrid first. Any wrong sub routing url will be forced to redirect to TodosGrid.
 */

import { lazy, Suspense, useEffect, useState } from 'react';
import classes from './todos.module.css';
import { useLoadingMask } from '../common/loadingMaskService';
import apiCaller from '../../api/apiCaller';
import { ViewMode } from '../../common/constants';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoadingMask from '../common/loadingMask';
import * as actions from '../../actions/todoActionCreator';
import TodoElement from '../../modals/TodoElement';
import { useAppDispatch } from '../../reducers/hooks';

const TodoGrid = lazy(() => import('./todoGrid'));
const TodoGraph = lazy(() => import('./todoGraph'));

const Todos: React.FC = () => {
  const mask = useLoadingMask();
  const navigate = useNavigate();
  const [mode, setMode] = useState<ViewMode>(ViewMode.Grid);
  const dispatch = useAppDispatch();

  const loadTodos = () => {
    mask(true);
    apiCaller.todos.getTodos().then(data => {
      const myList = Array<TodoElement>();
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          myList.push(new TodoElement(data[i].userId, data[i].id, data[i].title, data[i].completed));
        }
      } else {
        myList.push(new TodoElement(data.userId, data.id, data.title, data.completed));
      }

      dispatch(actions.loadTodoListAction(myList));
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

  const onChangeViewPattern = (val: ViewMode): void => {
    setMode(val);
    const newPath = val === ViewMode.Graph ? '/todos/graph' : '/todos/grid';
    navigate(newPath);
  }

  return (
    <div className={classes.todosContainer}>
      <div className={classes.topRow}>
        <button onClick={loadTodos}>Refresh</button>
        <input type='radio' id='gridRadio' value={ViewMode.Grid} checked={mode === ViewMode.Grid} name='viewPattern'
          onChange={() => onChangeViewPattern(ViewMode.Grid)}/>
        <label htmlFor='gridRadio'>Grid</label>        
        <input type='radio' id='graphRadio' value={ViewMode.Graph} checked={mode === ViewMode.Graph} name='viewPattern'
          onChange={() => onChangeViewPattern(ViewMode.Graph)}/>
        <label htmlFor='graphRadio'>Graph</label>
      </div>
      <div className={classes.todoView}>
        <Routes>
          <Route path="" element={<Navigate replace to="grid" />} />
          <Route path="grid" element={<Suspense fallback={<LoadingMask visible={true} showSpinner={false}/>}><TodoGrid/></Suspense>} />
          <Route path="graph" element={<Suspense fallback={<LoadingMask visible={true} showSpinner={false}/>}><TodoGraph/></Suspense>} />
          <Route path="*" element={<Navigate replace to="grid" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Todos;
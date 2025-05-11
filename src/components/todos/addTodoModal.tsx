/**
 * This is the AddTodoModal component. It is for use of adding a new todo item.
 * It can be used inside the TodoGrid and the TodoGraph components.
 */

import classes from './addTodoModal.module.css';
import { AddTodoModalProps } from '../../common/interfaces';
import { TodoCompletedType, limits } from '../../common/constants';
import { useLoadingMask } from '../common/loadingMaskService';
import { useAppDispatch } from '../../reducers/hooks';
import apiCaller from '../../api/apiCaller';
import * as actions from '../../actions/todoActionCreator';
import { useState } from 'react';
import TodoElement from '../../modals/TodoElement';

const AddTodoModal: React.FC<AddTodoModalProps> = ({ onCloseModal }: AddTodoModalProps) => {
  const [userId, setUserId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [completedStatus, setCompletedStatus] = useState<TodoCompletedType>(TodoCompletedType.NO);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const mask = useLoadingMask();
  const dispatch = useAppDispatch();

  const onChangeCompletedStatus = (val: TodoCompletedType) => setCompletedStatus(val);

  const validateBeforeSave = (): string => {
    const errorArray = Array<string>();

    const isUserIdValid = Number.isInteger(+userId) && Number(userId) > 0;
    if (!isUserIdValid) {
      errorArray.push('User ID must be a positive integer.');
    }

    if (title.trim() === '') {
      errorArray.push('Title cannot be empty.');
    } else if (title.length > limits.maxTodoTitleLength) {
      errorArray.push(`Title length cannot exceed ${limits.maxTodoTitleLength}.`);
    }

    return errorArray.join(' ');
  };

  const saveNewTodo = (): void => {
    const error = validateBeforeSave();
    setErrorMessage(error);

    let saveDone = false;
    if (error.trim() === '') {
      const toSave = new TodoElement(Number(userId), -1, title, completedStatus === TodoCompletedType.YES);
      mask(true);
      apiCaller.todos.postTodo(toSave).then(data => {
        const addAction = actions.addTodoAction(new TodoElement(data.userId, data.id, data.title, data.completed));
        dispatch(addAction);
        saveDone = true;
        setIsSuccessful(true);
      }).catch((e) => {
        const error = e ? (e.message ? e.message : e.toString()) : 'Error happened. Please try again later.'
        setErrorMessage(error);
      }).finally(() => {
        mask(false);
        if (saveDone) {
          setTimeout(() => onCloseModal(), 2000);
        }
      });
    }
  };

  const inputPart = isSuccessful ? <></> :
    <div className={classes.addTodoModalBody}>
      <div className={classes.inputContainer}>
        <div className={classes.inputRow}>
          <div className={classes.label}>User ID: <span className={classes.required}></span></div>
          <div className={classes.value}>
            <input className={classes.inputBox} type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.currentTarget.value)}></input>
          </div>
        </div>
        <div className={classes.inputRow}>
          <div className={classes.label}>Title: <span className={classes.required}></span></div>
          <div className={classes.value}>
            <input className={classes.inputBox} type='textbox' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}></input>
          </div>
        </div>
        <div className={classes.inputRow}>
          <div className={classes.label}>Is Completed: <span className={classes.required}></span></div>
          <div className={classes.value}>
            <input type='radio' id='noRadio' value={TodoCompletedType.NO} checked={completedStatus === TodoCompletedType.NO} name='completedValue'
              onChange={() => onChangeCompletedStatus(TodoCompletedType.NO)}></input>
            <label htmlFor='noRadio'>No</label>
            <input type='radio' id='yesRadio' value={TodoCompletedType.NO} checked={completedStatus === TodoCompletedType.YES} name='completedValue'
              onChange={() => onChangeCompletedStatus(TodoCompletedType.YES)}></input>
            <label htmlFor='yesRadio'>Yes</label>
          </div>
        </div>
      </div>
      <div className={classes.errorMessageContainer}>
        {errorMessage}
      </div>
    </div>;

  const saveSuccessPart = isSuccessful ? 
    <div className={classes.successContainer}>
      <div className={classes.content}>
        <div className={classes.successIcon}></div>
        <div>The new item has been saved successfully.</div>
      </div>
    </div> : <></>;
  
  const saveButton = isSuccessful ? <></> : <button onClick={saveNewTodo}>Save</button>

  const modal = <div className={classes.addTodoModalMask}>
    <div className={classes.addTodoModalContainer}>
      <div className={classes.title}>Add New Todo</div>
      {inputPart}
      {saveSuccessPart}
      <div className={classes.buttonRow}>
        {saveButton}
        <button onClick={onCloseModal}>Close</button>
      </div>
    </div>
  </div>;

  return modal;
}

export default AddTodoModal;
/**
 * This is the grid layout of the todo list.
 */

import classes from './todoGrid.module.css';
import { useAppSelector } from '../../reducers/hooks';
import { JSX, useMemo, useState } from 'react';
import { compareWrapper } from '../../common/utillities';
import { TodoFieldName, todoGridColumns } from '../../common/constants';
import AddTodoModal from './addTodoModal';

const TodoGrid: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [sortFieldName, setSortFieldName] = useState<string>('');
  const [isAscSorting, setIsAscSorting] = useState<boolean>(false);

  console.log('isModalVisible', isModalVisible);

  const setSortingColumn = (fieldName: string): void => {
    if (sortFieldName === fieldName) {
      setIsAscSorting(!isAscSorting);
    } else  {
      setSortFieldName(fieldName);
      setIsAscSorting(true);
    }
  }

  const originalTodos = useAppSelector(state => state.todoReducer);
  const myTodos = useMemo(() => {
    let sortedTodos = [...originalTodos];
    if (sortFieldName !== '') {
      sortedTodos = sortedTodos.sort(compareWrapper(sortFieldName, isAscSorting));
    }

    return sortedTodos;
  }, [originalTodos, sortFieldName, isAscSorting]);

  const getColClass = (fieldName: string): string => {
    let myClass = '';
    switch (fieldName) {
      case TodoFieldName.id:
        myClass = classes.colId;
        break;
      case TodoFieldName.title:
        myClass = classes.colTitle;
        break;
      case TodoFieldName.completed:
        myClass = classes.colCompleted;
        break;
      default:
        myClass = classes.colUserId;
        break;
    }

    return myClass;
  }

  const colHeaders = Array<JSX.Element>();
  todoGridColumns.forEach((col, index) => {
    const widthClass = getColClass(col.fieldName)
    const isCurrentColSorted = sortFieldName === col.fieldName;

    let iconPart = <div className={classes.emptyIcon}></div>;
    if (isCurrentColSorted) {
      const iconClass = isAscSorting ? classes.sortIcon : [classes.sortIcon, classes.desc].join(' ');
      iconPart = <div className={iconClass}></div>;
    }

    colHeaders.push(
      <div key={index} className={[classes.colHeader, widthClass].join(' ')} onClick={() => setSortingColumn(col.fieldName)}>
        <div>{col.display}</div>{iconPart}
      </div>
    );
  });

  const headerRow:JSX.Element = <div className={classes.headerRow}>{colHeaders}</div>;
  const solidRows = Array<JSX.Element>();
  const solidRowsMobile = Array<JSX.Element>();

  if (myTodos && myTodos.length > 0) {
    myTodos.forEach((item, index) => {
      const cells = Array<JSX.Element>();
      cells.push(<div key={0} className={[classes.cell, classes.colUserId].join(' ')}>{item.UserId}</div>);
      cells.push(<div key={1} className={[classes.cell, classes.colId].join(' ')}>{item.Id}</div>);
      cells.push(<div key={2} className={[classes.cell, classes.colTitle].join(' ')}>
        <span className={classes.ellipsisText}>{item.Title}</span>
      </div>);
      cells.push(<div key={3} className={[classes.cell, classes.colCompleted].join(' ')}>{item.Completed ? 'Yes' : 'No'}</div>);

      const extraClass = index % 2 > 0 ? classes.oddRow : '';
      solidRows.push(<div key={index} className={[classes.row, extraClass].join(' ')}>{cells}</div>);

      //Render the mobile rows
      const extraClassMobile = index % 2 > 0 ? classes.oddRowMobile : '';
      solidRowsMobile.push(
        <div key={index} className={[classes.rowMobile, extraClassMobile].join(' ')}>
          <div key={0} className={classes.innerRow}>
            <div className={classes.label}>User ID: </div>
            <div className={classes.value}>{item.UserId}</div>
          </div>
          <div  key={1} className={classes.innerRow}>
            <div className={classes.label}>ID: </div>
            <div className={classes.value}>{item.Id}</div>
          </div>
          <div key={2} className={classes.innerRow}>
            <div className={classes.label}>Title: </div>
            <div className={classes.value}><span className={classes.ellipsisTextMobile}>{item.Title}</span></div>
          </div>
          <div key={3} className={classes.innerRow}>
            <div className={classes.label}>Completed: </div>
            <div className={classes.value}>{item.Completed ? 'Yes' : 'No'}</div>
          </div>
        </div>
      );
    })
  } else {
    console.log('myTodos', myTodos);
  } 

  const rowsPart = myTodos && myTodos.length > 0 ? <div className={classes.solidRowsContainer}>{solidRows}</div>
            : <div className={classes.emptyContent}>No Data</div>;

  const rowsPartMobile = myTodos && myTodos.length > 0 ? <>{solidRowsMobile}</>
  : <div className={classes.emptyContent}>No Data</div>;

  const gridPart = <div className={classes.todoGridContent}>
    {headerRow}
    {rowsPart}
  </div>;

  const gridPartMobile = <div className={classes.todoGridContentMobile}>
    {rowsPartMobile}
  </div>;

  const modalPart = isModalVisible ? <AddTodoModal onCloseModal={() => setIsModalVisible(false)}></AddTodoModal> : <></>;

  return (
    <div className={classes.todoGridContainer}>
      <div className={classes.todoGridButtonRow}>
        <button onClick={() => setIsModalVisible(true)}>Add</button>
      </div>
      {gridPart}
      {gridPartMobile}
      {modalPart}
    </div>
  );
}

export default TodoGrid;
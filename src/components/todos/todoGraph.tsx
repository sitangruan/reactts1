/**
 * This is the graph layout of the todo list.
 */

import classes from './todoGraph.module.css';
import AddTodoModal from './addTodoModal';
import { useMemo, useState } from 'react';
import { useAppSelector } from '../../reducers/hooks';
import { getTodoBarChartOptions, getTodoPieChartOptions } from '../../common/graphDataRenderer';
import ReactEcharts from 'echarts-for-react';
import { GraphType } from '../../common/constants';

const TodoGraph: React.FC = () => {
  const [mode, setMode] = useState<GraphType>(GraphType.Bar);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const myTodos = useAppSelector(state => state.todoReducer);

  const onChangeGraphPattern = (val: GraphType) => setMode(val);

  const modalPart = isModalVisible ? <AddTodoModal onCloseModal={() => setIsModalVisible(false)}></AddTodoModal> : <></>;

  const barOption = useMemo(() => getTodoBarChartOptions(myTodos), [myTodos]);
  const pieOption = useMemo(() => getTodoPieChartOptions(myTodos), [myTodos]);

  const barHiddenClass = mode === GraphType.Bar ? ' ' : ' hidden';
  const pieHiddenClass = mode === GraphType.Pie ? ' ' : ' hidden';
  const barGraph = <div className={barHiddenClass}><ReactEcharts option={barOption} /></div>;
  const pieGraph = <div className={pieHiddenClass}><ReactEcharts option={pieOption} /></div>;  

  return (
    <div className={classes.todoGraphContainer}>
      <div className={classes.todoGraphButtonRow}>
        <button onClick={() => setIsModalVisible(true)}>Add</button>
      </div>
      <div className={classes.graphRadioGroupRow}>
        <div className={classes.typeLabel}>Graph Type:</div>
        <input type='radio' id='barRadio' value={GraphType.Bar} checked={mode === GraphType.Bar}
          name='graphPattern' onChange={() => onChangeGraphPattern(GraphType.Bar)} />
        <label htmlFor='barRadio'>Bar</label>
        <input type='radio' id='pieRadio' value={GraphType.Pie} checked={mode === GraphType.Pie}
          name='graphPattern' onChange={() => onChangeGraphPattern(GraphType.Pie)} />
        <label htmlFor='pieRadio'>Pie</label>
      </div>
      <div className={classes.todoGraphContent}>
        <div className={classes.graphPanel}>
          {barGraph}
          {pieGraph}
        </div>
      </div>
      {modalPart}
    </div>
  );
}

export default TodoGraph;
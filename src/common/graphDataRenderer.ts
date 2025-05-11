/**
 * This is tool to render graph options.
 */

import TodoElement from "../modals/TodoElement";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTodoPieChartOptions = (todoList: Array<TodoElement>): any => {
  let completedCount = 0;
  let incompletedCount = 0;

  todoList.forEach(t => {
    if (t.Completed) {
      completedCount++;
    } else {
      incompletedCount++;
    }
  });

  const option = {
    title: {
      text: 'Completed VS Not Completed',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    newOption: true,
    series: [
      {
        type: 'pie',
        radius: '75%',
        data: [
          { value: completedCount, name: 'Completed' },
          { value: incompletedCount, name: 'Not Completed' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
    ],
    width: 'auto',
    height: 'auto'
  };

  return option;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTodoBarChartOptions = (todoList: Array<TodoElement>): any => {
  const userIdArray = new Array<number>();

  todoList.forEach(t => {
    if (userIdArray.indexOf(t.UserId) < 0) {
      userIdArray.push(t.UserId);
    }
  });

  const userIdCompletedTodoCountArray = Array(userIdArray.length).fill(0);
  const userIdIncompletedTodoCountArray = Array(userIdArray.length).fill(0);

  todoList.forEach(t => {
    const index = userIdArray.indexOf(t.UserId);

    if (index > -1) {
      if (t.Completed) {
        userIdCompletedTodoCountArray[index]++;
      } else {
        userIdIncompletedTodoCountArray[index]++;
      }
    }
  });

  const option = {
    title: {
      text: 'Completed VS Not Completed',
      subtext: 'Per User'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Completed', 'Not Completed']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: userIdArray
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    newOption: true,
    series: [
      {
        name: 'Completed',
        type: 'bar',
        data: userIdCompletedTodoCountArray,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{type: 'average', name: 'Avg' }],
        }
      },
      {
        name: 'Not Completed',
        type: 'bar',
        data: userIdIncompletedTodoCountArray,
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          data: [{type: 'average', name: 'Avg' }],
        }
      }
    ]
  };

  return option;
}
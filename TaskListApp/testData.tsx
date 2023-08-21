import {ePercentage, ePriority, eStatus} from './preDefinedTypes';

export let obj1 = {
  task: 'testTask1',
  priority: ePriority.High,
  status: eStatus.ToDo,
  percentage: ePercentage.ToDo,
};

export let obj2 = {
  task: 'testTask2',
  priority: ePriority.Medium,
  status: eStatus.InProgress,
  percentage: ePercentage.InProgress,
};
export let obj3 = {
  task: 'testTask3',
  priority: ePriority.Low,
  status: eStatus.Done,
  percentage: ePercentage.Done,
};

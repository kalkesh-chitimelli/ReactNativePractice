export enum ePriority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export enum eStatus {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

export enum ePercentage {
  ToDo = 0,
  InProgress = 50,
  Done = 100,
}

export interface iTask {
  task: string;
  priority: ePriority;
  status: eStatus;
  percentage: ePercentage;
}

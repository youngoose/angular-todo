export enum TodoStatus {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export interface Todo {
  id: string;
  todo: string;
  status: TodoStatus;
}

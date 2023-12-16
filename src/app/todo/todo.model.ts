type todoStatus = 'active' | 'completed';

export interface Todo {
  id: string;
  todo: string;
  status: todoStatus;
}

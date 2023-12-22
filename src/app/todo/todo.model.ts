type todoStatus = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  todo: string;
  status: todoStatus;
}

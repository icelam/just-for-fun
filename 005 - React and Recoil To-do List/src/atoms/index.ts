import { atom } from 'recoil';

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

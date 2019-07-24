import { todoReducer } from './todoReducer';

export const rootReducer = ({ todoList }, action) => ({
  todoList: todoReducer(todoList, action)
});

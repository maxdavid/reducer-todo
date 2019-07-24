import React, { useReducer } from 'react';
import { TodoContext } from '../contexts';

export const StateProvider = ({ reducer, initialState, children }) => (
  <TodoContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoContext.Provider>
);

export const initialState = {
  todoList: [
    {
      title: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

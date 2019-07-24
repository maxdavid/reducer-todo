import React, { useContext } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../hooks';
import { Todo } from './Todo';

export const TodoList = () => {
  const [{ todoList }, dispatch] = useStateValue();

  return (
    <TodoListContainer>
      {todoList.map(todo => (
        <Todo key={todo.id} todoInfo={todo} />
      ))}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../hooks';
import { Todo } from './Todo';

export const TodoList = () => {
  const [{ todoList }, dispatch] = useStateValue();

  return (
    <TodoListContainer>
      {todoList.map(todo => (
        <Details>
          <Summary>{todo.deadline}</Summary>
          <Todo key={todo.id} todoInfo={todo} />
        </Details>
      ))}
    </TodoListContainer>
  );
};

const Details = styled.details`
  width: 100%;
  outline: none;
`;
const Summary = styled.summary`
  width: 100%;
  outline: none;
  height: 20px;
  cursor: pointer;
`;

const TodoListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

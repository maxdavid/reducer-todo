import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../hooks';

export const Todo = props => {
  const [, dispatch] = useStateValue();
  const { title, completed } = props.todoInfo;
  return (
    <TodoContainer
      completed={completed}
      onClick={() =>
        dispatch({ type: 'TOGGLE_COMPLETED', payload: props.todoInfo })
      }
    >
      <h2>{title}</h2>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 100%;
  text-align: left;
  height: auto;
  background-color: #cccccc66;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: ${props => props.completed && 'line-through'};
  opacity: ${props => props.completed && '0.5'};
`;

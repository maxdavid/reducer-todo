import React, { useState } from 'react';
import { useStateValue } from '../hooks';
import styled from 'styled-components';
const moment = require('moment');

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    deadline: moment().format('YYYY-MM-DD')
  });
  const [{ todoList }, dispatch] = useStateValue();

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo({ title: '', deadline: '' });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'REMOVE_COMPLETED' });
  };

  return (
    <div>
      <Form>
        <LabeledInput>
          <label>Title</label>
          <input
            type='text'
            name='title'
            required
            value={newTodo.title}
            onChange={e =>
              setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
            }
          />
        </LabeledInput>
        <LabeledInput>
          <label>Deadline</label>
          <input
            type='date'
            name='deadline'
            value={newTodo.deadline}
            onChange={e =>
              setNewTodo({ ...newTodo, [e.target.name]: e.target.value })
            }
          />
        </LabeledInput>
        <Buttons>
          <SubmitButton disabled={!newTodo.title} onClick={e => addTodo(e)}>
            Submit
          </SubmitButton>
          <button onClick={e => clearCompleted(e)}>Clear Completed</button>
        </Buttons>
      </Form>
      <Buttons />
    </div>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 10px auto;
  padding-right: 40px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
`;

const SubmitButton = styled.button`
  margin-bottom: 10px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

const LabeledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;

  label {
    text-align: right;
    padding-right: 5px;
    align-items: center;
    vertical-align: middle;
    min-width: 100px;
    font-size: 1.2rem;
  }

  input {
    width: 100%;
  }
`;

export default TodoForm;

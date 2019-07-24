import { useContext } from 'react';
import { TodoContext } from '../contexts';

export const useStateValue = () => useContext(TodoContext);

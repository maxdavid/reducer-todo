export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      console.log(payload);
      const todo = {
        title: payload.title,
        deadline: payload.deadline,
        completed: false,
        id: Date.now()
      };
      return [...state, todo];
    case 'REMOVE_TODO':
      return [...state.filter(todo => todo.id !== payload.id)];
    case 'REMOVE_COMPLETED':
      return [...state.filter(todo => !todo.completed)];
    case 'TOGGLE_COMPLETED':
      return [
        ...state.map(todo => {
          if (todo.id === payload.id)
            return { ...todo, completed: !todo.completed };
          else return todo;
        })
      ];
    default:
      return state;
  }
};

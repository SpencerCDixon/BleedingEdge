import * as Actions from '../constants/ActionTypes';

const initialState = {
  todos: [
    {
      text: 'Create redux app',
      completed: false,
      id: 0,
    },
  ],
};

function nextTodoId(state) {
  return state.todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1) + 1;
}

export default function(state = initialState, action) {
  switch (action.type) {
  case Actions.ADD_TODO:
    return Object.assign({}, state, {
      todos: [...state.todos, {
        text: action.text,
        completed: false,
        id: nextTodoId(state),
      }],
    });
  default:
    return state;
  }
}

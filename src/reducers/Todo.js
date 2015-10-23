import * as Actions from '../constants/ActionTypes';

const initialState = {
  todos: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
  case Actions.ADD_TODO:
    return Object.assign({}, state, {
      todos: [...state.todos, {
        text: action.text,
        completed: false,
      }]
    });
  default:
    return state;
  }
}

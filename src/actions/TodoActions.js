import {ADD_TODO} from '../constants/ActionTypes';

export function addTodo(todo) {
  return { type: ADD_TODO, todo }
}

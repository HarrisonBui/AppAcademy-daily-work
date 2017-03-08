import * as todoUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";




export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const removeTodo = (todos) => {
  return {
    type: REMOVE_TODO,
    todos
  };
};

export const fetchTodos = () => dispatch => (
  todoUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => {
  return todoUtil.saveTodo(todo)
    .then(newTodo => dispatch(receiveTodo(newTodo)),
          err => dispatch(receiveErrors(err.responseJSON)));
};

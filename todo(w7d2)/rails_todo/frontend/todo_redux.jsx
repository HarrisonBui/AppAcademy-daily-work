import React from 'react';
import ReactDOM  from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos, fetchTodos, createTodo} from './actions/todo_actions';
import Root from './components/root';

const store = configureStore;

window.store = store;           //REMOVE LATER
window.allTodos = allTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.fetchTodos = fetchTodos;
window.createTodo = createTodo;
window.Root = Root;

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Root store={store} />,  document.getElementById('root'));
});

import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  const newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TODOS:
      const recState = {};
      action.todos.map(todo => (recState[todo.id] = todo));
      return recState;

    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;

    case REMOVE_TODO:
      const removeState = merge({}, state);
        delete removeState[action.todos.id];
      return removeState;

    default:
      return state;
  }
};


export default todosReducer;

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
  switch(action.type){
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.map(todo => (newState[todo.id] = todo));
      return newState;

    case RECEIVE_TODO:
      const singularState = {};
      singularState[action.todo.id] = action.todo;
      let returnState = merge(singularState, state);
      return returnState;

    case REMOVE_TODO:
      const removeState = merge({}, state);
        delete removeState[action.todos.id];
      return removeState;

    default:
      return state;
  }
};


export default todosReducer;

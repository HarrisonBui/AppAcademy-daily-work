import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos, createTodo }
    from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});


const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ListContainer;

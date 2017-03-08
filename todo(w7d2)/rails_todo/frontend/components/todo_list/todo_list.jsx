import React from 'react';
import Listcontainer from './todo_list_container';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    const { todos, receiveTodo, removeTodo, createTodo} = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        todo={todo}
        key={`todo-list-item${todo.id}`}
        receiveTodo={receiveTodo}
        removeTodo={removeTodo}/>
      )
    );

    return (
      <div>
        <ul className="todo-list">
          {todoItems}
        </ul>
      <hr/>
      <TodoForm createTodo={createTodo} />
    </div>
  );
  }
}

export default TodoList;

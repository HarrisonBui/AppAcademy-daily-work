import React from 'react';
import Listcontainer from './todo_list_container';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



const TodoList = (props) => (
  <div>
    <ul>
      { props.todos.map( (todo, idx) =>
        <TodoListItem todo={todo} key={idx}
          removeTodo={props.removeTodo}/>)}
    </ul>
    <hr/>
    <TodoForm receiveTodo={props.receiveTodo} />
  </div>
);

export default TodoList;

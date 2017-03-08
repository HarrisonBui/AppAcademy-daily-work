import React from 'react';
import { uniqueId } from '../../util/util';
import merge from 'lodash/merge';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.processDelete = this.processDelete.bind(this);
    this.processDone = this.processDone.bind(this);
  }

  processDelete(event){
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  processDone(event){
    event.preventDefault();
    console.log(this.props.todo);
    const newTodo = merge({}, this.props.todo);
    newTodo.done = !this.props.todo.done;
    // const toggledTodo = merge(
    //   {},
    //   this.props.todo,
    //   { done: !this.props.todo.done }
    // );
    console.log(newTodo);
     this.props.receiveTodo(newTodo);
     console.log(newTodo);
  }

  render(){
    return(
      <li >
        { this.props.todo.title }
        <button onClick={this.processDelete}>Remove</button>
          <button
              className={ this.props.todo.done ? "done" : "undone" }
              onClick={ this.processDone }>
              { this.props.todo.done ? "Undo" : "Done" }
            </button>

      </li>
    );
  }
}


export default TodoListItem;

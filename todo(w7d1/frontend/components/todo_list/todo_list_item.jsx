import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.processDelete = this.processDelete.bind(this);
  }

  processDelete(event){
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render(){

    return(
      <li >
        { this.props.todo.title }
        <button onClick={this.processDelete}>Remove</button>
      </li>
    );
  }
}


export default TodoListItem;

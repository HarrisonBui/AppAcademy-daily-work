import React from 'react';
import { createTodo } from '../../actions/todo_actions';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.enterTitleState = this.enterTitleState.bind(this);
    this.enterBodyState = this.enterBodyState.bind(this);

  }

  enterTitleState(event){
    this.setState({title: event.currentTarget.value});
  }

  enterBodyState(event){
    this.setState({body: event.currentTarget.value});
  }

  handleInput(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(todo)
    .then(
      () => this.setState({ title: "", body: "" })
    );
  }


  render(){
    return(
      <form>
        <label>Title:<br/>
          <input onChange={this.enterTitleState} value={this.state.title} type="text"
            placeholder="Buy milk"/>
        </label><br/>
        <label>Body:<br/>
          <textarea onChange={this.enterBodyState} value={this.state.body}  placeholder="details...">
          </textarea>
        </label><br/>
        <button onClick={this.handleInput}>Create Todo Item!</button>
      </form>
    );
  }
}

export default TodoForm;

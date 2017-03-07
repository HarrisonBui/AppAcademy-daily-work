import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
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
    this.props.receiveTodo({
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    });

  }


  render(){
    return(
      <form>
        <label>Title:<br/>
          <input onChange={this.enterTitleState} type="text" placeholder="Buy milk"/>
        </label><br/>
        <label>Body:<br/>
          <textarea onChange={this.enterBodyState}></textarea>
        </label><br/>
        <button onClick={this.handleInput}>Create Todo Item!</button>

      </form>
    );
  }
}

export default TodoForm;

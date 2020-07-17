import React, {Component} from 'react';
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types';

class Todos extends Component {

  markComplete=(e)=>{
        
  }



    render(){
  return this.props.todos.map((todo)=>(
  <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
  ));
}
}

//Prop Types
Todos.propTypes={
  todo:PropTypes.object.isRequired
}

export default Todos;
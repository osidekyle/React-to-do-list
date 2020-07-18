import React, {Component} from 'react';
import TodoItem from "./TodoItem"
import PropTypes from 'prop-types';

class Todos extends Component {





    render(){
  return this.props.todos.map((todo)=>(
  <TodoItem key={todo.id} delTodo={this.props.delTodo} todo={todo} markComplete={this.props.markComplete}/>
  ));
}
}

//Prop Types
Todos.propTypes={
  todo:PropTypes.array.isRequired
}

export default Todos;
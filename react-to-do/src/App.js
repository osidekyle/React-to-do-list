import React,{Component} from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"

class App extends Component {
  state=
  {
    todos:[
      {
        id:1,
        title:"Take out the trash",
        completed:false,
      }
      ,
      {
        id:2,
        title:"Workout",
        completed:false,
      }
      ,
      {
        id:3,
        title:"Homework",
        completed:false,
      }
    ]
  }

  //Toggle Complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
          if(todo.id===id){
            todo.completed=!todo.completed;
          }

          return todo;
          
        }) });   
  }


  //Delete Todo
  delTodo=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});

  }

  //Add Todo
  addTodo = (title) =>{
    this.setState
  }


  render(){
  return (
    <div className="App">
      <div class="container">
      <Header/>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
    </div>
  );
}
}

export default App;

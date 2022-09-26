import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  
  const [todos,setTodos] = useState([]);

  const addTodo = (text) =>{
    let todo = {
      text:text,
      id:todos.length+1,
      complated :false
    };


    let newTodos = [todo,...todos];
    setTodos(newTodos);

    console.log(newTodos);
  }

  const removeTodo = (id) =>{
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }


  
  const checkTodo = (id) =>{

    let updatedTodos = todos.map((todo)=>{
      if(todo.id == id){
        todo.complated = !todo.complated;
      }
      return todo;
    });
    setTodos(updatedTodos)
    console.log(...todos);
    
  }

  return (


    <div className="App bg-success p-1 text-center fs-2 centered text-light border border-4 border-light rounded" >
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) =>{
        return(
          <TodoItem checkTodo = {checkTodo} removeTodo = {removeTodo} todo={todo} key={todo.id}/>
        )
      })}
     
    </div>
  );
}

export default App;

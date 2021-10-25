import React from 'react';
import { useState } from 'react';
import {TodoList} from './Components/TodoList';
import { AddTodoForm } from './Components/AddTodoForm';

const initialTodos: Array<Todo> = [
 ];

 

 const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        }
      }
      //if condition not met, just return todo as it was.
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, {text: newTodo, complete: false}]);
  }
  
  return(
    <React.Fragment>
      <TodoList todos = {todos} toggleTodo = {toggleTodo} />
      <AddTodoForm addTodo = {addTodo}/>
    </React.Fragment>
  )

 
}

export default App;

import React from 'react';
import "../ToDoListItem.css"


interface TodoListItemProps {
   todo: Todo;
   toggleTodo: ToggleTodo;
   //we are going to have some todo
}


interface TodoListItemProps {
    todo: Todo;
 } 

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return(
        <li>
            <label className = {todo.complete ? "complete" : undefined}>
                <input type = "checkbox" checked = {todo.complete} onChange={() => toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>
  
    )
 }
 
 
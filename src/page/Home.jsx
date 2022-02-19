import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
      console.log(todo)
      setTodos([...todos, todo])
  }

  const deleteTodo = (id) =>{
      var filtered = todos.filter((todo) => todo.id !== id);
      setTodos(filtered);
  }

    return (
        <div>
            <Form addTodo={addTodo}/>
            {todos.map((todo, key) =>(
                <TodoItem key={key} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </div>

    )
}
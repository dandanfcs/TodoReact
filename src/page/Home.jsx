import { Container,Box, Button, Paper, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import Api from '../Api'

export default function Home() {
const [todos, setTodos] = useState([]);

   useEffect(()=>{
       Api.get('').then(({data})=>{
        setTodos(data);
        console.log(data)
       });
       
   }, [])

   

    const addTodo = (todo) => {
     
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

  

    return (
        <Container maxWidth="sm" >
            <Box m={1}>
                <Form addTodo={addTodo} />
                {todos?.map((todo, key) => (
                    <TodoItem key={key} todo={todo} deleteTodo={deleteTodo} />
                ))}

            </Box>
        </Container >

    )
}
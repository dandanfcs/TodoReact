import { Button,Paper, TextField } from "@material-ui/core";
import React from "react";

export default function Todoitem({todo, deleteTodo}){

    return(
        <div>
            <span>{todo.text}</span>
            <span><b onClick={ () => deleteTodo(todo.id)} >X</b></span>
         </div>
    )
}
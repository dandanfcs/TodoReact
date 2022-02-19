import { Button,Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Form({addTodo}){

    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) =>{
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById('outlined-basic').value=null;
    }

    return(
        <Paper>
            <TextField id="outlined-basic"
             label="outiline"
             onChange={ (e)=> setText(e.target.value)}
             />

            <Button 
            variant="text"
            onClick={ () => todoCreate(text)}
            >Add</Button>
        </Paper>
    )
}
import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";

export default function Todoitem({ todo, deleteTodo }) {

    return (
        <Paper
            sx={{ height: 'auto' }}
         >
            <div  sx={{ width: '100%' }}
               style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", padding: "10px" }}>
                <span style={{lineBreak: "anywhere", marginRight: "10px"}}>{todo.text}</span>
                <span><b onClick={() => deleteTodo(todo.id)} >X</b></span>

            </div>
        </Paper>
    )
}
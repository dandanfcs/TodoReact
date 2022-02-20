import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from '../services/Api';

export default function Form({ addTodo }) {

    const [text, setText] = useState(null);

    const todoCreate =  (text) => {
        const todoObj = { nome: text };
        addTodo(todoObj);

        try {
            axios.post('/addtask', todoObj);
        }
        catch (error) {
            console.log(error.message);
        }

        document.getElementById('outlined-basic').value = null;
    }


return (
    <>
    <div style={{ display: "flex", justifyContent: "center", padding: "10px", color:"white" }}><h1>TODO LIST</h1></div>
    <Paper>

        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <TextField id="outlined-basic"
                label="Tarefa"
                style={{width:"82%"}}
                fu
                onChange={(e) => setText(e.target.value)}
            />

            <Button
                style={{ background: "#1976d2", color: "white", padding:"5px", fontWeight:"bold"}}
                size="small"
                onClick={() => todoCreate(text)}
            >Adicionar</Button>
        </div>
    </Paper>
    </>
)
}
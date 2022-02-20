import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from '../services/Api';

export default function Form({ addTodo }) {

    const [text, setText] = useState(null);

    const todoCreate =  (text) => {
        const todoObj = { nome: text };
        console.log(todoObj)
        addTodo(todoObj);

        try {
            console.log("xxx")
            const response = axios.post('/addtask', todoObj)
        }
        catch (error) {
            console.log("aaaa"+error.message)
        }

        document.getElementById('outlined-basic').value = null;
    }


return (
    <Paper>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
            <TextField id="outlined-basic"
                label="Tarefa"
                fullWidth
                onChange={(e) => setText(e.target.value)}
            />

            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => todoCreate(text)}
            >Adicionar</Button>
        </div>
    </Paper>
)
}
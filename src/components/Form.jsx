import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
//import AddIcon from '@mui/icons-material/Add';

export default function Form({ addTodo }) {

    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
        const todoObj = { text: text, id: id };
        setId(id + 1);
        addTodo(todoObj);
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
import { Button, Paper, Checkbox } from "@material-ui/core";
import React from "react";
import { MdDelete } from "react-icons/md";

export default function Todoitem({ todo, deleteTodo }) {

    return (
        <Paper
            sx={{ height: 'auto' }}
        >
            <div sx={{ width: '100%' }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", padding: "10px", fontWeight:"bold" }}>

                <div>
                    <span> <Checkbox color="primary" /> </span>
                    <span style={{ lineBreak: "anywhere", marginRight: "10px" }}> {todo.nome} </span>
                </div>

                <span> <MdDelete onClick={() => deleteTodo(todo.id)} /> </span>
            </div>
        </Paper>
    )
}
import TodoTitle from "./TodoTitle";
import React, { useState } from "react";


export default function TodoForm({addTodo}) {
    
    const [input, setInput] = useState("");


    const addTodoButton = () =>{
        addTodo(input);
        

    }

    return (
        <div className="todo-form d-flex flex-column justify-content-center">
            <TodoTitle />


            <form>
                <div className="input-group  px-5  ">

                    <input onChange={(e) => { 
                        setInput(e.target.value) 
                    }} 
                    type="text" value={input} className="form-control" placeholder="Write a todo" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>

                    <button onClick={() => {
                        addTodoButton();
                        setInput("");
                        }}
                          className="btn btn-light btn-outline-secondary fw-bold fs-4" type="button" id="button-addon1">+</button>

                </div>



            </form>


        </div>
    )
}
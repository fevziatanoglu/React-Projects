import { useEffect, useState } from "react"
import { addTodos, checkTodos, deleteTodos, getTodos } from "../axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TodoItem from "./todoItem";

export default function TodoPage({ user }) {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        return async () => {
            await getTodos({ email: `${JSON.parse(user).email}` }).then(response => { setTodos(response.data.todos) })
        }
    }, [0])



    const getUsersTodos = async () => {
        await getTodos({ email: `${JSON.parse(user).email}` }).then(response => { console.log(response.data.todos) }).catch(e => { console.log(console.error()) })
    }


    const addNewTodo = async (text) => {
        const textAndEmail = { text: text, email: JSON.parse(user).email }
        await addTodos(textAndEmail).then(response => console.log(response)).catch(error => console.log(error))

        console.log(await getTodos({ email: `${JSON.parse(user).email}` }).then(response => { setTodos(response.data.todos, ...todos) }))
    }


    const deleteUserTodo = async (id) => {

        await deleteTodos({ id: id, user: user._id }).then(async response => {
            await getTodos({ email: `${JSON.parse(user).email}` }).then(response => { setTodos(response.data.todos) })

        }).catch(e => console.log(e));
    }


    const checkUserTodo = async (id) => {

        await checkTodos({ id: id}).then(async response => {
            console.log(response)
            await getTodos({ email: `${JSON.parse(user).email}` }).then(response => { setTodos(response.data.todos) })

        }).catch(e => console.log(e));
    }











    return (
        <div className="text-center text-light container ">

            <div>Welcome {JSON.parse(user).email}</div>


            <div className=" mx-lg-5 mt-2 p-lg-5">
                <InputGroup className="mb-3">

                    <Form.Control
                        placeholder="Todo"
                    />

                    <Button onClick={(e) => {
                        const input = e.target.parentElement.children[0].value;

                        if (input) {
                            addNewTodo(input);
                            e.target.parentElement.children[0].value = "";
                        }


                        // console.log(e.target.parentElement.children)


                    }} className="btn btn-success border border-2  text-light" variant="outline-secondary" id="button-addon2">
                        Add Todo
                    </Button>
                </InputGroup>

            </div>



            {
                todos.map(todo => {
                    return (
                        <TodoItem todo={todo} user={user} deleteUserTodo={deleteUserTodo} checkUserTodo={checkUserTodo}/>
                    )
                })
            }




        </div>
    )
}
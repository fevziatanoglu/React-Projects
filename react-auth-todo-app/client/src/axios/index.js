import axios from "axios"

const HTTP = axios.create({
    baseURL:"http://localhost:5000/"
})

export async function signIn(formData){
    return await HTTP.post("/users/signin",formData);
}

export async function signUp(formData){
    return await HTTP.post("users/signup",formData);
}

export async function getTodos(email){
    return await HTTP.post("todo/gettodo",email);
}

export async function addTodos(textAndEmail){
    return await HTTP.post("todo/addtodo",textAndEmail);
}


export async function deleteTodos(idAndUser){
    return await HTTP.post("todo/deletetodo", idAndUser );
}


export async function checkTodos(id){
    return await HTTP.post("todo/checktodo", id );
}
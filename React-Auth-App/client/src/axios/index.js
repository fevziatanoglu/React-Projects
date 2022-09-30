import axios from "axios"

const HTTP = axios.create({
    baseURL : "http://localhost:5000",
})

// export default async function login(formData){
//     // formDatayı body olarak 
//     // baseUrl + /users/signin e gonder
//     await HTTP.post("/users/signin" , formData)
// }

async function login(formData){

   return await HTTP.post("/users/signin" , formData);
}

async function register(formData){

    return await HTTP.post("users/signup" , formData)
}

export {login , register};
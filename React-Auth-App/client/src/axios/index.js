import axios from "axios"

const HTTP = axios.create({
    baseURL : "http://localhost:5000",
})

// export default async function login(formData){
//     // formDatayı body olarak 
//     // baseUrl + /users/signin e gonder
//     await HTTP.post("/users/signin" , formData)
// }

export default async function login(formData){

   return  HTTP.post("/users/signin" , formData);
    
}
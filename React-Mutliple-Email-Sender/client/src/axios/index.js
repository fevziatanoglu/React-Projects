import axios from "axios";

const HTTP = axios.create({
    baseURL:"http://localhost:5000"
})


async function sendMail(emails,subject,textMessage,senderEmail){
 return await HTTP.post("send",{emails,subject,textMessage,senderEmail});
}


async function checkSenderMail(senderMail){
    return await HTTP.post("check",senderMail);
   }


export {sendMail,checkSenderMail}
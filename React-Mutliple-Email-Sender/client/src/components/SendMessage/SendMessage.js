import { useState } from "react";
import MailDataForm from "./MailDataForm";


export default function SendMessage({sendMail,mailData,setMailData,senderEmail}){
   
   const[isSend,setSend] = useState(false);
   const[isSuccess,setSuccess] = useState();
   const[message,setMessage] = useState();
    const [adresses,setAdresses] = useState([])
   
   const getMailAdressFromEmails = ()=>{
    mailData.emails.forEach(emailObject => {
      adresses.push(emailObject.adress);
      setAdresses(adresses)
    });
   }


    return(

<div className='text-light fw-bold container'>


 <MailDataForm mailData={mailData} setMailData={setMailData} senderEmail={senderEmail}/>



{
  isSend ? <div  className={isSuccess ? "mb-3 text-center text-success" : "mb-3 text-center error-text  mx-5"}>
    {
      message +"!"
    }
    
    </div> : null
}





<div className='text-center '>


  <button type="submit" onClick={async (e) => {

    setSend(true);

    if(mailData.textMessage && mailData.subject){
       
      getMailAdressFromEmails();
      
     console.log(adresses)

      await sendMail(adresses , mailData.subject,mailData.textMessage,senderEmail)
      .then(response => {
        console.log(response.data.message);
        setSuccess(response.data.success);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
        setSuccess(false);
        setMessage(error.response.data.message)
        });
       console.log(senderEmail)
    
    }else{
      setSuccess(false);
      setMessage("You have to fill subjet and message areas!");
    }

    


  }} className='btn rounded border border-4 border-primary text-light  fs-5 fw-light fs-4'>Send Emails</button>

</div>

</div>



    )
}
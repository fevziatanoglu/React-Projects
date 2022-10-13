import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { checkSenderMail } from "../../axios"

export default function SenderMailPage({senderEmail,setSenderEmail}){
    
    const [isCheck,setCheck] = useState(false);
    const [isSuccess,setSuccess] = useState(false);
    const [message,setMessage] = useState();
    const [input,setInput] = useState({
        user:"",
        pass:""
    })

    return (


        <div className="text-center container pt-2">

            <div className='text-light fw-lifgr display-3 mb-1'>Sender Email</div>
             
            <Form>
                <Form.Group  className="mb-3 rounded" controlId="formBasicEmail">
                   
                    <Form.Control
                    

                    onChange={(e)=>{
                     senderEmail.user = e.target.value;
                     setSenderEmail(senderEmail)

                }} type="email" placeholder="Enter email" />
     
                </Form.Group>

                <Form.Group  className="mb-3 rounded" controlId="formBasicPassword">
                    
                    <Form.Control onChange={(e)=>{
                     senderEmail.pass = e.target.value;
                     setSenderEmail(senderEmail)
                }} type="password" placeholder="Password" />

                </Form.Group>

   


                
  {isCheck ? <div className={isSuccess ? "mb-3 text-center text-success" : "mb-3 text-center text-danger"}>
    {
      isSuccess ? "Email could be use." : message
    }
    
    </div> : null}


                <Button 
                
                onClick={async (e)=>{
                    
                   await checkSenderMail(senderEmail)
                    .then(response =>{
                        setSuccess(response.data.success)
                        setMessage(response.data.message)
                        localStorage.setItem("senderEmail" , JSON.stringify(senderEmail));
                        
                    })
                    .catch(error=>{
                        setMessage(error.message);
                        setSuccess(false);
                        console.log(error)
                    })

                    setCheck(true)



                    console.log(senderEmail)
                }}
                className='btn rounded border border-light border-5' variant="primary" >
                    Assing as Sender Email
                </Button>
            </Form>
        </div>
    )
}
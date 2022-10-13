import { useReducer, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUp } from '../axios';

export default function SignUpScreen() {

    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    const [message,setMessage] = useState();

    const register = async () => {
        await signUp(input)

            .then(response => {
                console.log(response.data.message)
                localStorage.setItem("user" , JSON.stringify({email:input.email,password:input.password}))
                window.location.pathname="/";
            })
            .catch(e => {
               setMessage(e.response.data.message)
            })

            if(!input.email || !input.password || !input.confirmPassword){
                setMessage("You have to fill all field!")
            }

            
    }

    return (
        <div className='justify-content-center'>
            <div className='container px-lg-5 '>

                <Form className='m-5 p-lg-5 p-2 border border-light border-5 rounded bg-dark text-center'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onChange={(e) => {
                            input.email = e.target.value;
                            setInput(input);
                        }} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={(e) => {
                            input.password = e.target.value;
                            setInput(input);
                        }} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">


                        <Form.Group className="mb-3" controlId="formBasicPasswordRepetition">
                            <Form.Control onChange={(e) => {
                                input.confirmPassword = e.target.value;
                                setInput(input);
                            }} type="password" placeholder="Password repetition" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

                        <Form.Text className="text-light fw-light d-flex flex-row justify-content-center">

                            <div className='mt-1   d-flex flex-row justify-content-center'>
                                <div>Have an account &nbsp;</div>
                                <a href='signin'>Sign In</a>
                            </div>

                        </Form.Text>
                    </Form.Group>
                   
                   <div className='text-danger mb-3 fw-light'>
                    {(message) ? message : "" }
                   </div>

                    <Button 
                    
                    onClick={(e)=>{
                        register();
                        console.log(message);
                    }}>
                        Sign Up
                    </Button>



                </Form>
            </div>
        </div >
    )
}
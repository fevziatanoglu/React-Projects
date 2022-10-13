import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signIn } from ".././axios/index.js"


export default function SignInScreen() {

    const [input, setInput] = useState(
        { email: "", password: "" })

    const [isSuccess, setSuccess] = useState(false);
    const [message, setMessage] = useState();

    const login = async () => {
        

        await signIn(input).then(response => {
            console.log(response.data.message)
            localStorage.setItem("user",JSON.stringify(input));
            // console.log(JSON.parse(localStorage.getItem("user")))
            window.location.pathname="/";
            setSuccess(true);
        })
            .catch(e => {
                console.log(e.response.data.message)
                setSuccess(false);
                setMessage(e.response.data.message)
                
            });

        if (!input.email || !input.password) {
            setMessage("You have to fill all fields!")
        }
    }

    return (
        <div className='justify-content-center'>
            <div className='container px-lg-5 '>


                <Form className='m-5 p-lg-5 p-2 border border-light border-5 rounded bg-dark text-center'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control
                            onChange={(e) => {
                                input.email = e.target.value;
                                setInput(input)
                            }}
                            type="email"
                            placeholder="Enter email" />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control
                            onChange={(e) => {
                                input.password = e.target.value;
                                setInput(input);
                            }} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text className="text-light fw-light d-flex flex-row justify-content-center">

                            <div className='mt-1 d-flex flex-row justify-content-center '>
                                <div>Don't have account &nbsp;</div>
                                <a href='signup'>Sign Up</a>
                            </div>

                        </Form.Text>
                    </Form.Group>





                    <div className='text-danger mb-3'>
                        {isSuccess ? "" : message}
                    </div>

                    <Button
                        className=' border border-5 border-light rounded '
                        onClick={async (e) => {
                            login();
                        }}

                        variant="primary" >

                        Sign In
                    </Button>


                </Form>

            </div>
        </div>
    )
}

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import login from "../axios/index"

export default function SignInScreen() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  return (


    <div className="m-2 p-2 mx-lg-5 p-lg-5 ">

      <Form onSubmit={
        async (e) => {
          e.preventDefault();

        await login(formData).then(response =>console.log(response)).catch(error => console.log(error));
         
        }

      } className='d-flex  flex-column '>


        {/* email input */}
        <FloatingLabel controlId="floatingTextarea1" label="Email">
          <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </FloatingLabel>
        {/* email input */}


        {/* password input */}
        <FloatingLabel controlId="floatingTextarea2" label="Password">
          <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            <div className='mt-1 d-flex flex-row justify-content-center'>
              <div>If you don't have an account &nbsp;</div>
              <a href='signup'>Sing Up</a>
            </div>
          </Form.Text>
        </FloatingLabel>
        {/* password input */}


        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"> */}
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        {/* </Form.Group> */}


        <Button className='mx-5' variant="primary" type="submit">
          Sing in
        </Button>


      </Form>
    </div>
  )
}
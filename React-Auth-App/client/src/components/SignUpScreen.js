
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { register } from '../axios';
import { useState } from 'react';

export default function SignInScreen({setUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (

    <div className="m-2 p-2 mx-lg-5 p-lg-5 ">

      <Form onSubmit={
        (e) => {
          e.preventDefault();
          console.log(formData);
          register(formData).then(response => {
            console.log(response.data.user)
            localStorage.setItem("user" , JSON.stringify(response.data.user));
            window.location.pathname= "/";

          }).catch(error => console.log(error));
         
        }
      } className='d-flex  flex-column '>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          {/* name input */}
          <FloatingLabel className='mb-2' controlId="floatingTextarea0" label="Name">
            <Form.Control
             onChange={
              (e) => {
                setFormData({ ...formData, name: e.target.value })
              }}
            type="text" placeholder="Name" />

          </FloatingLabel>
          {/* name input */}

          {/* email input */}
          <FloatingLabel controlId="floatingTextarea1" label="Email">
            <Form.Control 
             onChange={
              (e) => {
                setFormData({ ...formData, email: e.target.value })
              }}
            type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </FloatingLabel>
          {/* email input */}

          {/* password input */}
          <FloatingLabel controlId="floatingTextarea2" label="Password">
            <Form.Control 
             onChange={
              (e) => {
                setFormData({ ...formData, password: e.target.value })
              }}
            type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              <div className='mt-1 d-flex flex-row justify-content-center'>
                <div>If you have already an account &nbsp;</div>
                <a href='signin'>Sign In</a>
              </div>
            </Form.Text>
          </FloatingLabel>

        </Form.Group>
        <Button className='mx-5' variant="primary" type="submit" >
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
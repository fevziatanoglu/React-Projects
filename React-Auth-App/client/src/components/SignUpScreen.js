
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function SignInScreen() {

  return (

    <div className="m-2 p-2 mx-lg-5 p-lg-5 ">

      <Form className='d-flex  flex-column '>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          {/* name input */}
          <FloatingLabel className='mb-2' controlId="floatingTextarea0" label="Name">
            <Form.Control type="text" placeholder="Name" />
          
          </FloatingLabel>
          {/* name input */}

          {/* email input */}
          <FloatingLabel controlId="floatingTextarea1" label="Email">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </FloatingLabel>
          {/* email input */}

          {/* password input */}
          <FloatingLabel controlId="floatingTextarea2" label="Password">
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              <div className='mt-1 d-flex flex-row justify-content-center'>
                <div>If you don't have an account &nbsp;</div>
                <a href='signin'>Sing In</a>
              </div>
            </Form.Text>
          </FloatingLabel>

        </Form.Group>
        <Button className='mx-5' variant="primary" type="submit">
          Sing Up
        </Button>
      </Form>
    </div>
  )
}
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button"


export default function MailAdressesForm({addMail,setAdressType,setAdressName,adressName}){

    return(

        <div className='text-center rounded '>
            <InputGroup className="my-2  border border-primary border-5 rounded text-warning d-flex flex-row justify-content-center">
                <Form.Control
                    className='fs-6'
                    value={adressName}
                    onChange={(e) => setAdressName(e.target.value)}
                    placeholder="Email"
                />
                <div>
                    <Form.Select className='bg-primary fw-bold text-light fs-6' onChange={(e) => setAdressType(e.target.value)}>
                        <option value="@gmail.com">@gmail.com</option>
                        <option value="@hotmail.com">@hotmail.com</option>
                        <option value="">manual</option>

                    </Form.Select>

                </div>
            </InputGroup>


            <div><Button className='btn btn-primary rounded fw-light border border-light border-1 ' onClick={(e) => { addMail() }}>Add Email</Button></div>
        </div>
    )
}
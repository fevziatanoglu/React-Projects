
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export default function MailDataForm({ setMailData, mailData }) {



    return (
        <div className='mt-2 mx-lg-5 mx-sm-2'>
            <FloatingLabel label="Subject" className="mb-3 border border-5 border-primary rounded fw-bold">
                <Form.Control 
                
                onChange={(e) => { mailData.subject = e.target.value; setMailData(mailData) }} 
                as="textarea"/>

            </FloatingLabel>


            <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3 border border-5 border-primary rounded fw-bold">

                <Form.Control
                    onChange={(e)=> {mailData.textMessage = e.target.value; setMailData(mailData)}}
                    as="textarea"
                    style={{ height: '150px' }}/>

            </FloatingLabel>
            
        </div>
    )
}
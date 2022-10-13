import './App.css';
import {sendMail} from './axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import MailAdresses from './components/MailAdresses/MailAdresses'
import NavBar from './components/NavBar';
import SendMessage from './components/SendMessage/SendMessage';
import SenderMailPage from './components/Sender Mail Adress/SenderMailPage';

function App() {

  
  const [senderEmail,setSenderEmail] = useState(
   JSON.parse(localStorage.getItem("senderEmail"))
    ||
    {
    user:"",
    pass:""
})

  const [adressList, setAdressList] = useState( JSON.parse(localStorage.getItem("adressList")) || []);
  
 
  const [mailData, setMailData] = useState({
    emails: [...adressList],
    subject: "",
    textMessage: "",
   
  })
  
 

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/sendmessage" element={<SendMessage sendMail={sendMail} mailData={mailData} setMailData={setMailData} senderEmail={senderEmail}/>}></Route>
        <Route path="/mailadresses" element={<MailAdresses adressList={adressList} setAdressList={setAdressList} />}></Route>
        <Route path="/senderemail" element={<SenderMailPage senderEmail={senderEmail} setSenderEmail={setSenderEmail}/>}></Route>


      </Routes>

    </BrowserRouter>

  );
}

export default App;


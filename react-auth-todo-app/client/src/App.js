import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SingUpScreen';
import Navbar1 from './components/Navbar';
import { useState } from 'react';
import TodoPage from './components/todoPage';
import HomePage from './components/homepage';


function App() {

  const [user,setUser] = useState(localStorage.getItem("user") || null);
  
  
    
  
  
  return (
    <div className=''>
   
      <BrowserRouter>
      <Navbar1 />
      
      <Routes>
     <Route path='signin' element={<SignInScreen setUser={setUser}/>}></Route>
     <Route path='signup' element={<SignUpScreen setUser={setUser}/>}></Route>
     <Route path="/" element={<HomePage user={user}/>}></Route>
      </Routes>
      </BrowserRouter>

      


      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
    </div>
  );
}

export default App;

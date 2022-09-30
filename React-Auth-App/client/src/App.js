import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomeScreen from './components/HomeScreen';

import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import { useState } from 'react';

function App() {

  const [user,setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* Routesin icinde olmayan elemanlar path ne olursa olsun ekranda gosterilir */}
      <Navbar user ={user} setUser={setUser} />

      <Routes>
        
        {/* path / iken homescreeni goster  (exact sadece bu path varken gosterir) */}
        <Route path='/' element={<HomeScreen user={user} />} exact></Route>
        <Route path='/signin' element={<SignInScreen  setUser={setUser}/>} exact></Route>
        <Route path='/signup' element={<SignUpScreen />} exact></Route>



      </Routes>

    </BrowserRouter>


  );
}

export default App;





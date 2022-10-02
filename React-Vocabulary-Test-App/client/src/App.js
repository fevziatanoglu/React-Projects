import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route  } from "react-router-dom";
import HomePage from './components/HomePage';
import AddWordPage from './components/AddWordPage';
import { useState } from 'react';
import MyWords from './components/MyWords';


function App() {

  let [wordCards,setWordCards] = useState(
    (localStorage.getItem("wordCards")) ?JSON.parse(localStorage.getItem("wordCards")) : []  
    // JSON.parse(localStorage.getItem("wordCards"))
  );



  const addNewCard = (word,meaning) => {

    let wordCard = {
        id: wordCards.length ,
        word: word,
        meaning: meaning,
    }


    if(word && meaning){
      wordCards.push(wordCard);
      setWordCards([...wordCards].reverse());

      localStorage.setItem("wordCards" , JSON.stringify([...wordCards]));
      console.log(wordCards);
    }

    
}

const removeCard = (id) =>{
    setWordCards([...wordCards].filter((wordCard)=> wordCard.id !== id))

    console.log([...wordCards].filter((wordCard)=> wordCard.id !== id));

    localStorage.setItem("wordCards" , JSON.stringify([...wordCards].filter((wordCard)=> wordCard.id !== id)))

}



  return (
    <BrowserRouter>
    
      <Navbar/>

    <Routes>
    <Route path='/home' element={<HomePage/>}></Route>
    <Route path='/addword' element={<AddWordPage wordCards={wordCards} addNewCard={addNewCard} removeCard = {removeCard} />}></Route>
    <Route path='/mywords' element={<MyWords wordCards={wordCards}/>}></Route>

    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;

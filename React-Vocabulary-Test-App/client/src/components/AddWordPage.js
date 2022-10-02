import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import WordCard from './WordCardListItem';

export default function AddWordPage({ addNewCard, removeCard, wordCards }) {

    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    let i = 0;


    return (


        <div className="d-felx flex-row text-center mt-5  px-lg-3 ">

            <Row className='justify-content-center'>
                <Form onSubmit={
                    (e) => {
                        e.defaultPrevented();

                        addNewCard(word, meaning);

                        // window.location.pathname="/addword"

                    }
                } className='bg-primary border border-5 d-flex flex-row align-items-center justify-content-evenly px-2 py-4 my-1 rounded'>

                    <Form.Group className="d-flex rounded mx-2" controlId="word">
                        <Form.Control onChange={
                            (e) => {
                                setWord(e.target.value)
                            }
                        } type="text" placeholder="Word" />
                    </Form.Group>

                    <Form.Group className="d-flex rounded mx-2" controlId="meaning">
                        <Form.Control onChange={
                            (e) => {
                                setMeaning(e.target.value)
                            }
                        } type="text" placeholder="Meaning" />
                    </Form.Group>

                    <Button className='btn btn-primary text-light fw-bold' variant="primary" type="submit" onClick={(e) => { addNewCard(word, meaning) }}>
                        ADD WORD
                    </Button>
                </Form>
            </Row>

            <Row>


                {
                
                    wordCards.map((wordCard) => {
                        wordCard.id = i;
                        i++

                        return (
                            <div>
                                <WordCard wordCard={wordCard} removeCard={removeCard} key={wordCard.id} />
                            </div>

                        )

                        
                    })

                }


            </Row>
        </div>


    )
}
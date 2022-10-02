import { useState } from "react";
import Button from "react-bootstrap/esm/Button"
import AnswerItem from "./AnswerItem";
import Col from "react-bootstrap/Col"

export default function Test({ wordCards }) {

    const [clickAmount, setClick] = useState(0);
    const [correctAmount, setCorrect] = useState(0);
    const [canClick, setCanClick] = useState(true)
    const [isStart, setStart] = useState(false);
    const [isOver, setOver] = useState(false);

    const [questionWord, setQuestionWord] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answerCards, setAnswerCards] = useState([...wordCards]);
    // const randomShortedArray = answerCards.sort(() => 0.5 - Math.random());



    const getStarted = () => {


        if (answerCards.length >= 4) {
            const randomShortedCards = answerCards.sort(() => 0.5 - Math.random());
            const fourRandomCards = randomShortedCards.slice(0, 4);

            const correctCard = fourRandomCards[Math.floor(Math.random() * 3)];

            setAnswers([...fourRandomCards]);
            setQuestionWord(correctCard);

            const newAnswerCards = [...answerCards].filter((card) => card !== correctCard)
            setAnswerCards(newAnswerCards);



            console.log(answerCards);
        } else {
            console.log("test over");
            setOver(true);
        }

    }

    const waitFor = async () => {
        return new Promise(response => setTimeout(response, 1000))
    }


    const compare = async (e) => {

        if (canClick) {


            setClick(clickAmount + 1);
            if (e.target.textContent == questionWord.meaning) {
                setCanClick(false)
                setCorrect(correctAmount + 1);
                e.target.classList.add("btn-success")

                await waitFor();

                getStarted();



                Array.from(e.target.parentElement.children).forEach(element => {
                    element.classList = "question-text btn btn-primary bg-primary border col-6 justify-content-center fs-2 fs-3 px-4 rounded m-2 ";
                });

                setCanClick(true);
            } else {
                e.target.classList.add("btn-warning");
            }



        }


    }






    return (

        <div className="border border-primary border-4 mx-5 mt-lg-2 m-5  d-flex  flex-column align-items-center justify-content-center text-light fw-bold rounded">

            {

                isStart
                    ? <Col className=" text-center col-lg-6 p-2">

                        <div className="question-text text-center bg-primary border  display-4 px-4 rounded m-2">{questionWord.word}</div>

                        <AnswerItem answers={answers} compare={compare} />

                    </Col>


                    : <div className="col-12 p-2">


                        <div onClick={(e) => {
                            setStart(true);
                            getStarted();
                        }} className="btn btn-primary text-center fs-1 col-12">Start</div>


                        <div className="text-center text-primary p-2">You must have at least 4 word to start test!</div>
                    </div>

            }


            {
                isOver ? <div className="centered text-center rounded border border-5 bg-primary display-2 pt-5">
                    <div className="m-2">Test is over</div>
                    <div className="m-2">Your Score: {correctAmount}/{clickAmount}</div>
                    <Button onClick={(e) => window.location.reload()} className="fw-bold fs-1 px-5 border border-5 mt-2">Restart</Button>
                </div> :

                    <div></div>
            }


        </div>
    )
}
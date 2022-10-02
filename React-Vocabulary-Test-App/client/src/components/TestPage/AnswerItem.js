import Button from "react-bootstrap/esm/Button";

export default function AnswerItem({ answers,compare }) {



    return (
        <div>

            {answers.map((answer) => {

                return (
                    <div onClick={(e) => {
                      compare(e);
                      
                    }} className="question-text btn btn-primary bg-primary border col-6 justify-content-center fs-2 fs-3 px-4 rounded m-2 ">{answer.meaning}</div>
                )
            })
            }

        </div>


    )
}
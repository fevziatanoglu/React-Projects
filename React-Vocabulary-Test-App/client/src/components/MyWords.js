import Row from "react-bootstrap/esm/Row"
import WordCardItem from "./WordCardItem"

export default function MyWords({wordCards}){
    return(
        <Row className="m-1 justify-content-start justify-content-center">

            {
            wordCards.map((wordCard)=>{
                return(
                <WordCardItem wordCard={wordCard}/>
        
                )})
            }

        </Row>
    )
}
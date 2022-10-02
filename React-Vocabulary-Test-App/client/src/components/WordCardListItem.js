import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function WordCardListItem({ wordCard,removeCard, }) {


    return (
        <Row className='bg-primary my-2 d-flex justify-content-evenly row  p-2 rounded border border-5'>
            <Col className=' col-2 col-xs-4 d-flex text-start fw-bold'>{wordCard.word}</Col>
            <Col className=' col-2 text-start justify-content-center fw-bold text-light '>{wordCard.meaning}</Col>
            <Col onClick={
                (e) => {
                    removeCard(wordCard.id)
                }
            } className=' col-lg-1 col-2 btn btn-danger'>X</Col>

        </Row>

    )
}
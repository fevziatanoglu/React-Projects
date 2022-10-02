

export default function WordCardItem({wordCard}){

    let isTurn = 0;

    const flipCard = (e)=>{
        
        e.target.classList.toggle("flip");
        console.log(e.target)
    }

    return(
        <div onClick={(e)=>flipCard(e)} className="wordCard bg-light text-dark col-lg-2 col-5 text-center p-2 fs-2 fw-bold rounded border border-4 m-2 border-primary  p-2">
                    <div className="front-face text-center bg-success">{wordCard.word}</div>
                    <div className="back-face text-center bg-success">{wordCard.meaning}</div>
                </div>
    )
}
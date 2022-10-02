

export default function WordCardItem({wordCard}){

    let isTurn = 0;

    const flipCard = (element)=>{
        
        element.classList.toggle("flip");
        console.log(element)
        
    }

    return(
        <div onClick={(e)=>flipCard(e.target)} className="wordCard bg-dark text-dark col-lg-3 col-5 justfiy-content-center  fs-2 fw-bold rounded border border-4 m-2 border-primary  p-2">
                    <div className="front-face text-center rounded text-primary bg-secondary">{wordCard.word}</div>
                    <div className="back-face text-center rounded text-light bg-primary">{wordCard.meaning}</div>
                </div>
    )
}



export default function ({ mailAdress, removeMail }) {

    return (
        <div className=" rounded border border-3 border-primary m-2 fw-lighter d-flex flex-row justify-content-between">

            <div className="m-1 pt-2 text-light fw-bold">{mailAdress.adress}</div>

            {/* <div className="m-1 col-1 ">{mailAdress.id}</div> */}

            <div

                onClick={(e) => {
                    removeMail(mailAdress.id);
                }}
                className="btn rounded border  m-1 fs-5 border-4 border-primary">X</div>
        </div>
    )
}
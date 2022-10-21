import CV from "../..//assets/CV.docx"


export default function HeaderButtons() {
    return (

        <div className="header-button-container">
            <a href={CV} className="btn" >Dowland CV</a>
            <a className="btn2">Let's Talk</a>
        </div>

    )
}
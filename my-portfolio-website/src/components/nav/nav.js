import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineBook } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"

import "./nav.css"


export default function Nav() {
    return (

        <div className="nav">
            <div className=" nav-icons">
                <a href="#home"><AiOutlineHome /></a>
                <a href="#about"><AiOutlineUser /></a>
                <a href="#experience"><AiOutlineBook /></a>
                <a href="#contact"><AiOutlineMail /></a>

            </div>

        </div>

    )
}
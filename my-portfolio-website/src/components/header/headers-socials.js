import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"



export default function HeaderSocials() {
    return (
        <div className="header-social-container social-icons">

            <a href="https://www.linkedin.com/in/fevziatanoglu" target="_blank" ><AiFillLinkedin /></a>
            <a href="https://github.com/fevziatanoglu" target="_blank"> <AiFillGithub /></a>
            <a href="https://youtube.com" target="_blank"> <AiFillYoutube /></a>
            



        </div>

    )
}
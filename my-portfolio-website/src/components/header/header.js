import HeaderButtons from "./header-buttons"
import "./header.css"

import ME1 from "../../assets/me1.png"
import HeaderSocials from "./headers-socials"
import HeaderTextAnim from "./header-text-anim"



export default function Header() {
    return (
        <section>


            <header id="home">
                <div className="container header-container">
                    <h3>Hello my name is <span className="h1">Fevzi</span></h3>
                    {/* <h3>Web Developer</h3> */}
                    <HeaderTextAnim />

                    <HeaderButtons />

                    <div >
                        <img className="me" src={ME1} alt="me"></img>
                    </div>

                    {/* <a className="scrool-down">Scrool Down --{">"} </a> */}

                    <HeaderSocials />
                </div>
            </header>
        </section>
    )
}
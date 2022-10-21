import "./experience.css"
import { DiNodejsSmall } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { CgShapeRhombus } from "react-icons/cg"

import { DiCss3 } from "react-icons/di"

import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { RiFlutterFill } from "react-icons/ri"


export default function Experience() {
    return (

        <section id="experience" className="experience">


            <h3>My Experiences</h3>
            <h1>What skills I have !</h1>

            <div className="container experiences-container">

                <div className="container experience-container">
                    <h2> Backend Development</h2>
                    <div className="experience-content">


                        <div className="experience-item">

                            <div className="logo"><DiNodejsSmall /></div>
                            <div>NodeJS</div>
                            <div className="level">Advanced</div>

                        </div>



                        <div className="experience-item">

                            <div className="logo"><SiExpress /></div>
                            <div>Express</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><SiMongodb /></div>
                            <div>MongoDB</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><CgShapeRhombus /></div>
                            <div>Netfly</div>
                            <div className="level">Advanced</div>

                        </div>



                    </div>
                </div>

                <div className="container experience-container">

                    <h2> Frontend Development</h2>
                    <div className="experience-content">

                        <div className="experience-item">

                            <div className="logo"><DiCss3 /></div>
                            <div>Css</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><AiFillHtml5 /></div>
                            <div>HTML</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><SiJavascript /></div>
                            <div>JavaScript</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><BsFillBootstrapFill /></div>
                            <div>Bootstrap</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><FaReact /></div>
                            <div>React</div>
                            <div className="level">Advanced</div>

                        </div>

                        <div className="experience-item">

                            <div className="logo"><RiFlutterFill /></div>
                            <div>Flutter</div>
                            <div className="level">Advanced</div>

                        </div>

                    </div>
                </div>



            </div>
        </section>

    )
}
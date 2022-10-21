
import Typical from 'react-typical'

export default function HeaderTextAnim() {
    return (

        <div className='text-anim'>
            <p className='static-txt'>I'm a &nbsp;</p>

            <Typical
                wrapper="p"
                steps={[
                    'Web Developer', 2000,
                    "Student", 2000,
                    "Freelancer", 2000]}

                loop={Infinity}

            />
        </div>





    )
}
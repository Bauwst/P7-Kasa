import backgroundAbout from '../Images/BackgroundAbout.png'
import '../styles/About.css'
import Banner from '../components/Banner'
import React , {useEffect} from 'react'



const About = () => {

    useEffect(() => {
        document.title = `A propos`
    })

    return (
        <div>
            <Banner image={backgroundAbout} />
        </div>
    )
}

export default About
import backgroundAbout from '../Images/BackgroundAbout.png'
import '../styles/About.css'
import Banner from '../components/Banner'
import React , {useEffect} from 'react'
import Collapse from '../components/Collapse'
import about from '../data/about.json'


const About = () => {

    useEffect(() => {
        document.title = `A propos`
    })

    return (
        <div>
            <Banner image={backgroundAbout} />
            <div className = "card-about">
                {about.map (about => <Collapse title={about.title} description={about.text} key={about.title}/>)}
            </div>
        </div>  
    )
}

export default About;
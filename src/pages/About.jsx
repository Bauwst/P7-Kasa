import backgroundAbout from '../Images/BackgroundAbout.png'
import '../styles/About.css'
import Banner from '../components/Banner'



const About = () => {
    return (
        <div>
            <Banner image={backgroundAbout} />
        </div>
    )
}

export default About
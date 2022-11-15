import '../styles/Banner.css'

const Banner = ({title, image}) => {
    return (
        <div className='banner'>
            <h1>{title}</h1>
            <img className = 'background-banner' src={image} alt = {`Fond de la Bannière`}/>
        </div>
    )
}

export default Banner
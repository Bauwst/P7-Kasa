import Note from './Note'

import '../styles/Logement.css'


const Logement = ({ title, id, location, tags, host, rating}) => {
    console.table(host)
    return (
        <div key={id}>
            <div className="header-logement">
                <div className="details">
                    <h1 className="title-logement">{title}</h1>
                    <p className="location-logement">{location}</p>
                    <ul className ="tags-logement">
                        {tags.map((tag) =>
                            <li key ={`${id}+ " " +${tag}`}>{tag}</li>
                        )}  
                    </ul>
                    </div>
                    <div className = "host-note">
                        <div className = "host">
                            <p>{host.name}
                            </p>
                            <img className ="host-photo" src={host.picture} alt={host.name}/>
                        </div>
                    <Note evaluation={rating} />
                </div>
            </div>
        </div>
    )
}

export default Logement
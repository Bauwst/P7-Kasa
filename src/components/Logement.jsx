import Note from './Note'

import '../styles/Logement.css'

const Logement = ({ title, id, location, tags, host, hostPhoto, rating}) => {
    return (
        <div key={id}>
            <div className="header-logement">
                <div className="details">
                    <hi className="title-logement">{title}</hi>
                    <p className="location-logement">{location}</p>
                    <ul className ="tags-logement">
                        {/* {tags.map((tags) =>
                            <li key ={`${id}+ " " +${tags}`}></li>
                        )}  */}
                    </ul>
                    </div>
                    <div className = "host-note">
                        <div className = "host">
                            <p>{host.name}
                            </p>
                            <img className ="host-photo" src={hostPhoto} alt={host}/>
                        </div>
                    <Note evaluation={rating} />
                </div>
            </div>
        </div>
    )
}

export default Logement
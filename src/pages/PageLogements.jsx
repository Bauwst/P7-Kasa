
import logements from '../data/logements.json'
import {React, useEffect} from 'react'
import { useParams, Navigate } from 'react-router-dom'


import Collapse from '../components/Collapse'
import Logement from '../components/Logement'
import ImageSlider from '../components/ImageSlider'
import "../styles/PageLogements.css"


const PageLogements = () => {
    const {id} = useParams();
    const stringifyLogements = JSON.stringify(logements);
    const findLogement = logements.find(lodging => {
        return lodging.id === id;
    })

    useEffect(() => {
        if (stringifyLogements.includes(id) === true) {
            document.title = `${findLogement.title}`
        }
    }, [id, stringifyLogements, findLogement])
    
    if (stringifyLogements.includes(id) !== true) {
        return(
            <Navigate to="/notfound" replace />
        )
    }
    
    return (
        <div className = "container-logements">
            <ImageSlider slide = {findLogement.pictures} />
            <Logement
            title={findLogement.title}
            id={id}
            location={findLogement.location}
            tags={findLogement.tags}
            host={findLogement.host}
            rating = {findLogement.rating}/>
            <div className="collapse-logements">
                <Collapse title="Description" description={findLogement.description}/>
                <Collapse title="Équipements" description={findLogement.equipments.map((equipement) =>
                    <li key={`${findLogement.id}+ " " + ${equipement}`}>{equipement}</li>)}/>
            </div>
        </div>
    )
}

export default PageLogements
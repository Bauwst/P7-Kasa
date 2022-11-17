import logements from '../data/logements.json'
import Card from '../components/Card'

import '../styles/Gallery.css'

const Gallery = () => {
    return(
        <ul className = 'liste-logements'>
            {logements.map(({id, cover, title}) =>
            <Card id={id} cover={cover} title={title} key={id.toString()} />
            )}
        </ul>
    )
}


export default Gallery
import { NavLink } from "react-router-dom"
import '../styles/Card.css'

const Card = ({cover, title, id}) => {
    const url ="/logement/" + id;

    return (
        <li className ='gallery-card'>
            <NavLink to = {url} end style ={{textDecoration:'none'}}>
                <img className = 'card-cover' src ={cover} alt={`${title} cover`}/>
                <p>{title}</p>
            </NavLink>
        </li>
    )
}

export default Card
import { NavLink } from "react-router-dom";
import '../styles/Nav.css';


const Nav = () => {

     let Style = {
         textDecoration: "underline",
     };

    return (
        <nav>
            <ul className= "nav">
                <li>
                    <NavLink to="/" end style={({isActive}) => isActive ? Style : undefined}>
                        Acceuil 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => isActive ? Style : undefined}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
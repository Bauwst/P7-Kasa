import logo from '../Images/LOGO.png';
import '../styles/Header.css';
import { NavLink } from "react-router-dom";
import Nav from './Nav';


const Header = () => {
    return (
        <header>
            <NavLink to="/" end>
                <img className ='logo' src ={logo} alt={`Logo Kasa`} /> 
            </NavLink>    
        <Nav />
        </header>       
    )
}
    
export default Header;
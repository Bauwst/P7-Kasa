import logo from '../Images/LOGO.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <header>
            <img className ='Logo' src ={logo} alt={`Logo Kasa`} /> 
            </header>
        </div>
    )
}

export default Header;
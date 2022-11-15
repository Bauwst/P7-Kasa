import '../styles/Footer.css';

import Logo_Footer from '../Images/Logo_Footer.png'

const Footer = () => {
    return (
        <footer>
            <img className='logo_footer' src={Logo_Footer} alt={`Logo Kasa`}/>
            <p>@ 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;
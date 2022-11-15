import React from 'react-dom';
import '../styles/index.css';
import Banner from '../components/Banner';
import Header from '../components/Header';

import backgroundBanner from '../Images/Background.png';

const  Acceuil = () => {
    return (
        <div>
            <Banner
            title="Chez vous, partout et ailleurs"
            image={backgroundBanner} />
            <Header />
        </div>
    )
}

export default Acceuil
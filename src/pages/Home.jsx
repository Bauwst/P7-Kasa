import React from 'react-dom';
import '../styles/index.css';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

import backgroundBanner from '../Images/BackgroundBanner.png';

const  Home = () => {
    return (
        <div>
            <Banner
            title="Chez vous, partout et ailleurs"
            image={backgroundBanner} />
            {/* <Gallery /> */}
        </div>
    )
}

export default Home
import React , {useEffect} from 'react';
import '../styles/index.css';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

import backgroundBanner from '../Images/BackgroundBanner.png';

const  Home = () => {

    useEffect(() => {
        document.title = `KASA`
    })

    return (
        <div>
            <Banner
            title="Chez vous, partout et ailleurs"
            image={backgroundBanner} />
            <Gallery />
        </div>
    )
}

export default Home
import React, { useState } from 'react';
import Data from '../data/Data.json';
import { Link } from 'react-router-dom';
import '../style/pages/Home.css';
import BackgroundHome from '../assets/backgroundhome.png';

function Home() {
    
    const [coverImg] = useState(0);


    return (
        <div className='homeContainer'>
            <section className='homeSection'>
                <p>Chez vous, partout et ailleurs</p>
                <div className='homeImg'>
                    <img src={BackgroundHome} alt='illustration du titre'></img>
                </div>
            </section>
            <div className='homeGallery'>
                {Data.map((location) => (
                    <Link
                     to={`/Lodging/${location.id}`}
                     className='location__token'
                     key={location.id}
                    >
                        <img 
                        src={location.pictures[coverImg]} 
                        alt='location' 
                        className='location__img' 
                        />
                        <div className='location__title'>
                            <span>{location.title}</span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>

    );
}

export default Home
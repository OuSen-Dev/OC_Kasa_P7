import React from 'react';
import '../style/components/Banner.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <div className='headerContainer'>
            <nav>
                <img src={logo} alt='Kasa' className='headerLogo' />
                <ul>
                    <li>
                        <Link 
                        to={`/`}
                        className='headerLink'>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                        to={`/About`}
                        className='headerLink'>
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner
import React from 'react';
import '../style/components/Footer.css';
import logofooter from '../assets/logofooter.png';

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerLogo'>
                <img src={logofooter} alt='kasa'></img>
            </div>
            <p className='footerCopyrights'>&copy;2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
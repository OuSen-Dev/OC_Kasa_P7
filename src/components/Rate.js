import React from 'react';
import Star from '../assets/Star.png';
import EmptyStar from "../assets/EmptyStar.png";


 function Rate(rating) {
    const range = [1, 2, 3, 4, 5];

    return range.map((rangeRater, key) =>
        rangeRater <= rating.rate ? (
            <img src={Star} alt='etoile pleine' key={key} className='star' />
        ) : (
            <img src={EmptyStar} alt='etoile vide' key={key} className='empty__star' />
        )
    );
}

export default Rate



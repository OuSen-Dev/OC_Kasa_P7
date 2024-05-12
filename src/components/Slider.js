import React from 'react';
import { useState, useEffect } from 'react';
import ArrowRight from '../assets/ArrowRight.png';
import ArrowLeft from '../assets/ArrowLeft.png';

function Slider(rental) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [right, setRight] = useState(true);
    const slides = rental.data;

    useEffect(() => {
        slides.forEach((image) => {
            new Image().src = image;
        });
    });

    const previous = () => {
        setRight(false);
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const next = () => {
        setRight(true);
        const lastSlide = currentIndex === slides.length - 1 ;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const multipleSlide = () => {
        if (slides.length - 1 >= 1) {
           return true;
        }
        return false;
     };
  
     return multipleSlide() ? (
        <div className="slider__styles">
           <img
              className="arrow left__arrow"
              src={ArrowLeft}
              alt="flèche vers la gauche"
              onClick={previous}
           ></img>
  
           <img
              className="arrow right__arrow"
              src={ArrowRight}
              alt="flèche vers la droite"
              onClick={next}
           ></img>
           {slides.map((slide, index) => {
              return (
                 <div
                    className={
                       index === currentIndex
                          ? `${right ? "right" : "left"}`
                          : "slide__hidden"
                    }
                    key={index}
                 >
                    {index === currentIndex && (
                       <img
                          src={slide}
                          alt="location"
                          className={
                             right ? "slide__styles-right" : "slide__styles-left"
                          }
                       ></img>
                    )}
                 </div>
              );
           })}
           <span className="number__styles">
              {currentIndex + 1}/{slides.length}
           </span>
        </div>
     ) : (
        <img
           src={`${slides[currentIndex]}`}
           className="slide__styles-one"
           alt="location"
        ></img>
     );
}

export default Slider;

 

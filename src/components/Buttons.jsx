/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

const Buttons = () => {

    let currentIndex = 0;
    let carousel = document.querySelector('.carouselContainer');
    let cards = document.querySelectorAll('.card');
    let cardWidth = cards[0]?.offsetWidth;

    useEffect(()=>{
        setTimeout(() => {
            carousel = document.querySelector('.carouselContainer');
            cards = document.querySelectorAll('.card');
            cardWidth = cards[0]?.offsetWidth;
        }, 500);        
    })

    const updateCarousel = () => {
        const offset = -currentIndex * cardWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    const prevButton = () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    const nextButton = () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    return (
        <div className='groupButtons'>
            <div className='btnDecoration'>
                <button className='btnController' onClick={prevButton}>
                    {"<"}
                </button>
            </div>
            <div className='btnDecoration'>
                <button className='btnController' onClick={nextButton}>
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default Buttons
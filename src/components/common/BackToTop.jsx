import React, { useState } from 'react'
import { BackToTopIcon } from './Icons';


const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });
    return (
        <>
            <button
                className={`back-to-top fixed flex items-center justify-center rounded-full bg-light-red animate-bounce bottom-5 right-5 z-50 ${isVisible && 'visible'}`}
                onClick={scrollToTop}
                style={{ display: isVisible && 'block' }} >
                {isVisible && (
                    <div className='p-2.5 576:p-3 rounded-full flex justify-center items-center'>
                        <BackToTopIcon />
                    </div>
                )}
            </button>
        </>
    )
}

export default Backtotop
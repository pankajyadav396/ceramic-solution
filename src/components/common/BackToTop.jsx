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
            <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed flex items-center justify-center shadow-lightRed shadow-lg rounded-full bg-lightRed animate-bounce bottom-[20px] right-[20px] z-[99]`}
                onClick={scrollToTop}
                style={{ display: isVisible ? 'block' : 'none', }} >
                <div className=' p-[10px] 576:p-[15px] rounded-full bg-yellow_gradient_right flex justify-center items-center'>
                    <BackToTopIcon/>
                </div>
            </button>
        </>
    )
}

export default Backtotop
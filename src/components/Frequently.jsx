import React, { useState } from 'react';
import { accordionList } from './common/Helper';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="max-w-[912px] px-3 mx-auto xl:mt-[140px] lg:mt-20 md:mt-16 mt-14">
            <h2 className='text-black text-center font-plus-sans !leading-127 font-semibold sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl'>Frequently Asked Questions</h2>
            <p className='max-w-[590px] text-center text-grey-black text-lg leading-160 mx-auto md:mb-14 mb-8 sm:mb-12'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade </p>
            {accordionList.map((item, index) => (
                <div key={index} className="shadow-xs-black mb-6 rounded-2xl">
                    <button className="w-full flex justify-between gap-5 items-center p-4 sm:py-[21.6px] sm:px-5 rounded-2xl"
                        onClick={() => toggleAccordion(index)} >
                        <p className='text-lg font-plus-sans font-normal text-start leading-160 max-sm:text-base'>{item.title}</p>
                        <svg className={`!min-w-6 !min-h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                            }`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 11.17L12.53 14.7C12.38 14.85 12.19 14.92 12 14.92C11.81 14.92 11.62 14.85 11.47 14.7L7.94 11.17C7.65 10.88 7.65 10.4 7.94 10.11C8.23 9.82 8.71 9.82 9 10.11L12 13.11L15 10.11C15.29 9.82 15.77 9.82 16.06 10.11C16.35 10.4 16.35 10.87 16.06 11.17Z" fill="#FF0000" />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden transition-[500ms] duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="p-4 pt-0">
                            <p className="text-black opacity-85 font-plus-sans font-normal text-base">{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

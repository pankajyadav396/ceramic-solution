import React from 'react'
import { locationData } from './common/Helper'

const ServiceAreas = () => {
    return (
        <>
            <div className='max-w-[1172px] mx-auto px-3 lg:mt-[140px] md:mt-20 sm:mt-16 mt-14' id='services'>
                <h2 className='text-black max-md:text-center font-plusSans font-semibold  !leading-127 mb-5 lg:text-x6xl md:text-5xl sm:text-4xl capitalize text-3xl'>We provide services <span className='block'> in these areas</span></h2>
                <p className='max-w-[590px] max-md:text-center max-md:mx-auto text-lg font-plusSans md:mb-14 mb-10 sm:mb-12'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                <div className='w-full '>
                    <div className='flex flex-row flex-wrap items-center justify-center -mx-3'>
                        {locationData.map((obj, index) => {
                            return (
                                <div className='px-3 md:w-4/12 min-[320px]:w-6/12 mb-6 w-full max-w-[388px]'>
                                    <div key={index} className='bg-white max-w-[364px] flex  max-md:justify-center items-center rounded-3xl gap-3 shadow-xsmBlack sm:p-6 p-4'>
                                        <img src={obj.img} alt="img-location" className='w-8 h-8 sm:w-12 sm:h-12' />
                                        <p className='md:text-2xl text-lg sm:text-xl font-semibold font-plusSans leading-160'>{obj.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceAreas
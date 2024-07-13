import React from 'react'
import { locationList } from './common/Helper'

const ServiceAreas = () => {
    return (
        <>
            <div className='max-w-[1172px] mx-auto px-3 xl:mt-[140px] lg:mt-20 md:mt-16 mt-14' id='services'>
                <h2 className='text-black font-plus-sans font-semibold !leading-127 sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl capitalize text-3xl'>We provide services <span className='block'> in these areas</span></h2>
                <p className='max-w-[590px] text-lg font-plus-sans md:mb-14 mb-10 sm:mb-12'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                <div className='w-full '>
                    <div className='flex flex-row flex-wrap items-center justify-center -mx-3'>
                        {locationList.map((obj, index) => {
                            return (
                                <div key={index} className='px-3 md:w-4/12 max-md:w-6/12 md:mb-6 mb-4 w-full max-w-[388px]'>
                                    <div className='bg-white max-w-[364px] flex items-center rounded-3xl gap-3 shadow-xs-black sm:p-6 p-4'>
                                        <img src={obj.img} alt="img-location" className='size-8 md:size-12 sm:size-10' />
                                        <p className='md:text-2xl text-lg sm:text-xl font-semibold font-plus-sans leading-160'>{obj.title}</p>
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
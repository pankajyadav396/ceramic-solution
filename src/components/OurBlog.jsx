import React from 'react'
import { ourBlogList } from './common/Helper'
import arrow from "../assets/images/svg/arrow-red.svg"

const OurBlog = () => {
    return (
        <>
            <div className='px-4'>
                <h2 className='text-black font-plus-sans font-semibold sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl !leading-127 text-center' id='Request'>Our Blog</h2>
                <p className='max-w-[592px] text-center text-grey-black font-plus-sans text-lg leading-160 mx-auto md:mb-14 mb-10'>Lörem ipsum koda astrobel: sutaveligen.Rodod bänera viliga.Pregigt primasofi dede facebooka: förutom tivaligt.Fejkade </p>
                <div className=' max-w-[1178px] mx-auto max-sm:max-w-[450px] flex justify-center'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:gap-6'>
                        {ourBlogList.map((obj, index) => {
                            return (
                                <div key={index} className='p-4 md:p-5 lg:p-6 sm:max-w-[364px] shadow-small-black hover:shadow-lg-black duration-300 rounded-3xl'>
                                    <img src={obj.img} alt="img" className='w-full sm:max-w-[316px]' />
                                    <p className=" mt-6 md:text-2xl sm:text-xl text-lg font-semibold font-plus-sans !leading-160">{obj.title}</p>
                                    <div className=" flex cursor-pointer items-center max-w-36 gap-2.5 group mt-4">
                                        <p className=" text-light-red font-plus-sans text-base font-semibold cursor-pointer leading-160">Learn More </p>
                                        <img src={arrow} alt="arrowimg" className='group-hover:translate-x-3 duration-300' />
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

export default OurBlog
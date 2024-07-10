import React from 'react'
import { ourBlogData } from './common/Helper'
import arrow from "../assets/images/svg/arrowRed.svg"

const OurBlog = () => {
    return (
        <>
            <h2 className='text-black font-plusSans font-semibold mb-5 lg:text-x6xl md:text-5xl sm:text-4xl text-3xl !leading-127 text-center' id='Request'>Our Blog</h2>
            <p className='max-w-[590px] text-center text-greyBlack font-plusSans text-lg leading-160 mx-auto md:mb-14 mb-10 px-3'>Lörem ipsum koda astrobel: sutaveligen.Rodod bänera viliga.Pregigt primasofi dede facebooka: förutom tivaligt.Fejkade </p>
            <div className=' max-w-[1178px] mx-auto px-4 max-sm:max-w-[450px] flex justify-center'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:gap-6'>
                    {ourBlogData.map((obj, index) => {
                        return (
                            <div key={index} className='px-[23px] py-6 border sm:max-w-[364px] max-h-[474px] border-black hover:shadow-smallBlack duration-300 hover:border-transparent rounded-[24px] border-opacity-[12%]'>
                                <img src={obj.img} alt="img" className='w-full sm:max-w-[316px]' />
                                <p className=" mt-6 md:text-2xl sm:text-xl text-lg font-semibold font-plusSans !leading-160">{obj.title}</p>
                                <div className=" flex items-center gap-[10px] mt-4">
                                    <p className=" text-lightRed font-plusSans text-base font-semibold cursor-pointer leading-160">Learn More </p>
                                    <img src={arrow} alt="arrowimg" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OurBlog
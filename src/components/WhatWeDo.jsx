import { homeData } from "./common/Helper"
import arrow from "../assets/images/svg/arrowRed.svg"

const WhatWeDo = () => {
    return (
        <>
            <div className='lg:mt-[140px] my-14 md:my-20 lg:mb-[116px]' id="about">
                <h2 className='text-black font-plusSans font-semibold md:mb-14 sm:mb-10 mb-7 lg:text-x6xl md:text-5xl sm:text-4xl text-3xl text-center !leading-127'>What We Do</h2>
                <div className=' max-w-[1178px] mx-auto px-4 max-sm:max-w-[450px] flex justify-center'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:gap-6'>
                        {homeData.map((obj, index) => {
                            return (
                                <div key={index} className='px-[23px] py-6 border max-w-[450px] w-full sm:max-w-[364px] min-h-[470px] border-black hover:shadow-smallBlack duration-300 hover:border-transparent rounded-[24px] border-opacity-[12%]'>
                                    <img src={obj.img} alt="img" className='w-full sm:max-w-[316px]' />
                                    <p className=" mt-6 md:text-2xl sm:text-xl text-lg font-semibold font-plusSans leading-160">{obj.title}</p>
                                    <p className=" text-base font-normal font-plusSans mb-6 text-black leading-160 mt-3">{obj.description}</p>
                                    <div className=" flex items-center gap-[10px]">
                                        <p className=" text-lightRed text-base font-semibold cursor-pointer leading-160">Learn More </p>
                                        <img src={arrow} alt="arrowimg" />
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

export default WhatWeDo
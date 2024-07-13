import { homeList } from "./common/Helper"
import arrow from "../assets/images/svg/arrow-red.svg"

const WhatWeDo = () => {
    return (
        <>
            <div className='xl:mt-[140px] xl:mb-[116px] my-14 lg:my-24 md:my-16' id="about">
                <h2 className='text-black font-plus-sans font-semibold xl:mb-14 lg:mb-12 sm:mb-10 mb-7 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl text-center !leading-127'>What We Do</h2>
                <div className=' max-w-[1178px] mx-auto px-4 max-sm:max-w-[450px] flex justify-center'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 lg:gap-6'>
                        {homeList.map((obj, index) => {
                            return (
                                <div key={index} className='p-6 max-w-[450px] w-full sm:max-w-[364px] outline outline-light-grey outline-1 hover:shadow-small-black duration-300 hover:outline-transparent rounded-3xl border-opacity-[12%]'>
                                    <div className="flex flex-col justify-between w-full h-full">
                                        <div className="flex flex-col">
                                            <img src={obj.img} alt="img" className='w-full sm:max-w-[316px]' />
                                            <p className=" mt-6 md:text-2xl sm:text-xl text-lg font-semibold font-plus-sans !leading-160">{obj.title}</p>
                                            <p className=" text-base font-normal font-plus-sans mb-6 text-black leading-160 mt-3">{obj.description}</p>
                                        </div>
                                        <div className=" flex items-center max-w-36 cursor-pointer group gap-2.5">
                                            <p className=" text-light-red text-base font-semibold cursor-pointer leading-160">Learn More </p>
                                            <img src={arrow} alt="arrowimg" className="group-hover:translate-x-3 duration-300" />
                                        </div>
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
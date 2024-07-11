import googlelogo from "../assets/images/svg/googleLogo.svg"
import pilotlogo from "../assets/images/svg/trustPilotLogo.svg"
import stars from "../assets/images/svg/yellowStars.svg"
import React from "react";
import { customerData } from "./common/Helper";
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Customer = () => {
    return (
        <>
            <div className='lg:mt-[116px] lg:mb-[120px] my-10 sm:my-12 md:my-20 overflow-hidden'>
                <div className=' max-w-[1172px] mx-auto px-4 flex justify-center items-center flex-col'>
                    <h2 className='text-black font-plusSans font-semibold mb-5 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl !leading-127 text-center'>What Our Customers Say</h2>
                    <p className=' text-center max-w-[590px] text-lg font-plusSans max-sm:text-base leading-160 mx-auto mb-8'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                    <div className="flex max-[500px]:flex-col gap-6">
                        <div className='bg-white h-[80px] rounded-2xl ps-4 border w-[229.17px] border-black gap-[10.67px] border-opacity-10 flex items-center justify-start'>
                            <img src={googlelogo} alt="googlelogo" />
                            <div className=' flex flex-col'>
                                <p className='text-xsm text-black mb-[-2px] font-manrop font-normal leading-160'>Google Review</p>
                                <div className=' flex gap-1 items-center'>
                                    <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                    <img src={stars} alt="stars" className=' h-[16.67px]' />
                                </div>
                                <p className=' text-xsm font-normal mt-[-2px] leading-160 font-manrop text-lightBlack'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className='bg-white h-[80px] rounded-2xl ps-2 border w-[229.17px] border-black gap-1 border-opacity-10 flex items-center justify-start'>
                            <img src={pilotlogo} alt="googlelogo" />
                            <div className=' flex flex-col'>
                                <p className='text-xsm text-black mb-[-2px] font-manrop font-normal leading-160'>Trust Pilot Review</p>
                                <div className=' flex gap-1 items-center'>
                                    <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                    <img src={stars} alt="stars" className=' h-[16.67px]' />
                                </div>
                                <p className=' text-xsm font-normal mt-[-2px] leading-160 font-manrop text-lightBlack'>Based on 145 reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className=" max-w-[1916px] mt-8 sm:mt-10 md:mt-[36px]">
                        <Swiper
                            modules={[A11y]}
                            slidesPerView={5}
                            centeredSlides={true}
                            spaceBetween={24}
                            roundLengths={true}
                            loop={true}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {customerData.map((obj, index) => {
                                return (
                                    <SwiperSlide key={index} className="py-5">
                                        <div className="max-[430px]:px-3">
                                            <div className="md:p-6 p-4 sm:p-5 rounded-3xl shadow-xsmBlack !max-w-[364px]">
                                                <div className=" flex flex-col gap-2 sm:gap-4">
                                                    <div className=" flex gap-2">
                                                        <img src={obj.img} alt="markt" className="w-10 h-10" />
                                                        <div className=" flex flex-col">
                                                            <p className="text-base text-black font-bold font-manrop">{obj.title} </p>
                                                            <p className=" text-sm text-black font-normal leading-160 font-manrop">{obj.bio}</p>
                                                        </div>
                                                    </div>
                                                    <img src={stars} alt="stars" className="max-w-[120px] h-6" />
                                                    <p className="text-base text-black font-normal leading-160 font-manrop">{obj.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Customer
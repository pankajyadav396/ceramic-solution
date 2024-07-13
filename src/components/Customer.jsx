import googlelogo from "../assets/images/svg/google-logo.svg"
import pilotlogo from "../assets/images/svg/trust-pilot.svg"
import stars from "../assets/images/svg/yellow-stars.svg"
import React from "react";
import { customerList } from "./common/Helper";
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Customer = () => {
    return (
        <>
            <div className='xl:mt-[116px] xl:mb-[108px] my-10 sm:my-12 md:my-16 lg:my-20 overflow-hidden'>
                <div className=' max-w-[1172px] mx-auto px-4 flex justify-center items-center flex-col'>
                    <h2 className='text-black font-plus-sans font-semibold sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl !leading-127 text-center'>What Our Customers Say</h2>
                    <p className=' text-center max-w-[590px] text-lg font-plus-sans max-sm:text-base leading-160 mx-auto mb-8'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                    <div className="flex max-576:flex-col gap-6">
                        <div className='bg-white h-20 duration-300 hover:border-transparent hover:shadow-2xl rounded-2xl ps-4 border w-[229.17px] border-black gap-2.5 border-opacity-10 flex items-center justify-start'>
                            <img src={googlelogo} alt="googlelogo" />
                            <div className=' flex flex-col'>
                                <p className='text-xsm text-black -mb-0.5 font-manrop font-normal leading-160'>Google Review</p>
                                <div className=' flex gap-1 items-center'>
                                    <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                    <img src={stars} alt="stars" className='h-4' />
                                </div>
                                <p className=' text-xsm font-normal -mt-0.5 leading-160 font-manrop text-light-black'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className='bg-white h-20 duration-300 hover:border-transparent hover:shadow-2xl rounded-2xl ps-2 border w-[229.17px] border-black gap-1 border-opacity-10 flex items-center justify-start'>
                            <img src={pilotlogo} alt="googlelogo" />
                            <div className=' flex flex-col'>
                                <p className='text-xsm text-black -mb-0.5 font-manrop font-normal leading-160'>Trust Pilot Review</p>
                                <div className=' flex gap-1 items-center'>
                                    <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                    <img src={stars} alt="stars" className=' h-[16.67px]' />
                                </div>
                                <p className=' text-xsm font-normal -mt-0.5 leading-160 font-manrop text-light-black'>Based on 145 reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className=" max-w-[1916px] mt-3 sm:mt-4 md:mt-6">
                        <Swiper
                            modules={[A11y, Autoplay]}
                            slidesPerView={5}
                            centeredSlides={true}
                            spaceBetween={24}
                            roundLengths={true}
                            loop={true}
                            scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 3000,  // Adjust autoplay delay as needed
                                disableOnInteraction: false,
                                speed: 2000,
                                // Autoplay continues even when user interacts with swiper
                            }}
                            breakpoints={{
                                640: {
                                    autoplay: false,
                                }
                            }}
                        >
                            {customerList.map((obj, index) => {
                                return (
                                    <SwiperSlide key={index} className="py-8">
                                        <div className="max-430:px-3">
                                            <div className="md:p-6 p-4 sm:p-5 rounded-3xl shadow-xs-black duration-300 hover:shadow-lg-black !max-w-[364px] w-full">
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
            </div>
        </>
    )
}

export default Customer;

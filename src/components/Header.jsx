import React from 'react'
import Navbar from './Navbar'
import { PrimaryButton } from './common/PrimaryButton'
import googlelogo from "../assets/images/svg/google-logo.svg"
import pilotlogo from "../assets/images/svg/trust-pilot.svg"
import stars from "../assets/images/svg/yellow-stars.svg"
import quality from "../assets/images/webp/quality-busines-awards.webp"
import certified from "../assets/images/webp/certified-logo.webp"

const Header = () => {
    return (
        <>
            <div className='bg-light-red pt-6 lg:min-h-[810px] pb-[59px]' id='home'>
                <div className='lg:px-1'>
                    <Navbar />
                </div>
                <div className='mx-auto max-w-[1172px] lg:px-5 px-4 md:mt-16 mt-10 lg:mt-20 '>
                    <h1 className='max-sm:mx-auto max-sm:text-center lg:text-5xxl md:text-6xl sm:text-5xl text-3xl text-white font-semibold !leading-127 font-plus-sans max-w-[830px]'>
                        Transform Your Space with Precision and Quality:
                        <span className='block'> Get a Free Quote Today!</span>
                    </h1>
                    <p className='max-sm:mx-auto max-sm:text-center leading-160 text-white font-normal text-lg max-w-[742px] mt-5'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,
                    </p>
                    <PrimaryButton text="Get a Quote" className="mt-8 max-sm:mx-auto text-white !leading-127 hover:bg-white hover:text-light-red" />
                    <div className='md:mt-12 xl:mt-16 sm:mt-10 mt-8 flex gap-6 flex-wrap items-center max-sm:justify-center'>
                        <div className=' flex gap-6 flex-wrap items-center justify-center'>
                            <div className='bg-white h-20 hover:scale-105 hover:-translate-y-1 duration-300  rounded-2xl ps-4 border w-[229.17px] border-black gap-2.5 border-opacity-10 flex items-center justify-start'>
                                <img src={googlelogo} alt="googlelogo" />
                                <div className=' flex flex-col'>
                                    <p className='text-xsm text-black -mb-0.5 font-manrop font-normal leading-160'>Google Review</p>
                                    <div className=' flex gap-1 items-center'>
                                        <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                        <img src={stars} alt="stars" className=' h-[16.67px]' />
                                    </div>
                                    <p className=' text-xsm font-normal -mt-0.5 leading-160 text-light-black font-manrop'>Based on 145 reviews</p>
                                </div>
                            </div>
                            <div className='bg-white h-20 hover:scale-105 hover:-translate-y-1 duration-300 rounded-2xl ps-2 border w-[229.17px] border-black gap-1 border-opacity-10 flex items-center justify-start'>
                                <img src={pilotlogo} alt="googlelogo" />
                                <div className=' flex flex-col'>
                                    <p className='text-xsm text-black -mb-0.5 font-manrop font-normal leading-160'>Trust Pilot Review</p>
                                    <div className=' flex gap-1 items-center'>
                                        <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                        <img src={stars} alt="stars" className=' h-4' />
                                    </div>
                                    <p className='text-xsm font-normal -mt-0.5 leading-160 text-light-black font-manrop'>Based on 145 reviews</p>
                                </div>
                            </div>
                        </div>
                        <img src={certified} alt="certified-img" className=' hover:scale-105 hover:-translate-y-1 duration-300 w-20 h-20' />
                        <img src={quality} alt="certified-img" className=' hover:scale-105 hover:-translate-y-1 duration-300 w-20 h-20' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
import React from 'react'
import Navbar from './Navbar'
import { PrimaryButton } from './common/PrimaryButton'
import googlelogo from "../assets/images/svg/googleLogo.svg"
import pilotlogo from "../assets/images/svg/trustPilotLogo.svg"
import stars from "../assets/images/svg/yellowStars.svg"
import certified from "../assets/images/webp/certifiedLogo.webp"
import quality from "../assets/images/webp/qualitybusiness.webp"

const Header = () => {
    return (
        <>
            <div className='bg-lightRed pt-6 min-h-[810px] pb-[59px]' id='home'>
                <Navbar />
                <div className='mx-auto max-w-[1172px] px-4 md:mt-12 mt-10 lg:mt-[79px] '>
                    <h1 className=' lg:text-exlg sm:text-5xl text-4xl text-white font-semibold !leading-127 font-plusSans max-w-[830px]'>
                        Transform Your Space with Precision and Quality:
                        Get a Free Quote Today!
                    </h1>
                    <p className=' leading-160 text-white font-normal text-lg max-w-[742px] mt-5'>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,
                    </p>
                    <PrimaryButton text="Get a Quote" className="mt-8 text-white hover:bg-white hover:text-lightRed" />
                    <div className='md:mt-12 lg:mt-16 sm:mt-10 mt-8 flex gap-6 flex-wrap items-center max-sm:justify-center'>
                        <div className=' flex gap-6 flex-wrap items-center justify-center'>
                            <div className='bg-white h-[80px] rounded-2xl ps-4 border w-[229.17px] border-black gap-[10.67px] border-opacity-10 flex items-center justify-start'>
                                <img src={googlelogo} alt="googlelogo" />
                                <div className=' flex flex-col'>
                                    <p className='text-xsm text-black mb-[-2px] font-manrop font-normal leading-160'>Google Review</p>
                                    <div className=' flex gap-1 items-center'>
                                        <p className=' text-xl font-manrop font-normal leading-160 '>4.6</p>
                                        <img src={stars} alt="stars" className=' h-[16.67px]' />
                                    </div>
                                    <p className=' text-xsm font-normal mt-[-2px] leading-160'>Based on 145 reviews</p>
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
                                    <p className=' text-xsm font-normal mt-[-2px] leading-160'>Based on 145 reviews</p>
                                </div>
                            </div>
                        </div>
                        <img src={certified} alt="certified-img" className='w-[80px]' />
                        <img src={quality} alt="certified-img" className='w-[80px]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
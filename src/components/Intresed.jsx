import React from 'react'
import PrimaryButton from './common/PrimaryButton'

const Intresed = () => {
    return (
        <>
            <div className='px-3 lg:py-[140px] md:py-24 sm:py-20 py-14 '>
                <div className='bg-intrested bg-no-repeat py-16 bg-center bg-100 max-w-[1140px] rounded-3xl px-4 mx-auto'>
                    <div className=' flex flex-col w-full justify-center items-center'>
                        <h2 className='text-white text-center font-plusSans !leading-127 font-semibold mb-[20.2px] lg:text-x6xl md:text-5xl sm:text-4xl text-3xl'>Interested? <span className='block'>Get in touch with us</span> </h2>
                        <p className='max-w-[590px] text-white text-center text-lg leading-160 mx-auto'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                        <div className=' text-center mt-9'>
                            <PrimaryButton text="Get A Quote" className="bg-white leading-[23px] !text-lightRed" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intresed
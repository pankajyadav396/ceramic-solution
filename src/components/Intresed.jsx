import React from 'react'
import PrimaryButton from './common/PrimaryButton'

const Intresed = () => {
    return (
        <>
            <div className='px-3 xl:py-[140px] lg:py-20 md:py-16 py-14 '>
                <div className='bg-intrested bg-no-repeat py-16 bg-center bg-100 max-w-[1140px] rounded-3xl px-4 mx-auto'>
                    <div className=' flex flex-col w-full justify-center items-center'>
                        <h2 className='text-white text-center font-plus-sans !leading-127 font-semibold sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl text-3xl'>Interested? <span className='block'>Get in touch with us</span> </h2>
                        <p className='max-w-[590px] text-white text-center text-lg leading-160 mx-auto'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                        <div className=' text-center mt-9'>
                            <PrimaryButton text="Get A Quote" className="bg-white !leading-127 hover:bg-light-red hover:text-white outline-[1.5px] hover:outline-white hover:outline text-light-red" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intresed
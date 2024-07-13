import PrimaryButton from './common/PrimaryButton'
import { processList } from './common/Helper'
const OurProcess = () => {
    return (
        <div className='xl:py-[100px] lg:py-20 py-14 md:py-16 bg-light-pink'>
            <div className=' max-w-[1172px] mx-auto px-4 flex justify-center items-center flex-col'>
                <h2 className='text-black font-plus-sans font-semibold sm:mb-4 mb-3 md:mb-5 lg:text-4xxl md:text-5xl sm:text-4xl !leading-127 text-3xl text-center'>Our Process</h2>
                <p className=' text-center max-w-[590px] font-plus-sans leading-160 text-lg mx-auto mb-10 sm:mb-12 md:mb-14'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                <div className='w-full max-lg:relative items-center max-lg:flex max-lg:justify-center'>
                    <div className='flex flex-col lg:flex-row lg:top-0 678:justify-between max-678:translate-x-0 max-678:w-full md:w-full 678:h-[80%] lg:w-[77%] mx-auto max-md:left-0 max-lg:left-12 max-678:top-0 max-678:h-[80%] lg:mb-9 relative max-lg:absolute z-[1]'>
                        <div className='bg-light-red rounded-full !left-[43%] font-plus-sans max-678:absolute flex items-center font-semibold justify-center max-678:size-[60px] 678:size-[74px] lg:size-[78px] xl:size-[88px] text-xl 678:text-2xl md:text-2xxl text-white'>
                            01
                        </div>
                        <div className='bg-light-red rounded-full !left-[43%] font-plus-sans max-678:absolute top-[44%] flex items-center font-semibold justify-center max-678:size-[60px] 678:size-[74px] lg:size-[78px] xl:size-[88px] text-xl 678:text-2xl md:text-2xxl text-white'>
                            02
                        </div>
                        <div className='bg-light-red rounded-full !left-[43%] font-plus-sans max-678:absolute bottom-10 flex items-center font-semibold justify-center max-678:size-[60px] 678:size-[74px] lg:size-[78px] xl:size-[88px] text-xl 678:text-2xl md:text-2xxl text-white'>
                            03
                        </div>
                        <span className='bg-transparent max-678:hidden max-lg:border-r-black lg:border-t-black border-dashed absolute max-lg:h-[90%] top-5  lg:w-[calc(100%-50px)] translate-y-0 lg:top-[50%] translate-x-0 left-9 z-[-1] border-[2px]'></span>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 max-678:gap-[120px] max-678:mt-20 relative z-[3]'>
                        {processList.map((obj, index) => {
                            return (
                                <div key={index} className='bg-white rounded-3xl shadow-small-black hover:shadow-lg-black duration-300 p-6 max-w-[464px]'>
                                    <a href="#">{obj.icon}</a>
                                    <p className='lg:text-2xl text-lg sm:text-xl font-semibold text-black text-nowrap font-plus-sans !leading-160 mt-6 mb-3'>{obj.title}</p>
                                    <p className='text-sm sm:text-base font-plus-sans font-normal !leading-160 text-black'>{obj.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=' text-center flex items-center justify-center mt-9'>
                    <PrimaryButton text="Get A Quote" className="bg-light-red text-white !leading-127 hover:text-light-red hover:bg-white hover:outline outline-1 hover:outline-light-red" />
                </div>
            </div>
        </div>
    )
}

export default OurProcess
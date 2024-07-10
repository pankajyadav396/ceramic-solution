import PrimaryButton from './common/PrimaryButton'
import { processData } from './common/Helper'

const OurProcess = () => {
    return (
        <>
            <div className='lg:py-[100px] py-14 sm:py-16 md:py-20  bg-lightPink'>
                <div className=' max-w-[1172px] mx-auto px-4 flex justify-center items-center flex-col'>
                    <h2 className='text-black font-plusSans font-semibold mb-5 lg:text-x6xl md:text-5xl sm:text-4xl !leading-127 text-3xl text-center'>Our Process</h2>
                    <p className=' text-center max-w-[590px] font-plusSans leading-160 text-lg mx-auto mb-10 sm:mb-12 md:mb-14'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                    <div className='w-full max-lg:relative items-center max-lg:flex justify-center'>
                        <div className='flex flex-col lg:flex-row lg:top-0 sm:justify-between max-sm:translate-x-0 max-sm:w-full sm:h-[80%] md:w-full max-w-[875px] mx-auto max-lg:left-0 max-sm:top-0 max-sm:h-[80%] lg:mb-9 max-lg:absolute relative z-[1]'>
                            <div className='bg-lightRed rounded-full !left-[40%] font-plusSans max-sm:absolute flex items-center font-semibold justify-center w-[88px] h-[88px] text-mdlg text-white'>
                                01
                            </div>
                            <div className='bg-lightRed rounded-full !left-[40%] font-plusSans max-sm:absolute top-[44%] flex items-center font-semibold justify-center w-[88px] h-[88px] text-mdlg text-white'>
                                02
                            </div>
                            <div className='bg-lightRed rounded-full !left-[40%] font-plusSans max-sm:absolute bottom-7 flex items-center font-semibold justify-center w-[88px] h-[88px] text-mdlg text-white'>
                                03
                            </div>
                            <span className=' bg-transparent max-sm:hidden border-black border-dashed absolute max-lg:h-[90%] top-5  lg:w-[calc(100%-50px)] translate-y-0 lg:top-[50%] translate-x-0 left-10 z-[-1] border-[2px]'></span>
                        </div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 max-sm:gap-[160px] max-sm:mt-[120px]'>
                            {processData.map((obj, index) => {
                                return (
                                    <div key={index} className='bg-white rounded-3xl shadow-smallBlack p-6 max-w-[364px]'>
                                        <a href="#">{obj.icon}</a>
                                        <p className=' lg:text-2xl text-lg sm:text-xl font-semibold text-black text-nowrap font-plusSans leading-160 mt-6 mb-3'>{obj.title}</p>
                                        <p className='text-sm sm:text-base font-plusSans font-normal leading-160 text-black'>{obj.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className=' text-center flex items-center justify-center mt-9'>
                        <PrimaryButton text="Get A Quote" className="bg-lightRed text-white leading-[23px] hover:text-lightRed hover:bg-white hover:outline outline-[1px] hover:outline-lightRed" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProcess
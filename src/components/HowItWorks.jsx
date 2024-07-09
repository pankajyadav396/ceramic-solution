import wallimg from '../assets/images/webp/HowWorksImg.webp'
import { howWorksData } from './common/Helper'
import PrimaryButton from './common/PrimaryButton'

const HowItWorks = () => {
    return (
        <>
            <div className='max-w-[1172px] mx-auto px-4'>
                <div className='flex flex-row flex-wrap max-lg:justify-center max-lg:items-center'>
                    <div className='lg:w-5/12 sm:w-8/12 md:w-7/12 w-10/12'>
                        <img src={wallimg} alt="howitworksimg" className='w-full' />
                    </div>
                    <div className='lg:w-7/12  w-full lg:ps-6 xl:ps-[63px] max-lg:flex justify-center items-center flex-col mt-8 lg:mt-0'>
                        <h2 className='text-black max-lg:text-center font-plusSans !leading-127 font-semibold mb-5 lg:text-x6xl md:text-5xl sm:text-4xl text-3xl'>How It Works?</h2>
                        <p className='max-w-[590px] max-lg:text-center font-plusSans text-lg leading-160 mx-auto mb-8'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                        <div className=' flex flex-col gap-4'>
                            {howWorksData.map((obj, index) => {
                                return (
                                    <div key={index} className='sm:p-4 p-3 shadow-grey'>
                                        <div className='flex items-start gap-5 justify-start'>
                                            <img src={obj.img} alt="img-icon" className='w-[26.67px] h-[26.67px] mt-1' />
                                            <div className=' flex flex-col'>
                                                <p className='text-xl text-black font-semibold mb-3 font-plusSans leading-160'>{obj.title}</p>
                                                <p className='  max-w-[508px] text-base font-normal font-plusSans leading-160'>{obj.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className=' flex gap-6 mt-9 max-[460px]:flex-col'>
                            <PrimaryButton text="Get A Quote" className="bg-lightRed hover:bg-white text-white hover:text-lightRed border flex items-center justify-center border-lightRed h-[63px] leading-[23px]" />
                            <PrimaryButton text="View Tile Visualizer" className="text-lightRed  border border-lightRed h-[63px] leading-[23px] hover:bg-lightRed hover:text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks
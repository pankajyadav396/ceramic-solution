import logo from '../assets/images/svg/logo.svg'
import { Facebook, FooterCaller, Inbox, Insta, Linkedin, Twitter } from './common/Icons'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='md:mt-16 mt-14 lg:mt-[92px]' id='contactus'>
                <div className='max-w-[1172px] mx-auto px-4 pb-11'>
                    <div className='flex lg:flex-row flex-col flex-wrap justify-between'>
                        <div className='lg:w-2/12 w-full'>
                            <div className='flex flex-col'>
                                <a href="/"> <img src={logo} alt="logo" className='w-[175.59px] sm:mb-4 mb-3 md:mb-5 cursor-pointer' /></a>
                                <a className='flex gap-2.5 items-center mb-4' href="https://mail.google.com/mail/u/0/?ogbl#inbox">
                                    <Inbox />
                                    <p className='text-base text-dark-blue capitalize leading-160 font-normal font-plus-sans'>help@Dealzip.com</p>
                                </a>
                                <a href="tel:9306989857" className='flex items-center gap-2.5'>
                                    <FooterCaller />
                                    <p className='text-base text-dark-blue leading-160 font-normal font-plus-sans'>+1 234 456 678 89</p>
                                </a>
                                <div className='flex gap-2 mt-6'>
                                    <a className='hover:scale-110 duration-300' href="https://www.facebook.com/login/" target='_blank'><Facebook /></a>
                                    <a className='hover:scale-110 duration-300' href="https://www.instagram.com/" target='_blank'><Insta /></a>
                                    <a className='hover:scale-110 duration-300' href="https://x.com/?lang=en" target='_blank'> <Twitter /></a>
                                    <a className='hover:scale-110 duration-300' href="https://in.linkedin.com/" target='_blank'><Linkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-9/12 w-full max-lg:mt-10'>
                            <div className='flex flex-wrap md:justify-between'>
                                <div className='md:w-2/12 max-450:w-6/12 w-4/12'>
                                    <ul>
                                        <li className='text-xl leading-160 text-dark-blue font-semibold font-plus-sans mb-5'>Links</li>
                                        <li className='mb-3'><a href="#home" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>home</a></li>
                                        <li className='mb-3'><a href="#about" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>about us</a></li>
                                        <li className='mb-3'><a href="#services" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>Services</a></li>
                                        <li><a href="#Request" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>Showcase</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-2/12 max-450:w-6/12 w-4/12'>
                                    <ul>
                                        <li className='text-xl leading-160 text-dark-blue font-semibold font-plus-sans mb-5'>Legal</li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>terms of use</a></li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'> privacy policy</a></li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>cookie policy</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-2/12 max-450:w-6/12 max-450:mt-5 w-4/12'>
                                    <ul>
                                        <li className='text-xl leading-160 text-dark-blue font-semibold font-plus-sans mb-5'>Product</li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>take tour</a></li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>live chat</a></li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>reveiws</a></li>
                                    </ul>
                                </div>
                                <div className='md:w-5/12 w-full max-md:mt-5'>
                                    <ul>
                                        <li className='text-xl leading-160 text-dark-blue font-semibold font-plus-sans mb-5'>Newsletter</li>
                                        <li className='mb-3'><a href="#contactus" className='capitalize text-dark-blue hover:after:w-full hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-dark-blue  after:h-[1.5px] relative after:-bottom-0.5 after:rounded-2xl after:transition-all after:duration-300 after:ease-linear text-base font-plus-sans font-normal leading-160'>Stay up to date</a></li>
                                        <div className='border max-w-[340px] border-dark-blue border-opacity-15 pl-2.5 pr-6 py-2.5 rounded-62 flex items-center justify-between'>
                                            <input type="email" className='w-[110px] !outline-none' placeholder='Your email ' />
                                            <button className='px-10 py-4 bg-light-red duration-300 hover:bg-white hover:text-light-red outline outline-1 hover:outline-light-red font-plus-sans text-base leading-[26px] font-semibold text-white rounded-62'>Subscribe</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black-grediant flex h-[1px] w-full'></div>
                <div className='py-4'>
                    <p className=' font-plus-sans font-normal leading-160 text-base capitalize text-dark-blue text-center'>Copyright {currentYear} ceramicsolutions.com all rights reserved</p>
                </div>
            </div >
        </>
    )
}

export default Footer
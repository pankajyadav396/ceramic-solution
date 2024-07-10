import { useState } from 'react'
import logo from '../assets/images/svg/logo.svg'
import { Caller } from './common/Icons'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    };

    return (
        <div className=' px-4'>
            <nav
                className="max-w-[1140px] p-4 mx-auto bg-white rounded-3xl flex items-center justify-between">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <ul
                    className={`${nav ? "left-0" : "left-[-100%]"
                        } flex items-center gap-[28px] mobileView duration-300`}>
                    <li><a onClick={show} href="#home"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Home</a>
                    </li>
                    <li><a onClick={show} href="#about"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">About</a>
                    </li>
                    <li><a onClick={show} href="#services"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Services</a>
                    </li>
                    <li><a onClick={show} href="#portfolio"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Portfolio</a>
                    </li>
                    <li><a onClick={show} href="#contactus"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Contact us</a>
                    </li>
                    <li><a onClick={show} href="#Request"
                        className="text-black font-plusSans text-base font-normal leading-normal hover:after:w-[100%] hover:after:left-0 after:right-0 after:w-0 after:absolute after:bg-black after:h-[1.5px] relative after:bottom-[-2px] after:rounded-[15px] after:transition-all after:duration-300 after:ease-linear">Request a Qoute</a>
                    </li>
                    <a href="tel:9306989857" onClick={show}
                        className="hover:bg-white flex sm:hidden group duration-300 hover:text-lightRed hover:outline-[1.5px] hover:outline-lightRed outline outline-transparent text-white bg-lightRed rounded-[56px] items-center justify-center p-[14px_20px] font-plusSans text-base gap-[10px] font-bold"> <Caller /> (865) 621-1717</a>
                </ul>
                <div className=' flex gap-6 items-center justify-center sm:flex'>
                    <a href="tel:9306989857" onClick={show}
                        className="hidden sm:flex hover:bg-white group duration-300 hover:text-lightRed hover:outline-[1.5px] hover:outline-lightRed outline outline-transparent  text-white bg-lightRed rounded-[56px] items-center justify-center p-[14px_20px] font-plusSans text-base gap-[10px] font-bold"><span><Caller /></span>(865) 621-1717</a>
                    <label className='lg:hidden' onClick={show}>
                        {nav ? (
                            <div className='relative z-50'>
                                <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl rotate-45 mb-1'></span>
                                <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                            </div>
                        ) : (
                            <div className='relative z-40'>
                                <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                                <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl mb-1'></span>
                                <span className=' flex w-6 h-1 bg-black duration-300 rounded-2xl'></span>
                            </div>
                        )}
                    </label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
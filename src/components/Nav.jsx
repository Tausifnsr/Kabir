import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('bg-transparent');
    const [textColor, setTextColor] = useState('text-white');

    const showDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust the value as needed
            setNavbarBackground('bg-white shadow-md');
            setTextColor('text-black');
        } else {
            setNavbarBackground('bg-transparent');
            setTextColor('text-white');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full h-20 flex justify-center items-center fixed top-0 z-50 transition-all duration-300 ${navbarBackground}`}>
            <div className="w-full">
                <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-2">
                            {/* <img src={""} alt="logo" className="h-[50px] w-[80px]" /> */}
                            <h2 className={`logo font-bold text-[30px] ${textColor}`}>Kabir Enterprises</h2>
                        </div>
                    </div>
                    <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className={`leading-normal no-underline ${textColor} text-lg font-sans hover:text-slate-700 cursor-pointer`}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className={`leading-normal no-underline ${textColor} text-lg font-sans hover:text-slate-700 cursor-pointer`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className={`leading-normal no-underline ${textColor} text-lg font-sans hover:text-slate-700 cursor-pointer`}
                        >
                            Our Services
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className={`leading-normal no-underline ${textColor} text-lg font-sans border-2 rounded-3xl px-3 hover:text-blue-800 hover:bg-white cursor-pointer`}
                        >
                            Contact Us
                        </Link>
                    </ul>
                    {dropdown ? (
                        <div
                            onClick={showDropdown}
                            className="lg:hidden text-[22px] cursor-pointer"
                            style={{ color: textColor }}
                        >
                            <MdClose />
                        </div>
                    ) : (
                        <div
                            onClick={showDropdown}
                            className="lg:hidden text-[22px] cursor-pointer"
                            style={{ color: textColor }}
                        >
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className="lg:hidden w-full fixed top-[4.5rem] bg-white transition-all z-50">
                        <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0">
                            <ul className="flex flex-col justify-center w-[100%]">
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    onClick={showDropdown}
                                    className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    onClick={showDropdown}
                                    className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    onClick={showDropdown}
                                    className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                                >
                                    Our Services
                                </Link>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    onClick={showDropdown}
                                    className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    onClick={showDropdown}
                                    className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                                >
                                    Contact
                                </Link>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

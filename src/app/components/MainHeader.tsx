'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import logoImage from '../assets/colourLogo.svg';
import mlh from "../assets/MLH.png";
import mlh_black from "../assets/black.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import MLHBadge from './MLHBadge';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavLinks = () => (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-16'} text-sm font-light`}>
      <Link href="https://www.uottahack.ca/" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>About</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link href="https://www.uottahack.ca/events" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>Past Events</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link href="https://www.uottahack.ca/faq" target="_blank" className="relative group">
        <span className='text-shadow-navbar-subtle'>FAQs</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </Link>
    </nav>
  );

  return (
    <header className="relative bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          {isMobile ? (
            <div className="flex-shrink-0">
              <img src={logoImage.src} alt="Logo" className="w-12 h-12 m-6" />
            </div>
          ) : (
            <div className="flex-shrink-0">
              <img src={logoImage.src} alt="Logo" className="w-12 h-12" />
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex-grow flex justify-center">
              <NavLinks />
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={toggleMenu} className="p-5">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          )}

          {/* Janky fix: */}

          {!isMobile && (
            <>
              <div className="flex-shrink-0 w-12 h-12">
              </div>
              <div className="absolute top-0 right-4 mr-4">
                <img
                  src={mlh.src}
                  alt="MLH 2025 Badge"
                  className="h-40 w-auto"
                />
              </div>
            </>
          )}

        </div>
      </div>

      {/* Mobile Menu (unchanged) */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-10">
          <div className="absolute h-[60%] w-[80%] bg-white p-12 items-center top-8 m-auto left-0 right-0 shadow-lg rounded-md">
            <button onClick={toggleMenu} className="absolute top-2 right-2 text-[#01A2D9] p-9">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="absolute top-0 left-11 h-full flex items-start">
              <img
                src={mlh_black.src}
                alt="MLH 2025 Badge"
                className="h-[100px] w-auto"
              />
            </div>

            <div className="mt-24 text-[#01A2D9]">

              <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-16'} text-sm font-normal`}>
                <div>
                  <Link href="https://www.uottahack.ca/" target="_blank" className="relative group">
                    <span>About</span>
                  </Link>
                  <hr className="border-t mt-4" />
                </div>

                <div>
                  <Link href="https://www.uottahack.ca/events" target="_blank" className="relative group">
                    <span>Past Events</span>
                  </Link>
                  <hr className="border-t mt-4" />
                </div>

                <div>
                  <Link href="https://www.uottahack.ca/faq" target="_blank" className="relative group">
                    <span>FAQs</span>
                  </Link>
                </div>
              </nav>

            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#01A2D9] p-6 w-[170px] rounded-t-sm flex justify-center items-center space-x-8">
              <a href="https://ca.linkedin.com/company/uottahack" target="_blank">
                <img src={linkedin.src} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/uottahack" target="_blank">
                <img src={insta.src} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://discord.gg/XDQ94xsDwB" target="_blank">
                <img src={discord.src} alt="Discord" className="w-7 h-7" />
              </a>
            </div>




          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;


// OLD SECTION TO BE REUSED, DO NOT DELETE
// return (
//   <header className={`${styles.header} items-center p-4 shadow-md`}>
//     {(width < 700) && (
//       <>
//         <div className="md:hidden inline-block items-center">
//           <button onClick={toggleMenu} className="pt-1 text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div className={styles.headerLogo}>
//           <img width="50px" src={logoImage.src} alt="Logo" />
//         </div>
//         <nav className={`w-full flex flex-col space-y-2 mt-8 text-center md:hidden ${styles.vertMenu} ${isOpen ? styles.open : ''}`}>
//           <Link className="pt-2" href="#">
//             <span className="text-white hover-coloured-text">Home</span>
//           </Link>
//           <Link className="pt-2" href="#mission">
//             <span className="text-white hover-coloured-text">Mission</span>
//           </Link>
//           <Link className="pt-2" href="#impact">
//             <span className="text-white hover-coloured-text">Impact</span>
//           </Link>
//           <Link className="pt-2" href="#sponsorship">
//             <span className="text-white hover-coloured-text">Sponsors</span>
//           </Link>
//           <Link className="pt-2" href="#pastevents">
//             <span className="text-white hover-coloured-text">Past Events</span>
//           </Link>
//           <Link className="pt-2" href="https://2024.uottahack.ca">
//             <span className="text-white coloured-text hover-coloured-text">2024</span>
//           </Link>
//           <Link className="pt-2" href="#faq">
//             <span className="text-white hover-coloured-text">FAQ</span>
//           </Link>
//           <img src={mlh.src} alt=""className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] " />
//         <img/>
//         </nav>
//       </>


{/* <div className={styles.headerLogo}>
            <img width="50px" src={logoImage.src} alt="Logo" />
          </div>
          <div className={styles.horMenu}>
            <Link href="#">
              <span className="text-white p-10 hover-coloured-text">Home</span>
            </Link>
            <Link href="#mission">
              <span className="text-white p-10 hover-coloured-text">Mission</span>
            </Link>
            <Link href="#impact">
              <span className="text-white p-10 hover-coloured-text">Impact</span>
            </Link>
            <Link href="#sponsorship">
              <span className="text-white p-10 hover-coloured-text">Sponsors</span>
            </Link>
            <Link href="#pastevents">
              <span className="text-white p-10 hover-coloured-text">Past Events</span>
            </Link>
            <Link href="https://2024.uottahack.ca">
              <span className="text-white coloured-text p-10 hover-coloured-text">2024</span>
            </Link>
            <Link href="#faq">
              <span className="text-white p-10 hover-coloured-text">FAQ</span>
            </Link>
            <img src={mlh.src} alt="" className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] "/>
        </div> */}
/*
        <Link href="https://2018.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2018.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2018</span>
              </div>
            </Link>
            <Link href="https://2019.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2019.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2019</span>
              </div>
            </Link>
            <Link href="https://2020.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2020.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2020</span>
              </div>
            </Link>
            <Link href="https://2021.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2021.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2021</span>
              </div>
            </Link>
            <Link href="https://2023.uottahack.ca">
              <div className='photoColumn'>
                <img width="50px" src={Logo2023.src} alt = "Logo"/>
                <span className="text-white coloured-text p-10 hover-coloured-text">2023</span>
              </div>
            </Link>
            <Link href="https://2024.uottahack.ca/">
              <div className='photoColumn'>
                <img width="50px" src={Logo2024.src} alt = "Logo"/>
                <span className="text-white p-10 hover-coloured-text">2024</span>
              </div>
            </Link>
            */
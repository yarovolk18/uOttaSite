'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import logoImage from '../assets/colourLogo.svg';
import mlh from "../assets/MLH.png";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const updateWidth = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <header className="relative bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between py-4">
          {/* Left Logo */}
          <div className="flex items-center space-x-4">
            <img src={logoImage.src} alt="Logo" className="w-12 h-12" />
          </div>

          {/* Center Links */}
          {width >= 700 && (
            <nav className="flex-1 flex justify-center space-x-16 text-sm font-light">
              <Link href="https://www.uottahack.ca/" target="__blank" className="hover:underline">About</Link>
              <Link href="https://www.uottahack.ca/events" target="__blank" className="hover:underline">Past Events</Link>
              <Link href="https://www.uottahack.ca/faq" target="__blank" className="hover:underline">FAQs</Link>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {width < 700 && (
            <button onClick={toggleMenu} className="block md:hidden">
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

          {/* MLH Badge */}
          <div className="absolute top-0 right-0 h-full flex items-start">
            <img
              src={mlh.src}
              alt="MLH 2025 Badge"
              className="h-[190%] w-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && width < 700 && (
        <nav className="absolute top-16 left-0 w-full bg-[#01A2D9] text-center py-4">
          <Link href="#" className="block py-2">About</Link>
          <Link href="#" className="block py-2">Past Events</Link>
          <Link href="#" className="block py-2">FAQs</Link>
        </nav>
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
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/MainHeader.module.css';
import logoImage from '../assets/colourLogo.svg';
import mlh from "../assets/MLH.png";
import Logo2018 from '../assets/uOttaLOGO2018.png';
import Logo2019 from '../assets/uOttaLOGO2019.png';
import Logo2020 from '../assets/uOttaLOGO2020.png';
import Logo2021 from '../assets/uOttaLOGO2021.png';
import Logo2023 from '../assets/uOttaLOGO2023.png';
import Logo2024 from '../assets/uOttaLOGO2024.png';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <header className={`${styles.header} items-center p-4 shadow-md`}>
      {(width < 700) && (
        <>
          <div className="md:hidden inline-block items-center">
            <button onClick={toggleMenu} className="pt-1 text-white focus:outline-none">
              <svg
                className="w-6 h-6"
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
          </div>
          <div className={styles.headerLogo}>
            <img width="70px" src={logoImage.src} alt="Logo" />
          </div>
          <nav className={`w-full flex flex-row space-x-5 mt-8 items-center justify-center text-center md:hidden ${styles.vertMenu} ${isOpen ? styles.open : ''}`}>
            {/* <Link className="pt-2" href="#">
              <span className="text-white hover-coloured-text">Home</span>
            </Link> */}
            <Link className="pt-2" href="https://2018.uottahack.ca">
                <span className="text-white p-0 hover-coloured-text">
                  <img width="30px" src={Logo2018.src} alt = "Logo" className='mx-auto'/>
                  2018
                </span>
            </Link>
            <Link className="pt-2" href="https://2019.uottahack.ca">                
                <span className="text-white p-0 hover-coloured-text">
                  <img width="30px" src={Logo2019.src} alt = "Logo" className='mx-auto'/>
                  2019
                </span>
            </Link>
            <Link className="pt-2" href="https://2020.uottahack.ca">
              <span className="text-white p-0 hover-coloured-text">
                  <img width="30px" src={Logo2020.src} alt = "Logo" className='mx-auto'/>
                  2020
              </span>
            </Link>
            <Link className="pt-2" href="https://2021.uottahack.ca">
              <span className="text-white p-0 hover-coloured-text">
                <img width="30px" src={Logo2021.src} alt = "Logo" className='mx-auto'/>
                2021
              </span>
            </Link>
            <Link className="pt-2" href="https://2023.uottahack.ca">
              <span className="text-white p-0 hover-coloured-text">
                <img width="30px" src={Logo2023.src} alt = "Logo" className='mx-auto'/>
                2023
              </span>
            </Link>
            <Link className="pt-2" href="https://2024.uottahack.ca">
              <span className="text-white p-0 hover-coloured-text">
                <img width="30px" src={Logo2024.src} alt = "Logo" className='mx-auto'/>
                2024
              </span>
            </Link>
            <img src={mlh.src} alt=""className="absolute top-[-0.5rem] right-1 w-[3rem] h-[6rem] " />
          </nav>
        </>

        

      )}
      {(width >= 700) && (
        <>
          <div className={styles.headerLogo}>
            <img width="50px" src={logoImage.src} alt="Logo" />
          </div>
          <div className={styles.horMenu}>
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
            <img src={mlh.src} alt="" className="absolute top-0 right-20 w-[8.24rem] h-[15.5rem] "/>
        </div>
          
        </>
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

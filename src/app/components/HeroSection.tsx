"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import background from "../assets/Background.png";
import buildingRight from "../assets/BuildingRight.png";
import EmailInputBox from '../components/ui/EmailInputBox';
import mlh from "../assets/MLH.png";
import { DEV_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [email, setEmail] = useState<string>("");
  
  return (
    <section className={`${styles.container} flex items-center justify-center`}>
      <div className={`${styles.textContainer} mt-32`}>
        <p className="text-lg text-center font-inter font-light ">
          January 17 - 19, 2025
        </p>
        <h1 className={`${styles.title} mb-2`}>uOttaHack 7</h1>
        <p className="mb-24 text-lg text-center font-inter font-light">
          In-person @ the University of Ottawa
        </p>

        <div className="flex justify-center">
          <EmailInputBox />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



/* <input
            type="email"
            placeholder="Enter your email to be notified when applications open"
            name=""
            id="email"
            value={email}
            className="w-full md:w-[75%] mx-auto md:ml-16 ml-0 font-jost p-3 border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-white bg-gray-500 bg-opacity-50 text-center"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex justify-center">
            {" "}
            <button
              onClick={handleEmailSubmit}
              className="mx-auto font-jost bg-[#0c7ebc] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 w-full max-w-xs mt-10"
            >
              Enter
            </button>
          </div>
  */
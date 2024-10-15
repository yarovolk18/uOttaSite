"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
//Asset Imports Below
import styles from "../styles/HeroSection.module.css";
import gridImage from "../assets/Grid.png";
import rightImage from "../assets/Vector Graphic.png";
import sun from "../assets/Retro sun.png";
import rock from "../assets/Rock.png";
import parliament from "../assets/Parliam.png";
import background from "../assets/Background.png";
import buildingRight from "../assets/BuildingRight.png";
import mlh from "../assets/MLH.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [email, setEmail] = useState<string>("");
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });

        setEmail(""); // Clear input
        alert("Email added successfully!");
      } catch (error) {
        console.error("Error adding email: ", error);
        alert("Failed to add email");
      }
    } else {
      alert("Please enter an email");
    }
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <br />
          <p className="mx-auto mt-[-25px] mb-[-25px] text-large text-center font-jost">
            January 17 - 19 2025
          </p>
          <h1 className={styles.title}>uOttaHack 7</h1>
          <p className="mx-auto text-shadow font-jost">Explore Your Limits</p>
          <br />
          <input
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
            {/* Flex container for centering the button */}
            <button
              onClick={handleEmailSubmit}
              className="mx-auto font-jost bg-[#0c7ebc] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 w-full max-w-xs mt-10"
            >
              Enter
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

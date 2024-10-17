"use client";
import { SnackbarProvider } from 'notistack';
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import SponsorUsSection from "./components/SponsorUsSection";

export default function Home() {
  return (
    <main>
      <SnackbarProvider maxSnack={3}>
        <MainHeader/>
        <HeroSection />

        {/*<IntroSection/>
      <MainFooter/>
      <MainHeader/>
      <MapSection/>
      <SponsorsSection/>
      <SponsorUsSection/> */}
      </SnackbarProvider>
    </main>
  );
}

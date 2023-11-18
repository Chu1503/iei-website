import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import AboutVIT from "../components/AboutVIT";

import vedika from "../images/Vedika_Nigam.png";
import suryansh from "../images/Suryansh_Kumar.png";
import arka from "../images/Arka_De.png";
import omm from "../images/Omm_Malhotra.png";
import daksh from "../images/Daksh_Pratap.png";
import shiv from "../images/Shiv_Akash.png";
import manish from "../images/Manish_Maheswari.png";
import sanskriti from "../images/Sanskriti_Singh.png";
import arisha from "../images/Arisha_Tanveer.png";
import shreya from "../images/Shreya_Sonawane.png";

import iei_logo_text from '../images/iei_logo_text.png';
import iei_logo from '../images/iei_logo.png';

// export default function Home() {
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = [
      vedika.src,
      suryansh.src,
      arka.src,
      omm.src,
      daksh.src,
      manish.src,
      sanskriti.src,
      arisha.src,
      shreya.src,
      shiv.src,
      iei_logo_text.src,
      iei_logo.src,
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden 
     sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
    >
      <Navbar />

      {/* EXPERIMENT WITH SNAP LATER  */}

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="aboutvit">
        <AboutVIT />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;

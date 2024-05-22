"use client";
import React, { useEffect } from "react";
import { AboutNote, Intro, SlideShow, WeServe } from "./components";
import { Reviews } from "@app/components";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <AboutNote />
      <SlideShow />
      <WeServe />
      <Reviews />
    </main>
  );
}

export default About;

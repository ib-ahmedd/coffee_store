import React from "react";
import { AboutNote, Intro, SlideShow, WeServe } from "./components";
import { Reviews } from "@app/components";

function About() {
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

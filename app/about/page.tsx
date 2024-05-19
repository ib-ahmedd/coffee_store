import React from "react";
import { AboutNote, Intro } from "./components";

function About() {
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <AboutNote />
    </main>
  );
}

export default About;

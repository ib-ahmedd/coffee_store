"use client";
import { About, Buy, Featured, Intro, Reviews } from "./components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <main className="w-full flex flex-col items-center">
      <Intro />
      <About />
      <Featured />
      <Reviews />
      <Buy />
    </main>
  );
}

export default Home;

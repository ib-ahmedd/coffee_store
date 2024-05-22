"use client";
import { useEffect } from "react";
import { Buy } from "@app/components";
import { Intro, MenuContent } from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-out",
    });
    Aos.refresh();
  }, []);
  return (
    <main className="w-full">
      <Intro />
      <MenuContent />
      <Buy />
    </main>
  );
}

export default Menu;

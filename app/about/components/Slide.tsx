"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Slide({ id, current }: { id: number; current: number }) {
  const [cycle, setCycle] = useState(1);
  const [styles, setStyles] = useState("translate-x-full");

  function slideCycle() {
    if (cycle === 1) return setStyles("translate-x-full");
    if (cycle === 2) return setStyles("transition duration-300 translate-x-0");
    if (cycle === 3)
      return setStyles("transition duration-300 -translate-x-full");
  }

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCycle((prev) => (prev < 3 ? prev + 1 : 1));
    }, 3000);
    return () => {
      clearInterval(cycleInterval);
    };
  }, []);

  useEffect(() => {
    if (id === current) return slideCycle();
  }, [cycle]);
  return (
    <div className={`absolute w-96 h-96 ${styles}`}>
      <Image
        src="/images/about/slideshow/left/slide-left-1.jpg"
        alt="slide image"
        fill
      />
    </div>
  );
}

export default Slide;

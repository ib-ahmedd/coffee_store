"use client";
import Image from "next/image";

function About() {
  return (
    <section className="flex flex-col md:flex-row bg-peach  w-full items-end md:h-screen">
      <div className="w-full h-full flex flex-col p-8 xl:p-40 box-border md:w-1/2">
        <h2 className=" font-yeseva text-5xl z-10 text-orange my-4 lg:text-8xl sm:text-6xl">
          About
        </h2>
        <div data-aos="fade-left">
          <h3 className="text-orange z-10 font-yeseva text-lg sm:text-xl">
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </h3>
          <p className="z-10 my-4 text-semi-black">
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat
          </p>
          <a href="" className="z-10 underline hover:cursor">
            Read More
          </a>
        </div>
      </div>
      <div className="w-full flex justify-end md:absolute md:h-[115%]">
        <div className="absolute w-full h-full md:bg-home-about-nuts bg-cover bg-no-repeat bg-center lg:bg-left" />
        <div className="w-full flex items-end h-full md:pl-8 md:bg-home-about-bg bg-cover bg-bottom bg-no-repeat md:w-1/2 ">
          <div
            className="relative w-[25rem] h-[25rem] -mb-40 md:w-[35rem] md:h-[35rem]"
            data-aos="fade-down"
          >
            <img
              src="/images/home/sec2/widget-coffee-img.png"
              alt="coffee image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

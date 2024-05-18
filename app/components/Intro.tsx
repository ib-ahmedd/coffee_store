import React from "react";

function Intro() {
  return (
    <section className="w-full h-fit bg-home-intro-bg bg-cover bg-center bg-no-repeat lg:h-fit lg:bg-fixed">
      <div className="w-full h-screen px-4 flex flex-col items-center bg-gradient-to-t from-[#3a3a3a] to-transparent">
        <h1 className="font-yeseva mt-48 text-white font-bold text-5xl sm:text-8xl md:text-9xl">
          Welcome!
        </h1>
        <p className="font-yeseva text-white text-base font-bold text-center my-8 md:text-2xl">
          Come enjoy the lorem ipsum dolor sit amet, consectetur
          <br className="hidden md:block" /> adipisicing elit, sed do eiusmod
        </p>
        <button className="w-40 bg-orange hover:bg-[#0274be] transition-all duration-200 text-white py-4 shadow-md">
          Book A Table
        </button>
      </div>
    </section>
  );
}

export default Intro;

import React from "react";

function Intro() {
  return (
    <section className="w-full h-[80vh] bg-homeIntroBg bg-cover bg-center bg-no-repeat xl:h-screen">
      <div className="w-full h-full pt-60 px-4 flex flex-col items-center bg-gradient-to-t from-gray-700 to-transparent">
        <h1 className="font-yeseva text-white font-bold text-7xl sm:text-8xl md:text-9xl">
          Welcome!
        </h1>
        <p className="font-yeseva text-white text-base font-bold text-center my-8">
          Come enjoy the lorem ipsum dolor sit amet, consectetur
          <br className="hidden md:block" /> adipisicing elit, sed do eiusmod
        </p>
        <button className="w-40 bg-orange-400 text-white py-4 shadow-md">
          Book A Table
        </button>
      </div>
    </section>
  );
}

export default Intro;

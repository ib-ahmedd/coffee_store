import React from "react";

function WeServe() {
  return (
    <section className="w-full z-10 bg-white flex justify-center py-8 px-4 xl:px-0">
      <div className="flex flex-col w-full xl:w-4/5">
        <h2 className="text-orange font-yeseva font-bold text-5xl md:my-8 md:text-7xl lg:text-8xl ">
          We Serve One of the Best Coffee!
        </h2>
        <div className="flex mt-8 flex-col gap-8 md:flex-row md:gap-0">
          <h3
            className="font-yeseva text-text-green font-bold leading-6 w-full md:w-4/12 text-xl md:text-2xl md:pr-12"
            data-aos="fade-left"
          >
            We are an icon place lorem ipsum dolor sit amet, elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </h3>
          <div
            className="w-full flex flex-col gap-6 md:w-8/12"
            data-aos="zoom-in"
          >
            <h3 className="font-yeseva font-bold text-semi-black text-xl md:text-3xl">
              The place where different coffee beans from all over the world
              meet. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor.
            </h3>
            <p className="text-gray text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeServe;

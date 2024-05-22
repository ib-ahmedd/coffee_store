function AboutNote() {
  return (
    <section className="bg-peach relative">
      <div className="w-full h-screen absolute bg-home-about-nuts bg-cover lg:bg-fixed" />
      <div className="w-full flex justify-center bg-home-buy-bg bg-contain bg-right bg-no-repeat py-14">
        <div className="flex w-full p-4 flex-col gap-5 md:gap-0 md:flex-row xl:w-4/5 xl:p-0">
          <div className=" z-10 w-full md:w-1/3" data-aos="fade-left">
            <h3 className="font-yeseva font-bold text-semi-black leading-5 text-xl lg:text-2xl">
              A wonderful Coffee house,
              <br className="hidden md:block" /> that combines lorem ipsum
              <br className="hidden md:block" /> and dolor sit amet.
            </h3>
          </div>
          <div
            className="flex z-10 flex-col text-sm text-gray gap-5 w-full md:text-base md:w-2/3 lg:gap-8"
            data-aos="fade-right"
          >
            <h3 className=" font-yeseva font-bold text-orange text-xl lg:text-3xl">
              We are one of the most lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor ut labore et dolore magna
              aliqua.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutNote;

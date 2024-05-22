import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Buy() {
  return (
    <section className="relative w-full flex flex-col justify-center pb-12 bg-peach ">
      <div className=" w-full absolute h-[120%] bottom-0 bg-home-buy-bg bg-right bg-contain bg-no-repeat">
        <div className="h-full pt-12 relative bg-text-green w-1/6 md:w-2/6 hidden md:block">
          <div
            className="absolute p-8 w-[40em] h-[35em] -right-60 hidden md:block"
            data-aos="zoom-out"
          >
            <img
              src="/images/home/buy/product-img.png"
              alt="product image"
              className="object-fill"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full px-8 lg:text-right lg:px-0 lg:w-4/5">
        <div className=" flex flex-col gap-8 py-4 w-full md:w-1/2 lg:items-end">
          <h2 className="z-10 font-yeseva text-orange text-5xl md:text-7xl lg:text-8xl">
            Buy For <br />
            Home!
          </h2>
          <div className="flex flex-col lg:items-end" data-aos="fade-left">
            <p className="z-10 text-sm w-2/3">
              Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip
            </p>
            <a
              href=""
              className="z-10 my-16 flex gap-4 items-center underline text-text-green"
            >
              Order Now{" "}
              <span className="text-3xl w-12 h-12 flex justify-center items-center text-white rounded-full bg-text-green">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buy;

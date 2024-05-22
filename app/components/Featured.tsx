import { featuredMenuArray } from "@constants";
import MenuCard from "./MenuCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Featured() {
  return (
    <section className="py-20 w-full px-4 xl:w-4/5">
      <div>
        <h2 className="font-yeseva text-orange mb-8 w-full text-5xl mt-32 md:mt-0 md:text-6xl lg:text-8xl lg:w-1/2">
          Featured <br className="hidden md:block" /> Menu
        </h2>
      </div>
      <div className="flex flex-col w-full md:flex-row">
        {featuredMenuArray.map((item) => (
          <MenuCard key={item.picNo} {...item} />
        ))}
      </div>
      <div className="w-full flex justify-center md:justify-end mt-20 items-center gap-4">
        <Link
          href="/menu"
          className="text-text-green underline flex gap-4 items-center hover:text-orange"
        >
          View Full Menu
          <span className="text-3xl border py-4 px-5 rounded-full text-semi-black hover:text-orange">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Featured;

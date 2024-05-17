"use client";
import { navLinksArray } from "@constants";
import NavLink from "./NavLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full absolute font-monteserat top-0 flex flex-col items-center px-7 py-4 mx-auto xl:w-3/4 xl:px-0 md:flex-row md:justify-between">
      <span className="md:flex hidden gap-4 flex-1">
        {navLinksArray.map((item) => (
          <NavLink
            key={item.title}
            {...item}
            styles="flex justify-center p-4 w-20 text-xl text-white"
          />
        ))}
      </span>
      <div className="relative w-36 h-36 md:flex-1 md:w-32 md:h-32">
        <Image
          src={"/images/logo/logo.png"}
          alt="site logo"
          fill
          className="object-contain"
        />
      </div>
      <span className="flex-1 md:flex hidden justify-end">
        <button className="w-36 border text-white py-4">Order Online</button>
      </span>
      <button
        className="flex justify-center items-center text-white text-xl w-8 h-8 md:hidden"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        {!menuOpen ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faClose} />
        )}
      </button>
      <div className="w-full md:hidden overflow-hidden">
        <div
          className={`flex flex-col w-full bg-white md:hidden transition duration-200 ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {navLinksArray.map((item) => (
            <NavLink
              key={item.title}
              {...item}
              styles="w-full py-4 px-4 border-b"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

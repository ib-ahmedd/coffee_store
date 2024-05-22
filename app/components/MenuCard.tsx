import { MenuCardProps } from "@types";
import Image from "next/image";
import React from "react";

function MenuCard({ picNo, price, title }: MenuCardProps) {
  return (
    <article className="flex-1 flex flex-col items-center border-b p-4 text-center md:border-b-0 md:border-r border-[#999]">
      <div
        className="flex flex-col items-center text-center"
        data-aos="fade-left"
      >
        <img
          src={`/images/home/menu/product-${picNo}-img.png`}
          alt="Coffee cup"
          className="object-contain"
        />
        <p className="text-sm text-text-green">${price.toFixed(2)}</p>
        <h4 className="font-yeseva text-2xl text-orange my-4">{title}</h4>
        <p className="font-monteserat text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
      </div>
    </article>
  );
}

export default MenuCard;

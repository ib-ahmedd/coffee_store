import { MenuCardProps } from "@types";
import Image from "next/image";

function MenuCard({ picNo, price, title, desc }: MenuCardProps) {
  return (
    <article className="flex flex-col text-center items-center w-full py-8 border-t border-[#dbd6d2] md:w-[48%] md:flex-row">
      <div className="w-14 h-14 relative">
        <Image
          src={`/images/menu/menu/product-img-${picNo}.jpg`}
          alt={`${title} image`}
          fill
          className="object-contain rounded-full"
        />
      </div>
      <div>
        <h2 className="font-yeseva text-orange text-2xl">{title}</h2>
        <p className="text-semi-black">{desc}</p>
      </div>
      <p className="font-yeseva text-2xl text-text-green flex-1 text-right">
        ${price.toFixed(1)}
      </p>
    </article>
  );
}

export default MenuCard;

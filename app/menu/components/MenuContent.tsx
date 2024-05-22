import { menuPageMenuArray } from "@constants";
import MenuCard from "./MenuCard";

function MenuContent() {
  return (
    <section className="flex justify-center w-full bg-peach py-8 md:py-28 xl:py-32">
      <div
        className="flex justify-between flex-wrap w-full px-4 flex-col md:flex-row xl:w-4/5 xl:px-0"
        data-aos="zoom-in"
      >
        {menuPageMenuArray.map((item) => (
          <MenuCard key={item.picNo} {...item} />
        ))}
      </div>
    </section>
  );
}

export default MenuContent;

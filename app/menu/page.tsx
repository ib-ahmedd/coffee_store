import { Buy } from "@app/components";
import { Intro, MenuContent } from "./components";

function Menu() {
  return (
    <main className="w-full">
      <Intro />
      <MenuContent />
      <Buy />
    </main>
  );
}

export default Menu;

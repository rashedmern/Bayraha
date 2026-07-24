import { useState } from "react";
import Container from "../ui/Container";
import Dropdown from "./DropDown";
import { menuData } from "../../data/menuData";

const menuItems = [
  "Desktop",
  "Phones",
  "Laptops",
  "Gadget & Accessories",
  "Appliances",
  "Lifestyle",
  "Camera & Networking",
];

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="w-full border-y border-white/10 bg-black/20 backdrop-blur-xl">
      <Container>
        <div
          className="flex h-[74px] items-center justify-center gap-[76px]"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setActiveMenu(item)}
            >
              <button
                className={`flex h-[44px] items-center justify-center whitespace-nowrap rounded-full px-4 font-outfit text-[20px] font-normal text-white transition-all duration-300 ${
                  activeMenu === item
                    ? "bg-white/10 backdrop-blur-xl"
                    : "hover:bg-white/10 hover:backdrop-blur-xl"
                }`}
              >
                {item}
              </button>

              <Dropdown
                open={activeMenu === item}
                items={menuData[item] || []}
              />
            </div>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default NavMenu;
import { useState } from "react";
import Container from "../ui/Container";
import Dropdown from "./Dropdown";
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
    <nav className="w-full bg-[#171318] py-[20.5px]">
      <Container>
        <div
          className="relative"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Navbar */}
          <div className="flex h-[54px] items-center justify-center gap-[76px] font-['Outfit'] text-[20px] font-normal text-white">
            {menuItems.map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className="group relative text-[20px] font-normal text-white transition-colors duration-300 hover:text-[#D3C096]"
              >
                {item}

                <span
                  className={`absolute left-1/2 bottom-[-8px] h-[2px] bg-white transition-all duration-300 -translate-x-1/2 ${
                    activeMenu === item
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Dropdown */}
          <Dropdown
            open={activeMenu !== null}
            items={menuData[activeMenu] || []}
          />
        </div>
      </Container>
    </nav>
  );
};

export default NavMenu;
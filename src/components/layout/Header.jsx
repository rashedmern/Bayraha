import { useState } from "react";
import {
  User,
  Bot,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import Logo from "../../assets/images/Logo.png";
import Container from "../ui/Container";

const menuItems = [
  "Desktop",
  "Phones",
  "Laptops",
  "Gadget & Accessories",
  "Appliances",
  "Lifestyle",
  "Camera & Networking",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between py-5 lg:py-[28px]">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={Logo}
              alt="Bayraha"
              className="h-9 w-[170px] object-contain sm:h-10 sm:w-[190px] lg:h-[50px] lg:w-[250px]"
            />
          </div>

          {/* Desktop Search */}
          <div className="hidden flex-1 justify-center px-6 lg:ml-[116px] lg:flex lg:shrink-0 lg:px-0">
            <div className="flex h-[70px] w-full max-w-[604px] overflow-hidden rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-xl">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent px-6 text-[20px] text-white outline-none placeholder:text-white/60"
              />

              <button className="flex w-[170px] items-center justify-center rounded-[20px] bg-[#171318] text-[20px] font-semibold text-white transition-colors duration-300 hover:bg-[#2A252B]">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden items-center gap-[4px] lg:ml-[216px] lg:flex">
            {[User, Bot, Heart, ShoppingCart].map((Icon, index) => (
              <button
                key={index}
                className="group flex h-[60px] w-[60px] items-center justify-center rounded-full transition-all duration-300"
              >
                <Icon
                  size={30}
                  strokeWidth={1.8}
                  className="h-[35px] w-[30px] text-white transition-all duration-300 group-hover:scale-110 group-hover:text-[#8B7355]"
                />
              </button>
            ))}
          </div>

          {/* Mobile Right Side */}
     <div className="flex items-center gap-2 lg:hidden">
  <button className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white">
    <Heart
      size={22}
      className="text-white transition-all duration-300 group-hover:text-[#171318]"
    />
  </button>

  <button className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white">
    <ShoppingCart
      size={22}
      className="text-white transition-all duration-300 group-hover:text-[#171318]"
    />
  </button>

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white"
  >
    {isOpen ? (
      <X
        size={24}
        className="text-white transition-all duration-300 group-hover:text-[#171318]"
      />
    ) : (
      <Menu
        size={24}
        className="text-white transition-all duration-300 group-hover:text-[#171318]"
      />
    )}
  </button>
</div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="mb-5 rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl lg:hidden">
            {/* Mobile Search */}
            <div className="mb-6 flex h-14 overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent px-4 text-white outline-none placeholder:text-white/60"
              />

              <button className="bg-[#171318] px-5 text-white">
                Search
              </button>
            </div>

            {/* Mobile Menu */}
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  className="rounded-xl px-4 py-3 text-left text-white transition-colors duration-300 hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Icons */}
            <div className="mt-6 flex justify-center gap-3 border-t border-white/10 pt-5">
              {[User, Bot].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                  <Icon size={22} className="text-white" />
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
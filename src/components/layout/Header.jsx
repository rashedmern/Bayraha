import { User, Bot, Heart, ShoppingCart } from "lucide-react";
import Logo from "../../assets/images/Logo.png";
import Container from "../ui/Container";

const Header = () => {
  return (
<header className="w-full bg-transparent">
      <Container>
        <div className="flex items-center py-[28px]">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={Logo}
              alt="Bayraha"
              className="w-[250px] h-[50px] object-contain"
            />
          </div>

          {/* Search */}
          <div className="ml-[116px] shrink-0 hidden md:block">
            <div className="flex h-[70px] w-[604px] overflow-hidden rounded-[20px] border border-white/20 bg-white/10 backdrop-blur-xl">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent px-6 text-[20px] font-normal text-white outline-none placeholder:text-white/60"
              />

              <button className="flex w-[170px] items-center justify-center rounded-[20px] bg-[#171318] text-[20px] font-semibold text-white transition-colors duration-300 hover:bg-[#2A252B]">
                Search
              </button>
            </div>
          </div>

          {/* Icons */}
       <div className="ml-[216px] flex shrink-0 items-center gap-[4px]">
  {[User, Bot, Heart, ShoppingCart].map((Icon, index) => (
    <button
      key={index}
      className="group flex h-[60px] w-[60px] items-center justify-center rounded-full transition-all duration-300"
    >
      <Icon
        size={30}
        strokeWidth={1.8}
        className="h-[35px] w-[30px] text-[#ffffff] transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[#8B7355]"
      />
    </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
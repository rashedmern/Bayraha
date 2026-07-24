const categories = [
  "Headphone",
  "Laptop",
  "Keyboard",
  "Monitor",
  "Gaming Mouse",
  "Accessories",
  "Others",
];

const Navbar = () => {
  return (
    <nav className="bg-[#1A171B]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <ul className="flex h-14 items-center justify-center gap-4 overflow-x-auto whitespace-nowrap md:gap-8 lg:gap-12">
          {categories.map((item) => (
            <li key={item}>
              <button
                className="
                  relative
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#C8BCA3]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#C8BCA3]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import Container from "../ui/Container";
import categories from "../../data/categories";

const FeaturedCategories = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container className="px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="font-onest text-[38px] font-bold leading-tight text-[#171318] sm:text-[48px] lg:text-[56px]">
          Featured <span className="text-[#5B5142]">Categories</span>
        </h2>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-3 md:grid-cols-4 lg:mt-16 lg:grid-cols-6 lg:gap-y-14">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-[72px] object-contain transition-all duration-300 group-hover:scale-110 sm:h-[82px] lg:h-[90px]"
              />

              <h3 className="mt-4 text-center font-outfit text-[15px] font-medium leading-snug text-[#171318] sm:text-[16px] lg:mt-5 lg:text-[18px]">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
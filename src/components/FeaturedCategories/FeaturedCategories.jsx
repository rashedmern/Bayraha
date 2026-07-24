import Container from "../ui/Container";
import categories from "../../data/categories";

const FeaturedCategories = () => {
  return (
    <section className="py-20">
      <Container>
        {/* Heading */}
        <h2 className="font-onest text-[56px] font-bold text-[#171318]">
          Featured <span className="text-[#5B5142]">Categories</span>
        </h2>

        {/* Categories Grid */}
        <div className="mt-16 grid grid-cols-6 gap-y-14">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-[90px] object-contain transition-all duration-300 group-hover:scale-110"
              />

              <h3 className="mt-5 text-center font-outfit text-[18px] font-medium text-[#171318]">
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
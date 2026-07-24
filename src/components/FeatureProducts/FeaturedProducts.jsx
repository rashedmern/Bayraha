import Container from "../ui/Container";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container className="px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="mb-10 flex justify-center lg:mb-14">
          <div className="text-center">
            <h2 className="font-onest text-[32px] font-bold text-[#2D2D2D] sm:text-[40px] lg:text-[48px]">
              Featured Products
            </h2>

            <p className="mt-2 font-dmSans text-[16px] text-[#666666] lg:text-[18px]">
              Get Your Desired Product!
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
import Container from "../ui/Container";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <div className="mb-14 flex justify-center">
          <div className="text-center">
            <h2 className="font-onest text-[48px] font-bold leading-tight text-[#2D2D2D]">
              Featured Products
            </h2>

            <p className="mt-2 font-dmSans text-[18px] text-[#666666]">
              Get Your Desired Product!
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-2xl border border-[#E5E5E5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-xl bg-[#F7F7F7]">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[200px] transition-transform duration-300 group-hover:scale-105"
        />

        {/* Heart */}
        <button
          className="absolute right-4 top-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Heart size={20} />
        </button>

        {/* Add to Cart */}
        <button
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 items-center gap-2 rounded-full bg-[#171318] px-5 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>

      {/* Content */}
      <div className="mt-5">
        <span className="font-dmSans text-sm text-[#7A7A7A]">
          {product.category}
        </span>

        <h3 className="mt-2 font-onest text-xl font-semibold text-[#171318]">
          {product.name}
        </h3>

        <p className="mt-3 font-onest text-2xl font-bold text-[#171318]">
          ৳ {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-xl border border-[#E5E5E5] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-2xl lg:p-5">
      {/* Image */}
      <div className="relative flex h-[120px] items-center justify-center overflow-hidden rounded-lg bg-[#F7F7F7] lg:h-[250px] lg:rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[80px] transition-transform duration-300 group-hover:scale-105 lg:max-h-[200px]"
        />

        {/* Heart */}
        <button className="absolute right-2 top-2 flex h-7 w-7 translate-y-3 items-center justify-center rounded-full bg-white opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:right-4 lg:top-4 lg:h-11 lg:w-11">
          <Heart size={14} className="lg:h-5 lg:w-5" />
        </button>

        {/* Add to Cart */}
        <button className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 translate-y-4 items-center gap-2 rounded-full bg-[#171318] px-5 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>

      {/* Content */}
      <div className="mt-3 lg:mt-5">
        <span className="font-dmSans text-[10px] text-[#7A7A7A] lg:text-sm">
          {product.category}
        </span>

        <h3 className="mt-1 line-clamp-2 font-onest text-[13px] font-semibold leading-tight text-[#171318] lg:mt-2 lg:text-xl">
          {product.name}
        </h3>

        <p className="mt-2 font-onest text-[18px] font-bold text-[#171318] lg:mt-3 lg:text-2xl">
          ৳ {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div
      onClick={() => setShowCart((prev) => !prev)}
      className="group rounded-xl border border-[#E5E5E5] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-2xl lg:p-5"
    >
      {/* Image */}
      <div className="relative flex h-[120px] items-center justify-center overflow-hidden rounded-lg bg-[#F7F7F7] lg:h-[250px] lg:rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[80px] transition-transform duration-300 group-hover:scale-105 lg:max-h-[200px]"
        />

        {/* Heart */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="
            absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full
            bg-white shadow transition-all duration-300
            lg:right-4 lg:top-4 lg:h-11 lg:w-11
            opacity-100
            lg:translate-y-3 lg:opacity-0
            lg:group-hover:translate-y-0 lg:group-hover:opacity-100
          "
        >
          <Heart size={14} className="lg:h-5 lg:w-5" />
        </button>

        {/* Add to Cart */}
        <button
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center
            gap-1.5 rounded-full bg-[#171318]
            min-w-[118px] px-4 py-2
            text-xs font-medium text-white whitespace-nowrap
            transition-all duration-300

            lg:min-w-[170px] lg:gap-2 lg:px-5 lg:py-3 lg:text-sm

            ${
              showCart
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            }

            lg:pointer-events-auto
            lg:translate-y-4
            lg:opacity-0
            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          `}
        >
          <ShoppingCart size={15} className="lg:h-[18px] lg:w-[18px]" />
          <span>Add to Cart</span>
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
import Header from "../layout/Header";
import NavMenu from "../layout/NavMenu";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  CreditCard,
  Headset,
  RefreshCcw,
  Truck,
} from "lucide-react";

import heroVideo from "../../assets/video/hero.mp4";
import Container from "../ui/Container";

const features = [
  {
    icon: CreditCard,
    title: "24 Months EMI",
  },
  {
    icon: Truck,
    title: "Fastest Delivery",
  },
  {
    icon: RefreshCcw,
    title: "Exchange Facilities",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Deals",
  },
  {
    icon: Headset,
    title: "After Sales Service",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Navigation */}
      <div className="absolute left-0 top-0 z-30 w-full">
        <Header />
        <NavMenu />
      </div>

{/* Hero Content */}
<Container className="relative z-10 px-4 sm:px-6 lg:px-0 pt-[120px] sm:pt-[140px] lg:pt-[170px]">
  <div className="flex min-h-[calc(100vh-120px)] items-center py-10 sm:py-12 lg:min-h-[720px] lg:py-0">
    <div className="w-full max-w-[420px] md:max-w-[560px] lg:w-[55%] lg:max-w-none">
      <h1 className="font-onest text-[36px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[48px] md:text-[60px] lg:text-[76px]">
        <span className="block text-white">Everything You</span>

        <span className="block text-white">Need to</span>

        <span className="mt-2 block text-white">Build Better</span>

        <span className="block text-white">Electronics</span>
      </h1>

      <p className="mt-5 max-w-[420px] font-dmSans text-[16px] leading-7 text-white/80 sm:mt-6 sm:max-w-[500px] sm:text-[18px] md:text-[20px] lg:mt-8 lg:max-w-[644px] lg:text-[22px] lg:leading-[34px]">
        Shop premium electronic components, modules, sensors,
        and tools from trusted brands—all in one place.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 lg:mt-12 lg:gap-6">
        <button
          className="
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            rounded-[18px]
            bg-white
            font-outfit
            text-[18px]
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-[3px]
            hover:scale-[1.03]
            hover:bg-white
            hover:text-black
            hover:shadow-[0_10px_35px_rgba(255,255,255,0.30)]
            sm:h-[60px]
            sm:w-[180px]
            sm:text-[20px]
          "
        >
          Explore
        </button>

        <button
          className="
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            rounded-[18px]
            border
            border-white/40
            bg-white/10
            backdrop-blur-md
            font-outfit
            text-[18px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-[2px]
            hover:bg-white
            hover:text-black
            sm:h-[60px]
            sm:w-[180px]
            sm:text-[20px]
          "
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
</Container>

{/* Feature Ticker */}
<div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden bg-white py-3 sm:py-4 lg:py-6">
  <motion.div
    className="flex w-max items-center"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...features, ...features, ...features, ...features].map(
      ({ icon: Icon, title }, index) => (
        <div
          key={index}
          className="flex items-center gap-2 whitespace-nowrap px-4 sm:gap-3 sm:px-6 lg:gap-4 lg:px-10"
        >
          <Icon
            size={18}
            strokeWidth={2}
            className="text-[#171318] sm:size-5 lg:size-7"
          />

          <span className="font-dmSans text-[14px] font-semibold text-[#171318] sm:text-[16px] lg:text-[20px]">
            {title}
          </span>
        </div>
      )
    )}
  </motion.div>
</div>
    </section>
  );
};

export default Hero;
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
<div className="absolute top-0 left-0 z-30 w-full">
  <Header />
  <NavMenu />
</div>

      {/* Hero Content */}
      <Container className="relative z-10 pt-[170px]">
        <div className="flex min-h-[720px] items-center">
          <div className="w-[55%]">
            <h1 className="font-onest text-[76px] font-bold leading-[1.08] tracking-[-0.02em]">
              <span className="block text-white">
                Everything You
              </span>

              <span className="block text-white">
                Need to
              </span>

              <span className="mt-2 block text-white">
                Build Better
              </span>

              <span className="block text-white">
                Electronics
              </span>
            </h1>

            <p className="mt-8 max-w-[644px] font-dmSans text-[22px] leading-[34px] text-white/80">
              Shop premium electronic components, modules, sensors,
              and tools from trusted brands—all in one place.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <button
               className="
  flex
  h-[60px]
  w-[170px]
  items-center
  justify-center
  rounded-[18px]
  bg-white
  font-outfit
  text-[20px]
  font-semibold
  text-black
  transition-all
  duration-300
  hover:-translate-y-[3px]
  hover:scale-[1.03]
  hover:bg-white
  hover:text-black
  hover:shadow-[0_10px_35px_rgba(255,255,255,0.30)]
"
              >
                Explore
              </button>

              <button
                className="
                  flex
                  h-[60px]
                  w-[170px]
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-white/40
                  bg-white/10
                  backdrop-blur-md
                  font-outfit
                  text-[20px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-white
                  hover:text-black
                "
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Feature Ticker */}
      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden bg-white py-6">
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
                className="flex items-center gap-4 whitespace-nowrap px-10"
              >
                <Icon
                  size={28}
                  strokeWidth={2}
                  className="text-[#171318]"
                />

                <span className="font-dmSans text-[20px] font-semibold text-[#171318]">
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
import headphonesPromo from "../../assets/video/headphonespromo.mp4";

const Promo = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={headphonesPromo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-0 lg:py-0">
          <div className="w-full max-w-[420px] md:max-w-[560px] lg:w-[55%] lg:max-w-none">
            <h2 className="font-onest text-[36px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[48px] md:text-[60px] lg:text-[76px]">
              <span className="block text-white">ALL YOU</span>

              <span className="block text-white">NEED IS</span>

              <span className="mt-2 block text-white">HERE</span>
            </h2>

            <p className="mt-5 max-w-[420px] font-dmSans text-[16px] leading-7 text-white/80 sm:mt-6 sm:max-w-[500px] sm:text-[18px] md:text-[20px] lg:mt-8 lg:max-w-[644px] lg:text-[22px] lg:leading-[34px]">
              Experience premium headphones with immersive sound,
              crystal-clear audio, and exceptional comfort for every
              moment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-5 lg:mt-12 lg:gap-6">
              {/* Glass Button */}
              <button
                className="
                  flex
                  h-[56px]
                  w-full
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  font-outfit
                  text-[18px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:border-white/40
                  hover:bg-white
                  hover:text-black
                  hover:shadow-[0_10px_35px_rgba(255,255,255,0.25)]
                  sm:h-[60px]
                  sm:w-[180px]
                  sm:text-[20px]
                "
              >
                Discover Now
              </button>

              {/* Secondary Button */}
              <button
                className="
                  flex
                  h-[56px]
                  w-full
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-white/20
                  bg-transparent
                  font-outfit
                  text-[18px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:backdrop-blur-xl
                  sm:h-[60px]
                  sm:w-[180px]
                  sm:text-[20px]
                "
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
import headphonesPromo from "../../assets/video/headphonespromo.mp4";

const Promo = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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

      {/* Center Content */}
{/* Content */}
<div className="relative z-10">
  <div className="mx-auto flex h-screen w-full max-w-[1440px] items-center">
    <div className="w-[55%]">
     <h2 className="font-onest text-[76px] font-bold leading-[1.08] tracking-[-0.02em]">
  <span className="block text-white">ALL YOU</span>

  <span className="block text-white">NEED IS</span>

  <span className="mt-2 block text-white">HERE</span>
</h2>

      <p className="mt-8 max-w-[644px] font-dmSans text-[22px] leading-[34px] text-white/80">
        Experience premium headphones with immersive sound,
        crystal-clear audio, and exceptional comfort for
        every moment.
      </p>

      <div className="mt-12 flex items-center gap-6">
        {/* Glass Button */}
        <button
          className="
            flex
            h-[60px]
            w-[180px]
            items-center
            justify-center
            rounded-[18px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            font-outfit
            text-[20px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-[2px]
            hover:border-white/40
            hover:bg-white
            hover:text-black
            hover:shadow-[0_10px_35px_rgba(255,255,255,0.25)]
          "
        >
          Discover Now
        </button>

        {/* Secondary Button */}
        <button
          className="
            flex
            h-[60px]
            w-[180px]
            items-center
            justify-center
            rounded-[18px]
            border
            border-white/20
            bg-transparent
            font-outfit
            text-[20px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-white/10
            hover:backdrop-blur-xl
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
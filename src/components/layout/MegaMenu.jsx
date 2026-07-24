import { AnimatePresence, motion } from "framer-motion";

const MegaMenu = ({ open, data }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 top-full z-50 mt-8 w-[420px] rounded-2xl bg-[#171318] p-8 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-x-16">
            {Object.entries(data).map(([title, brands]) => (
              <div key={title}>
                <h3 className="mb-5 text-lg font-semibold text-white">
                  {title}
                </h3>

                <div className="space-y-4">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      className="block text-left text-[17px] text-[#D9D9D9] transition-colors duration-300 hover:text-[#D3C096]"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
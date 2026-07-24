import { AnimatePresence, motion } from "framer-motion";

const Dropdown = ({ open, items }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute left-1/2 top-full z-[999] mt-4 w-[280px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-black backdrop-blur-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
        >
          <ul className="p-2">
            {items.map((item) => (
              <li
                key={item}
                className="cursor-pointer rounded-xl px-5 py-3 text-[17px] font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
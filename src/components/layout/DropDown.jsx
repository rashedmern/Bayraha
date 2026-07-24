import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ open, items }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
         className="absolute left-0 top-full mt-8 z-50 w-[280px] rounded-none bg-[#171318] shadow-2xl"
        >
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-[18px] text-white transition-colors duration-300 hover:text-[#D3C096]"
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
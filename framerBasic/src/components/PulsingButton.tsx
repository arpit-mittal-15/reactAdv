import { motion } from "motion/react";

const PulsingButton = () => {
  return (
    <motion.button
      className="bg-blue-500 rounded outline-none px-16 py-4 w-[100px] text-white"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
      }}
      transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
    >
      Click Me!
    </motion.button>
  );
};

export default PulsingButton;

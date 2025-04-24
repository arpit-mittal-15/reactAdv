import { motion } from "motion/react";

const Animate = () => {
  return (
    <div>
      <motion.div
        className="box"
        // initial={{ x: 0 }}
        animate={{ x: [0, 30, 15, 60, 100, 200, 100] }}
        transition={{ delay: 2, duration: 5 }}
      />
    </div>
  );
};

export default Animate;

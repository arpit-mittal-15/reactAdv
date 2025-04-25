import { motion } from "motion/react";

const Drag = () => {
  return (
    <div>
      <motion.div
        className="box"
        drag="x"
        dragConstraints={{
          left: -50,
          top: -50,
          right: 50,
          bottom: 50,
        }}
      />
    </div>
  );
};

export default Drag;

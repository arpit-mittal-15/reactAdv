import { motion } from "motion/react";

const Gesture = () => {
  return (
    <div>
      {/* // <motion.div
      //   className="box"
      //   whileHover={{ scale: 1.2, rotate: 10 }}
      //   transition={{ type: "spring", stiffness: 300 }}
      // /> */}
      <motion.div
        className="box"
        whileTap={{ scale: 0.8, backgroundColor: "red" }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
  );
};

export default Gesture;

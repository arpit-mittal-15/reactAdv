import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[100vh] pb-[20px]">
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{
          width: lineWidth,
          transition: "width 0.1s ease",
        }}
      />

      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
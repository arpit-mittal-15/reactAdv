import { motion } from "motion/react";

// const parentVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const childVariants = ;

const words = ["hey,", "I", "am", "a", "web", "developer"];

const Stagger = () => {
  return (
    // <motion.div variants={parentVariants} initial="hidden" animate="visible">
    //   {[...Array(5)].map((_, index) => (
    //     <motion.div
    //       className="box mt-[2rem]"
    //       key={index}
    //       variants={childVariants}
    //     />
    //   ))}
    // </motion.div>
    <div className="h-[200px] bg-red-600 w-[600px] flex text-3xl">
      {words.map((word, index) => (
        <>
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: .5, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate='visible'
            transition={{delay: index*0.1, type:"spring", stiffness: 200}}
          >
            {word}
          </motion.div>
          <span>&nbsp;</span>
        </>
      ))}
    </div>
  );
};

export default Stagger;

import { useState } from "react";
import { motion } from "motion/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>
      <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-700
         text-white p-4`}
        initial={{ x: "-100%" }}
        animate={{ x: !isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>Content goes here!</p>
      </motion.div>
    </div>
  );
};

export default Sidebar;
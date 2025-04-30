import { motion } from "motion/react";
import { useState } from "react";

interface Acc {
  title: string;
  content: string;
}

const Accordian = () => {
  const [toggleIndex, setToggleIndex] = useState<number | null>(null);

  const data: Acc[] = [
    { title: "this is accordian 1", content: "content for accordian 1" },
    { title: "this is accordian 2", content: "content for accordian 2" },
    { title: "this is accordian 3", content: "content for accordian 3" },
    { title: "this is accordian 4", content: "content for accordian 4" },
  ];

  const handleClick = (i: number) => {
    setToggleIndex(toggleIndex === i ? null : i);
  };

  return (
    <div>
      {data.map((d, i) => (
        <>
          <div
            className="m-2 px-4 py-2 bg-white text-black"
            key={i}
            onClick={() => handleClick(i)}
          >
            {d.title}
          </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: toggleIndex === i ? "auto" : 0 }}
              exit={{height:0}}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-gray-200 rounded">{d.content}</div>
            </motion.div>
        </>
      ))}
    </div>
  );
};

export default Accordian;

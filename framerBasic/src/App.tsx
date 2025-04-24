import { motion } from "motion/react";
import Animate from "./components/animate";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";

const App = () => {
  return (
    <div>
      {/* <Animate/> */}
      {/* <PulsingButton /> */}
      <BouncingLoader />
    </div>
  );
};

export default App;

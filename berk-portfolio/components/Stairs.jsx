"use client";

import { motion } from "motion/react";

// Variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reversed index for staggered delay
const reverseIndex = (index) =>{
    const totalSteps = 6; //number of steps
    return totalSteps - index- 1;
};

const Stairs = () => {
   // Number of steps

  return (
    <>
      {/* Render 6 motion divs, each representing a step of the stairs */}
      {[...Array(6)].map((_, index) => {
        return(
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-[#EEEEEE] relative"
            />
        );
    })}
    </>
  );
};

export default Stairs;

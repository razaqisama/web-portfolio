"use client";

import { AnimationProps, motion } from "framer-motion";
import { FadeInProps } from "./types";

function FadeInWrapper({ children, delay = 0 }: FadeInProps) {
  const animations: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay },
  };

  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      transition={animations.transition}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWrapper;

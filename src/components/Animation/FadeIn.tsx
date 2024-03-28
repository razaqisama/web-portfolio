"use client";

import { AnimationProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

function FadeInWrapper({ className, children, delay = 0 }: FadeInProps) {
  const animations: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay },
  };

  return (
    <motion.div
      className={className}
      initial={animations.initial}
      animate={animations.animate}
      transition={animations.transition}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWrapper;

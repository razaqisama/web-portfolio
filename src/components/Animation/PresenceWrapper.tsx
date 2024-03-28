"use client";

import { motion, AnimatePresence, AnimationProps } from "framer-motion";
import { ReactNode } from "react";

interface PresenceWrapperProps {
  children?: ReactNode;
  className?: string;
  isVisible?: boolean;
  animation: AnimationProps;
}

function PresenceWrapper({
  className,
  children,
  isVisible = false,
  animation,
}: PresenceWrapperProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          variants={animation.variants}
          transition={animation.transition}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PresenceWrapper;

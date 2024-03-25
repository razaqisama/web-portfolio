"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ProfessionTitle() {
  const [index, setIntex] = useState(0);

  const texts = [
    "Razaqisama",
    "Software Engineer",
    "Actor",
    "Director",
    "Playwright",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIntex((index + 1) % (texts.length - 1));
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, texts.length]);

  return (
    <div className="relative overflow-hidden min-w-[320px] max-w-[320px] min-h-[36px] max-h-[36px] bg-black-primary px-4">
      {texts.map((item, i) => {
        return (
          <AnimatePresence key={item}>
            {index === i && (
              <motion.div
                className="absolute top-0 left-0 w-full h-full min-h-[36px] max-h-[36px]"
                initial={{ transform: "translateX(100%)" }}
                animate={{ transform: "translateX(0)" }}
                exit={{ transform: "translateX(-100%)" }}
              >
                <motion.h2 className="w-full text-center text-3xl font-bold text-brand-primary">
                  {item}
                </motion.h2>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
}

export default ProfessionTitle;

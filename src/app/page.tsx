import { PresenceWrapper } from "@/components";
import { AnimationProps } from "framer-motion";

export default function Home() {
  const animation: AnimationProps = {
    initial: { translateY: "100px" },
    animate: { opacity: 1, translateY: 0 },
    exit: { translateY: "-200px" },
  };

  return (
    <main className="relative bg-black-primary text-white-primary">
      <PresenceWrapper className="absolute" animation={animation}>
        <div>Page A</div>
      </PresenceWrapper>
    </main>
  );
}

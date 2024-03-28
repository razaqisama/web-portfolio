import { ReactNode } from "react";

type SizeVariants = "s" | "m" | "l" | "xl";

interface LabelProps {
  children?: ReactNode;
  className?: string;
  size?: "s" | "m" | "l" | "xl";
}

function Label({ children, className, size }: LabelProps) {
  const sizeClasses: { [key in SizeVariants]: string } = {
    s: "text-xs px-4 py-[2px]",
    m: "text-sm px-4 py-1",
    l: "text-lg px-6 py-1",
    xl: "text-xl px-6 py-1",
  };

  const renderSize = sizeClasses[size ?? "m"];

  return (
    <div
      className={`${renderSize} border border-white-primary rounded-full ${className}`}
    >
      {children}
    </div>
  );
}

export default Label;

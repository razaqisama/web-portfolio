import { ReactNode } from "react";

export interface AnimationWrapperProps {
  children?: ReactNode;
  className?: string;
}

export interface FadeInProps extends AnimationWrapperProps {
  delay?: number;
}

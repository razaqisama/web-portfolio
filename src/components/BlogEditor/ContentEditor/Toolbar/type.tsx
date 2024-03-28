import { ReactNode } from "react";

export interface ToolbarButtonType<T> {
  type: T;
  icon: ReactNode;
}

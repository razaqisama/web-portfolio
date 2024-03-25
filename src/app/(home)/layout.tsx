import { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default HomeLayout;

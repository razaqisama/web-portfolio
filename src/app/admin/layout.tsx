import { ReactNode } from "react";
import { AppProviders } from "@/components";

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AppProviders>
      <main className="w-dvw h-dvh p-4 lg:p-8 flex justify-center items-center">
        {children}
      </main>
    </AppProviders>
  );
}

import type { Metadata } from "next";
import { ReactNode } from "react";
import { AppProviders, ProfessionTitle } from "@/components";
import FadeInWrapper from "@/components/Animation/FadeIn";

export const metadata: Metadata = {
  title: "Razaqisama - Web Portfolio",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AppProviders>
      <main className="p-4 lg:p-8 xl:p-12 flex justify-center items-center w-dvw h-dvh">
        <div className="relative flex flex-col justify-center items-center w-full h-full border border-white-primary">
          {children}
          <div className="hidden lg:inline absolute top-0 right-10 text-end transform -translate-y-5">
            <ProfessionTitle />
          </div>
          <div className="hidden lg:inline absolute bottom-0 left-10 text-end transform translate-y-4 px-4 bg-black-primary">
            <FadeInWrapper>
              <h2 className="text-3xl font-bold text-brand-primary">2024</h2>
            </FadeInWrapper>
          </div>
        </div>
      </main>
    </AppProviders>
  );
}

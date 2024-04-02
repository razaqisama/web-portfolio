import type { Metadata } from "next";
import { ReactNode } from "react";
import { AppProviders } from "@/components";
import { getSession } from "@/lib/auth/getSession";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Razaqisama - Sign In",
  description: "Welcome to my Portfolio!",
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <AppProviders>
      <main className="w-dvw h-dvh p-4 lg:p-8 flex justify-center items-center">
        {children}
      </main>
    </AppProviders>
  );
}

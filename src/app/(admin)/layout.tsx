import { ReactNode } from "react";
import { AppProviders, RouteGuards } from "@/components";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AppProviders>
      <RouteGuards className="w-dvw h-dvh p-4 lg:p-8 flex justify-center items-center">
        {children}
      </RouteGuards>
    </AppProviders>
  );
}

"use server";

import { getSession } from "@/lib/auth/getSession";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface RouteGuardsProps {
  children: ReactNode;
  className?: string;
}

async function RouteGuards({ children, className }: RouteGuardsProps) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/signin");
  }

  return <main className={className}>{children}</main>;
}

export default RouteGuards;

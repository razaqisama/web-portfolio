import {
  FaceSmileIcon,
  FolderIcon,
  PencilSquareIcon,
  SignOutIcon,
  UserIcon,
} from "@/icons";
import { logout } from "@/lib/auth";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

async function DashboardLayout({ children }: DashboardLayoutProps) {
  const menus = [
    {
      label: "Write",
      href: "/write",
      icon: <PencilSquareIcon className="w-6 h-6" />,
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: <UserIcon strokeWidth={2} className="w-6 h-6" />,
    },
    {
      label: "Activity",
      href: "/dashboard/activity",
      icon: <FaceSmileIcon strokeWidth={2} />,
    },
    {
      label: "Media",
      href: "/dashboard/media",
      icon: <FolderIcon strokeWidth={2} />,
    },
  ];

  return (
    <div className="w-full h-full flex border py-8">
      <div className="w-[240px] flex flex-col justify-between border-r px-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-brand-primary">Dashboard</h1>
          <div className="flex flex-col gap-4">
            {menus.map((item) => {
              return (
                <Link
                  className="flex flex-row gap-2 items-center hover:pl-2 hover:text-brand-primary transition-[padding-left,color] ease-in-out duration-300"
                  key={item.href}
                  href={item.href}
                >
                  <div className="min-w-8">{item.icon}</div>
                  <span className="text-lg">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <form action={logout}>
          <button className="flex flex-row gap-2 items-center" type="submit">
            <div className="min-w-8">
              <SignOutIcon />
            </div>
            <span className="text-lg">Sign Out</span>
          </button>
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="w-full h-full px-4">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;

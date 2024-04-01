import { getSession } from "@/lib/auth/getSession";
import { redirect } from "next/navigation";

async function AdminPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="flex justify-center items-center">
      <div>Dashboard</div>
    </div>
  );
}

export default AdminPage;

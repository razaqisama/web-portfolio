import { getSession } from "@/lib/auth/getSession";
import { redirect } from "next/navigation";
import SignInForm from "./SignInform";

async function SignInPage() {
  const session = await getSession();

  if (session?.user) {
    redirect("/admin");
  }

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 flex flex-col gap-2 items-center border border-brand-primary">
        <p className="font-bold">Please Sign In</p>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;

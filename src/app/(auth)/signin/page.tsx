import SignInForm from "./SignInform";

async function SignInPage() {
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

"use client";

import { Input, Loader } from "@/components";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { control, getValues } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formAction = useCallback(async () => {
    setIsLoading(true);

    const response = await login({
      username: getValues("username"),
      password: getValues("password"),
    });

    if (response.data) {
      toast.success("Berhasil Login");
      router.push("/admin");
    } else {
      toast.error(response.message);
    }

    setIsLoading(false);
  }, [getValues, router]);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <Controller
        control={control}
        name="username"
        render={({ field }) => {
          return (
            <Input
              name={field.name}
              onChange={field.onChange}
              value={field.value}
              placeholder="Username"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => {
          return (
            <Input
              name={field.name}
              onChange={field.onChange}
              value={field.value}
              placeholder="Password"
              type="password"
            />
          );
        }}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="bg-brand-primary mt-2 flex justify-center items-center"
      >
        {isLoading ? <Loader className="w-6" /> : "Sign In"}
      </button>
    </form>
  );
}

export default SignInForm;

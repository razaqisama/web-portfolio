"use client";

import { Input, Loader } from "@/components";
import { register } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

function RegisterPage() {
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

    const response = await register({
      username: getValues("username"),
      password: getValues("password"),
    });

    if (response.data) {
      toast.success("Berhasil menambahkan akun baru");
      router.push("/signin");
    } else {
      toast.error(response.message);
    }

    setIsLoading(false);
  }, [getValues, router]);

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 flex flex-col gap-2 items-center border border-brand-primary">
        <p className="font-bold">Register</p>
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
      </div>
    </div>
  );
}

export default RegisterPage;

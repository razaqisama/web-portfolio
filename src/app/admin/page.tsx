"use client";

import { Input } from "@/components";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

function AdminPage() {
  const { control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const formAction = useCallback(() => {
    // TODO: Handle Sign In Actions;
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 flex flex-col gap-2 items-center border border-brand-primary">
        <p className="font-bold">Please Sign In</p>
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
          <button type="submit" className="bg-brand-primary mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;

"use client";

import { Input } from "@/components";
import { createActivity } from "@/lib/activities";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormActivityState {
  title: string;
  date: string;
  linkTo: string;
}

interface FormActivityProps {
  onClose: () => void;
}

function FormActivity({ onClose }: FormActivityProps) {
  const formFields = [
    {
      label: "Title",
      formName: "title",
      formType: "text",
    },
    {
      label: "Date",
      formName: "date",
      formType: "date",
    },
    {
      label: "Link",
      formName: "linkTo",
      formType: "text",
    },
  ];

  const { control, getValues } = useForm<FormActivityState>({
    defaultValues: {
      title: "",
      date: "",
      linkTo: "",
    },
  });

  const formActions = useCallback(async () => {
    const activityPayload = {
      title: getValues("title"),
      date: getValues("date"),
      linkTo: getValues("linkTo"),
    };

    const response = await createActivity(activityPayload);

    if (response.data) {
      toast.success(response.message);
      onClose();
    } else {
      toast.error(response.message);
    }
  }, [getValues, onClose]);

  return (
    <form
      action={formActions}
      className="flex flex-col gap-4 bg-black-primary px-4 pt-4 pb-6 rounded-md border border-brand-primary min-w-[640px]"
    >
      <h1 className="flex justify-center items-center text-2xl">
        Form Activity
      </h1>
      <div className="flex flex-col">
        {formFields.map((item) => {
          return (
            <div key={item.formName} className="flex flex-row items-end gap-2">
              <div className="flex flex-row justify-between min-w-48">
                <span className="text-xl">{item.label}</span>
                <p className="text-xl">:</p>
              </div>
              <Controller
                name={item.formName as keyof FormActivityState}
                control={control}
                render={({ field }) => (
                  <Input
                    className="w-full"
                    name={field.name}
                    onChange={field.onChange}
                    value={field.value}
                    type={item.formType}
                  />
                )}
              />
            </div>
          );
        })}
      </div>
      <button className="bg-brand-primary rounded-full px-4" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormActivity;

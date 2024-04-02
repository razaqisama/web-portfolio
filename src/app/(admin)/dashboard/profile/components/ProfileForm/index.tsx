"use client";

import { Input } from "@/components";
import { Controller, useForm } from "react-hook-form";

interface ProfileDefaultState {
  name: string;
  birthDate: string;
  profession: string;
  passion: string;
  vision: string;
}

interface ProfileFormProps {
  defaultState?: ProfileDefaultState;
}

function ProfileForm({ defaultState }: ProfileFormProps) {
  const formFields = [
    {
      label: "Nama",
      formName: "name",
      formType: "text",
    },
    {
      label: "Tanggal Lahir",
      formName: "birthDate",
      formType: "date",
    },
    {
      label: "Profesi",
      formName: "profession",
      formType: "text",
    },
    {
      label: "Passion",
      formName: "passion",
      formType: "text",
    },
    {
      label: "Visi",
      formName: "vision",
      formType: "text",
    },
  ];

  const { control } = useForm<ProfileDefaultState>({
    defaultValues: defaultState,
  });

  return (
    <form className="flex flex-col gap-4 border-b pb-4">
      {formFields.map((item) => {
        return (
          <div key={item.formName} className="flex flex-row items-end gap-2">
            <div className="flex flex-row justify-between min-w-48">
              <span className="text-xl">{item.label}</span>
              <p className="text-xl">:</p>
            </div>
            <Controller
              name={item.formName as keyof ProfileDefaultState}
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
      <div className="flex justify-end">
        <button
          className="bg-brand-primary px-4 py-2 rounded-full"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;

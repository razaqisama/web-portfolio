"use client";

import { Input } from "@/components";
import { uploadMedia } from "@/lib/media";
import { ChangeEvent, useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormUploadMediaState {
  name: string;
}

interface FormUploadMediaProps {
  onClose: () => void;
}

function FormUploadMedia({ onClose }: FormUploadMediaProps) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const { control, getValues } = useForm<FormUploadMediaState>({
    defaultValues: {
      name: "",
    },
  });

  const onChangeFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const filePayload = e.currentTarget?.files?.[0];
    if (filePayload) {
      setFile(filePayload);
    }
  }, []);

  const formActions = useCallback(async () => {
    if (file) {
      const form = new FormData();
      form.set("name", getValues("name"));
      form.set("file", file);
      form.set("contentType", "image");

      const response = await uploadMedia(form);

      if (response.data) {
        toast.success(response.message);
        onClose();
      } else {
        toast.error(response.message);
      }
    }
  }, [file, getValues, onClose]);

  return (
    <form
      action={formActions}
      className="flex flex-col gap-4 bg-black-primary px-4 pt-4 pb-6 rounded-md border border-brand-primary max-w-[460px]"
    >
      <h1 className="flex justify-center items-center text-2xl">Form Upload</h1>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row justify-between min-w-36">
            <span>Nama File</span>
            <p>:</p>
          </div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                className="w-full"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
                type="text"
              />
            )}
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row justify-between min-w-36">
            <span>File</span>
            <p>:</p>
          </div>
          <input
            className="w-full border-b py-2 border-brand-primary"
            name="file"
            onChange={onChangeFile}
            type="file"
          />
        </div>
      </div>
      <button className="bg-brand-primary rounded-full px-4" type="submit">
        Upload
      </button>
    </form>
  );
}

export default FormUploadMedia;

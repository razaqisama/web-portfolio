"use client";

// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Controller, useForm } from "react-hook-form";
import { ChangeEvent, useCallback } from "react";
import Input from "../../Input";

interface ModalSaveContentProps {
  onCloseModal: () => void;
}

function ModalSaveContent({ onCloseModal }: ModalSaveContentProps) {
  // const [editor] = useLexicalComposerContext();
  // const stringEditor = JSON.stringify(editor.getEditorState()); used for saving to the services.

  const {
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      subtitle: "",
      slug: "",
    },
  });

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setValue("title", value);
      setValue(
        "slug",
        value
          .toLowerCase() // Convert the input string to lowercase
          .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
          .replace(/\s+(?=\S)/g, "-") // Replace spaces with dashes if followed by a non-space character
          .replace(/--+/g, "-") // Replace consecutive dashes with a single dash
          .trim(),
      );
    },
    [setValue],
  );

  const onChangeSlug = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setValue(
        "slug",
        value
          .toLowerCase() // Convert the input string to lowercase
          .replace(/[^\w\s-]/g, "") // Remove non-word characters (excluding spaces and dashes)
          .replace(/\s+/g, "-") // Replace spaces with dashes
          .replace(/--+/g, "-") // Replace consecutive dashes with a single dash
          .trim(),
      );
    },
    [setValue],
  );

  return (
    <div className="flex flex-col gap-2 border border-brand-primary min-w-[320px] items-center py-4 w-full">
      <h1 className="text-4xl text-center">Publih Your Content</h1>
      <form className="w-full flex flex-col gap-4 px-4">
        <Controller
          name="title"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Title is required.",
            },
          }}
          render={({ field }) => (
            <Input
              className="w-full"
              name={field.name}
              value={field.value}
              onChange={onChangeTitle}
              ref={field.ref}
              errorMessage={errors.title?.message}
              placeholder="Judul"
            />
          )}
        />
        <Controller
          name="subtitle"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Subtitle is required.",
            },
          }}
          render={({ field }) => (
            <Input
              className="w-full"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              ref={field.ref}
              errorMessage={errors.title?.message}
              placeholder="Deskripsi"
            />
          )}
        />
        <Controller
          name="slug"
          control={control}
          rules={{
            required: {
              value: true,
              message: "slug is required.",
            },
          }}
          render={({ field }) => (
            <Input
              className="w-full"
              name={field.name}
              value={field.value}
              onChange={onChangeSlug}
              ref={field.ref}
              errorMessage={errors.title?.message}
              placeholder="Slug"
            />
          )}
        />
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="border border-black-primary bg-brand-primary rounded-full py-2"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={onCloseModal}
            className="border border-brand-primary rounded-full py-2"
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalSaveContent;

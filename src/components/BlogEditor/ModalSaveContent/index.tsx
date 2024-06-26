"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Controller, useForm } from "react-hook-form";
import { ChangeEvent, useCallback, useEffect } from "react";
import { createArticle } from "@/lib/articles";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import Input from "../../Input";

interface ModalSaveContentProps {
  onCloseModal: () => void;
  status: "published" | "draft";
}

function ModalSaveContent({ onCloseModal, status }: ModalSaveContentProps) {
  const router = useRouter();
  const [editor] = useLexicalComposerContext();

  const {
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      slug: "",
    },
  });

  const changeTitleAndSlug = useCallback(
    (value: string) => {
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

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      changeTitleAndSlug(value);
    },
    [changeTitleAndSlug],
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

  const formActions = useCallback(async () => {
    const content = JSON.stringify(editor.getEditorState());
    const currentDate = dayjs().format("D MMMM YYYY");

    const payload = {
      title: getValues("title"),
      description: getValues("description"),
      slug: getValues("slug"),
      content,
      status,
      publishedAt: status === "published" ? currentDate : "",
    };

    const response = await createArticle(payload);

    if (response.data) {
      router.push(`/blog/${response.data.slug}`);
    } else {
      toast.error(response.message);
    }
  }, [editor, getValues, router, status]);

  useEffect(() => {
    const rootElement = editor.getRootElement();

    if (rootElement) {
      const defaultTitle =
        rootElement.getElementsByTagName("h1").item(0)?.innerText ?? "";

      changeTitleAndSlug(defaultTitle);
    }
  }, [changeTitleAndSlug, editor]);

  return (
    <div className="flex flex-col gap-2 bg-black-primary border border-brand-primary min-w-[320px] items-center py-4 w-full">
      <h1 className="text-4xl text-center">
        {status === "published" ? "Publish" : "Save"} Your Content
      </h1>
      <form action={formActions} className="w-full flex flex-col gap-4 px-4">
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
          name="description"
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
            {status === "published" ? "Publish" : "Save To Draft"}
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

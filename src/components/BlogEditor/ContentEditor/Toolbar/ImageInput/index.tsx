import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InsertImagePayload } from "../../plugins/ImagePlugin";

interface ImageInputProps {
  insertImage: (payload: InsertImagePayload) => void;
}

interface InputForm {
  src: string;
  altText: string;
}

function ImageInput({ insertImage }: ImageInputProps) {
  const [filename, setFilename] = useState("Choose from device");
  const { control, handleSubmit, setValue } = useForm<InputForm>({
    mode: "onBlur",
    defaultValues: {
      src: "",
      altText: "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setFilename(file.name);
      setValue("src", url);
    }
  };

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onSubmit = useCallback(
    (data: InputForm) => {
      insertImage({
        altText: data.altText,
        src: data.src,
      });
    },
    [insertImage],
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-2 min-w-[320px] border-2 border-primary-black bg-main-bg px-4 py-2 pb-4"
    >
      <p>Insert an Image</p>
      <button
        onClick={handleClick}
        type="button"
        className="px-2 border-2 rounded-full border-primary-choco min-w-[240px] w-full"
      >
        {filename}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default file input
        accept="image/*" // Accept only image files
      />
      <div className="px-2 border-2 rounded-full border-primary-choco min-w-[240px] w-full">
        <Controller
          name="src"
          control={control}
          render={({ field }) => (
            <input
              name={field.name}
              onChange={field.onChange}
              className="w-full bg-transparent outline-none"
              placeholder="Insert URL"
            />
          )}
        />
      </div>
      <div className="px-2 border-2 rounded-full border-primary-choco min-w-[240px] w-full">
        <Controller
          name="altText"
          control={control}
          render={({ field }) => (
            <input
              name={field.name}
              onChange={field.onChange}
              className="w-full bg-transparent outline-none"
              placeholder="Insert image caption"
            />
          )}
        />
      </div>
      <button
        className="w-full px-8 text-sm border-2 border-primary-choco bg-primary-choco rounded-full font-bold text-primary-cream uppercase"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ImageInput;

"use client";

import { RectStackIcon, TrashIcon } from "@/icons";
import { deleteMedia } from "@/lib/media";
import { useCallback } from "react";
import { toast } from "react-toastify";

interface RemoveButtonProps {
  id: string;
  url: string;
}

function RemoveButton({ id, url }: RemoveButtonProps) {
  const handleRemoveImage = useCallback(async () => {
    const deletedMedia = await deleteMedia(id);
    if (deletedMedia.data?.deletedId) {
      toast.success(deletedMedia.message);
    } else {
      toast.error(deletedMedia.message);
    }
  }, [id]);

  const handleCopyUrlImage = useCallback(() => {
    navigator.clipboard.writeText(url);
    toast.success("URL Image telah di salin ke clipboard");
  }, [url]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center bg-black-primary bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out backdrop-blur-sm">
      <button type="button" onClick={handleCopyUrlImage}>
        <RectStackIcon size={48} />
      </button>
      <button type="button" onClick={handleRemoveImage}>
        <TrashIcon size={48} />
      </button>
    </div>
  );
}

export default RemoveButton;

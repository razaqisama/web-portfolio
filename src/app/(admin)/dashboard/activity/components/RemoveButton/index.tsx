"use client";

import { TrashIcon } from "@/icons";
import { deleteActivity } from "@/lib/activities";
import { useCallback } from "react";
import { toast } from "react-toastify";

interface RemoveButtonProps {
  id: string;
}

function RemoveButton({ id }: RemoveButtonProps) {
  const handleRemoveImage = useCallback(async () => {
    const deletedMedia = await deleteActivity(id);
    if (deletedMedia.data?.deletedId) {
      toast.success(deletedMedia.message);
    } else {
      toast.error(deletedMedia.message);
    }
  }, [id]);

  return (
    <button type="button" onClick={handleRemoveImage}>
      <TrashIcon size={24} />
    </button>
  );
}

export default RemoveButton;

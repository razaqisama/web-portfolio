"use client";

import { Modal } from "@/components";
import { DocumentPlusIcon } from "@/icons";
import { useCallback, useState } from "react";
import FormUploadMedia from "../FormUpload";

function UploadMediaButton() {
  const [showModalForm, setShowModalForm] = useState(false);

  const handleShowModalForm = useCallback(
    (value: boolean) => () => {
      setShowModalForm(value);
    },
    [],
  );

  return (
    <div>
      <button
        type="button"
        className="flex flex-row items-center gap-2 bg-brand-primary px-4 py-2 rounded-full"
        onClick={handleShowModalForm(true)}
      >
        <DocumentPlusIcon strokeWidth={2} size={20} />
        <span>Upload File</span>
      </button>
      <Modal show={showModalForm} onClose={handleShowModalForm(false)}>
        <FormUploadMedia onClose={handleShowModalForm(false)} />
      </Modal>
    </div>
  );
}

export default UploadMediaButton;

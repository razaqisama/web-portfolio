"use client";

import { Modal } from "@/components";
import { FaceSmileIcon } from "@/icons";
import { useCallback, useState } from "react";
import FormActivity from "../FormActivity";

function NewActivityButton() {
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
        <FaceSmileIcon strokeWidth={2} size={20} />
        <span>New Activity</span>
      </button>
      <Modal show={showModalForm} onClose={handleShowModalForm(false)}>
        <FormActivity onClose={handleShowModalForm(false)} />
      </Modal>
    </div>
  );
}

export default NewActivityButton;

"use client";

/* eslint-disable no-console */

import { useCallback, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import Modal from "../Modal";
import { theme } from "./ContentEditor/theme";
import { nodes } from "./ContentEditor/nodes";
import ModalSaveContent from "./ModalSaveContent";
import Plugins from "./ContentEditor/plugins";
import Toolbar from "./ContentEditor/Toolbar";

function onError(error: Error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    // editorState: JSON.stringify({}),
    namespace: "Content Writer",
    nodes,
    theme,
    onError,
  };

  const [showPreview, setShowPreview] = useState(false);

  const hanldeShowPreview = useCallback(
    (value: boolean) => () => {
      setShowPreview(value);
    },
    [],
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="flex flex-col gap-2">
        <div className="sticky top-0 left-0 w-full bg-main-bg z-[10]">
          <div className="flex flex-row items-center justify-between py-2 border-b-2 border-white-primary">
            <Link href="/blog">
              <ChevronLeftIcon size={24} strokeWidth={2} />
            </Link>
            <button
              className="px-8 py-1 text-sm border border-brand-primary text-brand-primary bg-primary-choco rounded-full font-bold text-primary-cream uppercase"
              type="button"
              onClick={hanldeShowPreview(true)}
            >
              Publish
            </button>
          </div>
        </div>
        <div className="border-t-2 border-white-primary py-2 pb-16">
          <div className="relative">
            <RichTextPlugin
              contentEditable={<ContentEditable className="outline-none" />}
              placeholder={
                <span className="absolute top-0 left-0 select-none z-[-1]">
                  Enter some text...
                </span>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <Plugins />
          </div>
          <Toolbar />
        </div>
      </div>
      <Modal
        className="lg:w-1/2"
        show={showPreview}
        onClose={hanldeShowPreview(false)}
      >
        <ModalSaveContent onCloseModal={hanldeShowPreview(false)} />
      </Modal>
    </LexicalComposer>
  );
}

export default Editor;

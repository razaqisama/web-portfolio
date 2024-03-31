"use client";

/* eslint-disable no-console */

import { useCallback, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorState } from "lexical";
import Modal from "../Modal";
import { theme } from "./ContentEditor/theme";
import { nodes } from "./ContentEditor/nodes";
import ModalSaveContent from "./ModalSaveContent";
import Plugins from "./ContentEditor/plugins";
import Toolbar from "./ContentEditor/Toolbar";

function onError(error: Error) {
  console.error(error);
}

interface EditorProps {
  initialState?: EditorState;
  editable?: boolean;
}

const defaultEditorState = `{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`;

function BlogEditor({ initialState, editable = true }: EditorProps) {
  const initialConfig = {
    editorState: JSON.stringify(initialState) ?? defaultEditorState,
    editable,
    namespace: "Content Writer",
    nodes,
    theme,
    onError,
  };

  const [showPreview, setShowPreview] = useState(false);
  const [status, setStatus] = useState<"published" | "draft">("published");

  const hanldeShowPreview = useCallback(
    (value: boolean, statValue?: "published" | "draft") => () => {
      if (statValue) {
        setStatus(statValue);
      }
      setShowPreview(value);
    },
    [],
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="flex flex-col gap-2">
        <div className="sticky top-0 left-0 w-full bg-black-primary z-[10]">
          <div className="flex flex-row items-center justify-between py-2 border-b-2 border-white-primary">
            <Link href="/blog">
              <ChevronLeftIcon size={24} strokeWidth={2} />
            </Link>
            <div className="flex flex-row gap-2">
              <button
                className="px-8 py-1 text-sm border border-brand-primary text-brand-primary rounded-full font-bold uppercase"
                type="button"
                onClick={hanldeShowPreview(true, "draft")}
              >
                Save
              </button>
              <button
                className="px-8 py-1 text-sm bg-brand-primary text-white-primary rounded-full font-bold uppercase"
                type="button"
                onClick={hanldeShowPreview(true, "published")}
              >
                Publish
              </button>
            </div>
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
        <ModalSaveContent
          status={status}
          onCloseModal={hanldeShowPreview(false)}
        />
      </Modal>
    </LexicalComposer>
  );
}

export default BlogEditor;

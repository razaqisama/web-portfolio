"use client";

/* eslint-disable no-console */

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorState } from "lexical";
import { theme } from "../ContentEditor/theme";
import { nodes } from "../ContentEditor/nodes";

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
    theme,
    nodes,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="outline-none" />}
        placeholder={
          <span className="absolute top-0 left-0 select-none z-[-1]">
            Enter some text...
          </span>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
}

export default BlogEditor;

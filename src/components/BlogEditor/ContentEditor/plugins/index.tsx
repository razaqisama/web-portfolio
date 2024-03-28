import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import AutoFocusPlugin from "./AutoFocusPlugin";
import { HeadingPlugin } from "./HeadingPlugin";
import { AutoLinkPlugin } from "./AutoLinkPlugin";
import { CodeHighlightPlugin } from "./CodeHighlightPlugin";
import ImagesPlugin from "./ImagePlugin";
import ListMaxIndentLevelPlugin from "./ListMaxIndentLevelPlugin";

function Plugins() {
  return (
    <>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <HeadingPlugin />
      <AutoLinkPlugin />
      <LinkPlugin />
      <LexicalClickableLinkPlugin />
      <CodeHighlightPlugin />
      <ImagesPlugin />
      <ListPlugin />
      <ListMaxIndentLevelPlugin maxDepth={4} />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
    </>
  );
}

export default Plugins;

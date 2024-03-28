import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { ListItemNode, ListNode } from "@lexical/list";

import { ImageNode } from "./ImageNode";

export const nodes = [
  HeadingNode,
  LinkNode,
  AutoLinkNode,
  ImageNode,
  CodeNode,
  CodeHighlightNode,
  QuoteNode,
  ListItemNode,
  ListNode,
];

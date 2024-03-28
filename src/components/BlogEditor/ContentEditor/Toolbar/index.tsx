/* eslint-disable react/jsx-props-no-spreading */
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { mergeRegister } from "@lexical/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  $createQuoteNode,
  $isHeadingNode,
  HeadingTagType,
} from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import Modal from "../../../Modal";
import { FORMAT_HEADING_COMMAND } from "../plugins/HeadingPlugin";
import {
  INSERT_IMAGE_COMMAND,
  InsertImagePayload,
} from "../plugins/ImagePlugin";
import { getSelectedNode } from "../utils/getSelectedNode";
import FloatingLinkEditor from "./FloatingLinkEditor";
import ImageInput from "./ImageInput";
import { ToolbarButtonType } from "./type";

const alignments: ToolbarButtonType<ElementFormatType>[] = [
  {
    type: "center",
    icon: "C",
  },
  {
    type: "right",
    icon: "R",
  },
  {
    type: "justify",
    icon: "J",
  },
  {
    type: "left",
    icon: "L",
  },
];

const headings: ToolbarButtonType<HeadingTagType>[] = [
  {
    type: "h1",
    icon: "T",
  },
  {
    type: "h3",
    icon: "t",
  },
  {
    type: "h6",
    icon: "p",
  },
];

function Toolbar() {
  const [editor] = useLexicalComposerContext();

  // ------- Floating Link
  const [isLink, setIsLink] = useState(false);

  // ------- Modal Image
  const [showModalImage, setShowModalImage] = useState(false);

  // ------- TEXT FORMAT
  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);

  const alingmentItem: ToolbarButtonType<ElementFormatType> = useMemo(() => {
    return alignments[alignmentIndex % alignments.length];
  }, [alignmentIndex]);

  const headingItem: ToolbarButtonType<HeadingTagType> = useMemo(() => {
    return headings[headingIndex % headings.length];
  }, [headingIndex]);

  // ------- TEXT HANDLER
  const formatToParagraph = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  }, [editor]);

  const formatToQuote = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  }, [editor]);

  const handleTextCommand = useCallback(
    (formatType: TextFormatType) => () => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
    },
    [editor],
  );

  const handleElementCommand = useCallback(
    (formatType: ElementFormatType) => () => {
      setAlignmentIndex(alignmentIndex + 1);
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, formatType);
    },
    [alignmentIndex, editor],
  );

  const handleHeadingCommand = useCallback(
    (formatType: HeadingTagType) => () => {
      if (formatType === "h6") {
        formatToParagraph();
      } else {
        editor.dispatchCommand(FORMAT_HEADING_COMMAND, formatType);
      }
      setHeadingIndex((headingIndex + 1) % 3);
    },
    [editor, formatToParagraph, headingIndex],
  );

  // ------- LINK HANDLER
  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  // ------- IMAGE HANDLER
  const handleImageCommand = useCallback(
    (payload: InsertImagePayload) => {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
      setShowModalImage(false);
    },
    [editor],
  );

  const handleShowImage = useCallback(
    (value: boolean) => () => {
      setShowModalImage(value);
    },
    [],
  );

  // ------- TOOLBAR HANDLER
  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();

      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        // Update Alignment
        const alignIndex = alignments.findIndex((item) => {
          return item.type === elementDOM.style.textAlign;
        });

        if (alignIndex === -1) {
          setAlignmentIndex(0);
        } else {
          setAlignmentIndex(alignIndex + 1);
        }

        // Update Heading
        const type = $isHeadingNode(element)
          ? element.getTag()
          : element.getType();

        const hIndex = headings.findIndex((item) => {
          return item.type === type;
        });

        if (hIndex === -1) {
          setHeadingIndex(0);
        } else {
          setHeadingIndex(hIndex + 1);
        }
      }

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
    );
  }, [editor, updateToolbar]);

  return (
    <>
      <div className="px-4 fixed bottom-0 left-0 w-full bg-main-bg">
        <div className="flex flex-row gap-2 overflow-scroll border-t-2 border-white-primary">
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button
              type="button"
              onClick={handleElementCommand(alingmentItem.type)}
            >
              {alingmentItem.icon}
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button
              className="italic"
              type="button"
              onClick={handleHeadingCommand(headingItem.type)}
            >
              {headingItem.icon}
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button
              className="font-bold"
              type="button"
              onClick={handleTextCommand("bold")}
            >
              B
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button
              className="italic"
              type="button"
              onClick={handleTextCommand("italic")}
            >
              i
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button className="italic" type="button" onClick={formatToQuote}>
              q
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button className="italic" type="button" onClick={insertLink}>
              li
            </button>
          </div>
          <div className="flex justify-center items-center flex-1 min-w-[38px] min-h-[38px]">
            <button
              className="italic"
              type="button"
              onClick={handleShowImage(true)}
            >
              img
            </button>
          </div>
          {isLink && <FloatingLinkEditor editor={editor} isLink={isLink} />}
        </div>
      </div>
      <Modal show={showModalImage} onClose={handleShowImage(false)}>
        <ImageInput insertImage={handleImageCommand} />
      </Modal>
    </>
  );
}

export default Toolbar;

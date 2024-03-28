/* eslint-disable react/jsx-props-no-spreading */
import {
  $getSelection,
  $isRangeSelection,
  BaseSelection,
  LexicalEditor,
} from "lexical";
import { useCallback, useEffect, useState } from "react";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
  autoUpdate,
  flip,
  inline,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { createPortal } from "react-dom";
import { getSelectedNode } from "../../utils/getSelectedNode";

interface FloatingLinkEditorProps {
  editor: LexicalEditor;
  isLink: boolean;
}

function FloatingLinkEditor({ editor }: FloatingLinkEditorProps) {
  const [showFloatingLink, setShowFloatingLink] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    placement: "top",
    open: showFloatingLink,
    onOpenChange: setShowFloatingLink,
    middleware: [inline(), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  const [link, setLinkUrl] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [lastSelection, setLastSelection] = useState<BaseSelection | null>(
    null,
  );

  useEffect(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        // Update links
        const node = getSelectedNode(selection);
        const parent = node.getParent();
        if ($isLinkNode(parent)) {
          setLinkUrl(parent.getURL());
        } else if ($isLinkNode(node)) {
          setLinkUrl(node.getURL());
        } else {
          setLinkUrl("");
        }
      }
      setLastSelection(selection);
    });
  }, [editor]);

  useEffect(() => {
    function handleMouseUp(event: MouseEvent) {
      if (refs.floating.current?.contains(event.target as Element | null)) {
        return;
      }

      setTimeout(() => {
        const selection = window.getSelection();
        const range =
          typeof selection?.rangeCount === "number" && selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : null;

        if (selection?.isCollapsed) {
          setShowFloatingLink(false);
          return;
        }

        if (range) {
          refs.setReference({
            getBoundingClientRect: () => range.getBoundingClientRect(),
            getClientRects: () => range.getClientRects(),
          });
          setShowFloatingLink(true);
        }
      });
    }

    function handleMouseDown(event: MouseEvent) {
      if (refs.floating.current?.contains(event.target as Element | null)) {
        return;
      }

      if (window.getSelection()?.isCollapsed) {
        setShowFloatingLink(false);
      }
    }

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [refs]);

  const saveLink = useCallback(
    (cb?: () => void) => {
      if (lastSelection !== null) {
        if (link !== "") {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, link);
        }
      }
      cb?.();
    },
    [editor, lastSelection, link],
  );

  const handleInputButton = useCallback(() => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      saveLink(() => {
        setIsEdit(false);
      });
    }
  }, [isEdit, saveLink]);

  return showFloatingLink
    ? createPortal(
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, zIndex: 15 }}
          {...getFloatingProps()}
        >
          <div className="bg-primary-black text-white flex flex-row">
            <input
              className="bg-transparent px-4"
              value={link}
              disabled={!isEdit}
              onChange={(e) => {
                setLinkUrl(e.currentTarget.value);
              }}
            />
            <button
              type="button"
              className="px-4 bg-green-400 flex justify-center items-center"
              onClick={handleInputButton}
            >
              {isEdit ? "S" : "E"}
            </button>
          </div>
        </div>,
        document.body,
      )
    : null;
}

export default FloatingLinkEditor;

/* eslint-disable react/no-unused-prop-types */

import type { LexicalEditor, NodeKey } from "lexical";
import * as React from "react";
import { Suspense, useRef } from "react";

const imageCache = new Set();

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
}: {
  altText: string;
  className: string | null;
  imageRef: { current: null | HTMLImageElement };
  src: string;
}): React.JSX.Element {
  useSuspenseImage(src);
  return (
    <img
      className={className || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
    />
  );
}

export default function ImageComponent({
  src,
  altText,
}: {
  altText: string;
  caption: LexicalEditor;
  height: "inherit" | number;
  maxWidth: number;
  nodeKey: NodeKey;
  resizable: boolean;
  showCaption: boolean;
  src: string;
  width: "inherit" | number;
  captionsEnabled: boolean;
}): React.JSX.Element {
  const imageRef = useRef<null | HTMLImageElement>(null);

  return (
    <Suspense fallback={null}>
      <div>
        <LazyImage
          className="w-full"
          src={src}
          altText={altText}
          imageRef={imageRef}
        />
      </div>
    </Suspense>
  );
}

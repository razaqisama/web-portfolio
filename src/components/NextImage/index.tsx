import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ImagesProps {
  className?: string;
  path: string | StaticImageData;
  alt: string;
  children?: ReactNode;
}

function NextImage({ className, path, alt, children }: ImagesProps) {
  return (
    <div className={`${className ?? ""} relative`}>
      <Image
        className="w-full h-full"
        src={path}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        // placeholder="blur"
      />
      {children}
    </div>
  );
}

export default NextImage;

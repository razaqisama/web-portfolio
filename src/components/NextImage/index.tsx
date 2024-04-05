import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ImagesProps {
  className?: string;
  path: string | StaticImageData;
  alt: string;
  children?: ReactNode;
  sizes?: string;
}

function NextImage({ className, path, alt, sizes, children }: ImagesProps) {
  return (
    <div className={`${className ?? ""} relative`}>
      <Image
        className="w-full h-full"
        src={path}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        placeholder="blur"
        blurDataURL="/placeholder.webp"
        sizes={sizes}
      />
      {children}
    </div>
  );
}

export default NextImage;

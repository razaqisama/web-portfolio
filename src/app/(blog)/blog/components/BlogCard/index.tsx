import { NextImage } from "@/components";
import { truncateString } from "@/utils/truncateString";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  type?: "horizontal" | "vertical";
}

function BlogCard({
  title,
  subtitle,
  date,
  imageUrl,
  type = "vertical",
}: BlogCardProps) {
  const classImage = type === "horizontal" ? "w-full h-96" : "h-48";

  return (
    <div
      className={`flex ${type === "horizontal" ? "flex-row pb-2" : "flex-col"} gap-2`}
    >
      <div className="w-full h-full">
        <NextImage
          className={classImage}
          path={imageUrl}
          alt={`content-${title}`}
        />
      </div>
      <div className="flex flex-col gap-2 min-w-[315px]">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white-primary">{title}</h1>
          <h2 className="text-md text-white-primary text-opacity-60">
            {truncateString(subtitle, 140)}
          </h2>
        </div>
        <h1 className="text-sm text-brand-primary">{date}</h1>
      </div>
    </div>
  );
}

export default BlogCard;

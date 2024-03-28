import Link from "next/link";

interface ActivityCardProps {
  title?: string;
  linkTo?: string;
  publishedDate?: string;
}

function ActivityCard({
  title = "Bekerja di perusahaan A",
  linkTo = "http://localhost:3000/blog",
  publishedDate = "27 November 2023",
}: ActivityCardProps) {
  return (
    <Link href={linkTo}>
      <div className="flex flex-col py-2 mx-4 border-b border-white-primary hover:border-brand-primary hover:pl-4 transition-[border,padding-left] duration-300 ease-in-out">
        <div className="flex flex-row items-end justify-between">
          <p className="text-sm">{publishedDate}</p>
        </div>
        <h3 className="text-lg">{title}</h3>
      </div>
    </Link>
  );
}

export default ActivityCard;

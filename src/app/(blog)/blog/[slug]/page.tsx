import { ContentViewer } from "@/components";
import { getOneArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

async function BlogSlug({ params }: { params: { slug: string } }) {
  const article = await getOneArticleBySlug(params.slug);

  if (!article.data) {
    return notFound();
  }

  return (
    <div className="w-full h-full flex flex-col max-w-[780px]">
      <div className="w-full flex justify-between items-end border-b py-2">
        <p className="font-bold">{article.data.title}</p>
        <p className="text-xs font-bold">{article.data.publishedAt}</p>
      </div>
      <div className="border-b py-1" />
      <div className="py-2 border-b">
        {article.data?.content && (
          <ContentViewer
            initialState={JSON.parse(article.data.content)}
            editable={false}
          />
        )}
      </div>
      <div className="border-b py-1" />
    </div>
  );
}

export default BlogSlug;

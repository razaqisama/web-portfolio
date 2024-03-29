import { BlogViewer } from "@/components";
import { getOneArticleBySlug } from "@/lib/articles/getOneArticleBySlug";

async function BlogSlug({ params }: { params: { slug: string } }) {
  const article = await getOneArticleBySlug(params.slug);

  return (
    <div className="w-full h-full">
      <div>{article.data?.title}</div>
      {article.data?.content && (
        <BlogViewer
          initialState={JSON.parse(article.data.content)}
          editable={false}
        />
      )}
    </div>
  );
}

export default BlogSlug;

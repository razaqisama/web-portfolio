import { getAllArticles } from "@/lib/articles/getArticles";
import Link from "next/link";

async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="w-full h-full flex flex-col">
      {articles.data
        ? articles.data?.map((article) => {
            return (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                {article.title}
              </Link>
            );
          })
        : "No article"}
    </div>
  );
}

export default BlogPage;

import { getAllArticles } from "@/lib/articles/getArticles";
import Link from "next/link";
import BlogCard from "./components/BlogCard";

async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="w-full h-full flex flex-col gap-4 max-w-[980px] px-2 py-2">
      <div className="flex flex-col gap-2 py-2 bg-black-primary border-b">
        <h1 className="text-6xl text-brand-primary">Perkara Menulis.</h1>
        <p className="pl-1">
          Dokumentasi isi pikiran Joe dalam bentuk tulisan.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 gap-y-6">
        {articles.data?.map((article, index) => {
          const isFirstIndex = index === 0;
          return (
            <Link
              className={`${isFirstIndex ? "col-span-3" : ""}`}
              key={article.id}
              href={`/blog/${article.slug}`}
            >
              <BlogCard
                type={isFirstIndex ? "horizontal" : "vertical"}
                title={article.title}
                subtitle={article.description}
                date="27 Januari 2022"
                imageUrl="https://images.unsplash.com/photo-1711634537178-87449f29c628?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Link>
          );
        })}
        {articles.data?.map((article) => {
          const isFirstIndex = false;
          return (
            <Link
              className={`${isFirstIndex ? "col-span-3" : ""}`}
              key={article.id}
              href={`/blog/${article.slug}`}
            >
              <BlogCard
                type={isFirstIndex ? "horizontal" : "vertical"}
                title={article.title}
                subtitle={article.description}
                date="27 Januari 2022"
                imageUrl="https://images.unsplash.com/photo-1711634537178-87449f29c628?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;

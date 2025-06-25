import { marked } from "marked";
import { config } from "@/lib/utils";
import fs from "fs";
import HTMLReactParser from "html-react-parser/lib/index";

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log("BlogPostPage slug:", slug);

  const post = config.blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div className="p-4">Post not found</div>;
  }

  const content = fs.readFileSync(post.path, "utf-8");
  const html = await marked.parse(content);

  return (
    <div className="w-full p-[1em] flex flex-col items-center">
      <div className="w-full max-w-[50em]">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div
        className="mt-[2em]
        flex flex-col gap-[1em]
        "
        >{HTMLReactParser(html)}</div>
      </div>
    </div>
  );
};

export default BlogPostPage;

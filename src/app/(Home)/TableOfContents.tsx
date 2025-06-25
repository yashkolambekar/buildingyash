import { config } from "@/lib/utils";

const TableOfContents = () => {
  const classForTitle = "w-full text-left p-[0.5em]";
  const classForDate = "w-fit text-right p-[0.5em]";


  return (
    <div className="w-full p-[1em] flex flex-col items-center">
      <table className="w-full max-w-[50em]">
        <thead>
          <tr>
            <th className={classForDate}>Date</th>
            <th className={classForTitle}>Title</th>
          </tr>
        </thead>
        <tbody>
            {
                config.blogPosts.map((post) => (
                  <tr key={post.slug} className="border-b border-gray-200">
                    <td className={classForDate}>{post.date.split("T")[0]}</td>
                    <td className={classForTitle}>
                      <a href={`/${post.slug}`} className="hover:underline">
                        {post.title}
                      </a>
                    </td>
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default TableOfContents;

import fs from "fs";
import path from "path";

interface BlogPost {
  date: string;
  title: string;
  slug: string;
  path: string;
}

const getBlogPosts = () => {

  const blogPostsDir = path.join(process.cwd(), "files");
  const files = fs.readdirSync(blogPostsDir);
  const blogPosts: BlogPost[] = [];

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const fileMetaData = fs.lstatSync(path.join(blogPostsDir, file));
      const dateCreated = fileMetaData.birthtime.toISOString();
      const title = file.replace(".md", "").replace(/-/g, " ");
      const slug = file.replace(".md", "").toLowerCase().replace(/ /g, "-");
      const filePath = path.join(blogPostsDir, file);

      blogPosts.push({
        date: dateCreated,
        title,
        slug,
        path: filePath,
      });
    }
  });

  blogPosts.sort((a, b) => {
    // Sort by date in descending order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return blogPosts;
}

class Config {
  [key: string]: string | BlogPost[] | string[];
  allVariables: string[] = ["title", "description"];
  title: string = "Simple blog";
  description: string = "A simple blog built with Next.js";
  blogPosts: BlogPost[] = [];

  constructor() {
    const configPath = path.join(process.cwd(), "files", "config.json");
    if (fs.existsSync(configPath)) {
      const configContent = fs.readFileSync(configPath, "utf-8");
      const config = JSON.parse(configContent);
      this.allVariables.forEach((variable) => {
        if (config[variable]) {
          this[variable] = config[variable];
        }
      });
    }
    this.blogPosts = getBlogPosts();    
  }
}

const config = new Config();

export { config };
export type { BlogPost };

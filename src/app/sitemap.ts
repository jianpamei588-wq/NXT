import { MetadataRoute } from "next";
import projects from "@/data/projects.json";
import { getAllPosts } from "@/lib/markdown";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextbuildx.org"; // Placeholder domain
  const languages = ["en", "hi"];
  
  const routes = [
    "",
    "/about",
    "/projects",
    "/impact",
    "/blog",
    "/contact",
    "/get-involved",
  ];

  const mapRoutes = languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
    }))
  );

  const projectRoutes = languages.flatMap((lang) =>
    projects.map((project) => ({
      url: `${baseUrl}/${lang}/projects/${project.id}`,
      lastModified: new Date(),
    }))
  );

  const posts = getAllPosts(["slug", "date"]);
  const blogRoutes = languages.flatMap((lang) =>
    posts.map((post) => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    }))
  );

  return [...mapRoutes, ...projectRoutes, ...blogRoutes];
}

import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
  }));
  return [...pages, ...projectPages];
}

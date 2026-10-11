import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <section className="section px-6 py-20 max-w-3xl mx-auto">
      <h1 className="heading mb-8 text-center">{project.title}</h1>
      <p className="text-secondary leading-8 mb-8 text-center">
        {project.longDescription ?? project.description}
      </p>
      <ul className="flex flex-wrap justify-center gap-2 mb-10">
        {project.tech.map((item) => (
          <li key={item} className="bg-background-light text-accent rounded-full px-3 py-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-6">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View on GitHub
          </a>
        )}
        <Link href="/projects" className="btn-outline">
          Back to projects
        </Link>
      </div>
    </section>
  );
}

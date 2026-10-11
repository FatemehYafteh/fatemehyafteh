import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Projects by Fatemeh, a front-end developer building web applications with React, Next.js, and Tailwind CSS.",
};

export default function ProjectsPage() {
  return (
    <div className="section px-6 max-w-5xl mx-auto">
      <h1 className="heading text-center mb-12">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="card hover:shadow-xl transition">
            <h3 className="text-xl font-bold  mb-3">{project.title}</h3>
            <p className="text-secondary ">{project.description}</p>
            <Link href={`/projects/${project.slug}`} className="btn-primary mt-6 block text-center">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

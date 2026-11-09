import Image from "next/image";
import Link from "next/link";
import DemoLogin from "@/components/DemoLogin";
import { buttonRow, outlineButton, primaryButton } from "@/lib/buttons";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Inventory Manager, a stock management web app by Fatemeh, a front-end developer building web applications with React and Tailwind CSS.",
};

export default function ProjectsPage() {
  return (
    <div className="section mx-auto max-w-3xl px-2 md:px-6">
      <h1 className="heading mb-12 text-center">My Projects</h1>
      <div className="flex w-full flex-col gap-8">
        {projects.map((project, index) => {
          const thumb = project.images?.[0];
          return (
            <div key={project.id} className="card p-8! transition hover:shadow-xl md:p-10!">
              {thumb && (
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  width={thumb.width}
                  height={thumb.height}
                  sizes="(min-width: 768px) 600px, 90vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="mb-6 h-36 w-full rounded-lg object-cover object-top md:h-44"
                />
              )}
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">{project.title}</h2>
              <p className="text-secondary mb-6 leading-8">{project.description}</p>
              <ul className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-background px-3 py-1 text-sm text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className={buttonRow}>
                <Link href={`/projects/${project.slug}`} className={primaryButton}>
                  View Project
                </Link>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={outlineButton}
                  >
                    {project.demoLabel ?? "Live demo"}
                  </a>
                )}
              </div>
              {project.demo && <DemoLogin login={project.demoLogin} className="mt-4" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

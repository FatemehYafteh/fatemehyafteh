import Link from "next/link";
import DemoLogin from "@/components/DemoLogin";
import ProjectGallery from "@/components/ProjectGallery";
import { buttonRow, outlineButton, primaryButton } from "@/lib/buttons";
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

function Section({ title, children }) {
  return (
    <div className="mt-12 w-full">
      <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">{title}</h2>
      {children}
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const sections = project.sections;

  const tags = (
    <ul className={`${sections ? "mt-12" : ""}mb-10 flex flex-wrap justify-center gap-2`}>
      {project.tech.map((item) => (
        <li key={item} className="rounded-full bg-background-light px-3 py-1 text-sm text-accent">
          {item}
        </li>
      ))}
    </ul>
  );

  const buttons = (
    <div className={`${buttonRow} sm:justify-center`}>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={primaryButton}>
          {project.demoLabel ?? "Live demo"}
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={outlineButton}
        >
          View on GitHub
        </a>
      )}
      <Link href="/projects" className={outlineButton}>
        Back to projects
      </Link>
    </div>
  );

  const demoLogin = project.demo && (
    <DemoLogin login={project.demoLogin} className="mt-6 text-center" />
  );

  // The gallery is wider than the text column on large screens, so thumbnails are bigger.
  const gallery = project.images?.length > 0 && (
    <div className="mt-12 w-full lg:w-[min(64rem,calc(100vw-4rem))] lg:max-w-none">
      <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Screenshots</h2>
      <ProjectGallery images={project.images} />
    </div>
  );

  return (
    <section className="section mx-auto max-w-3xl px-2 py-10 md:px-6 md:py-20">
      <h1 className="heading mb-8 text-center">{project.title}</h1>

      {sections ? (
        <>
          <Section title="The problem">
            <p className="text-secondary leading-8">{sections.problem}</p>
          </Section>
          <Section title="What I built">
            <p className="text-secondary leading-8">{sections.built}</p>
          </Section>
          {gallery}
          {sections.challenges?.length > 0 && (
            <Section title="Challenges">
              <ul className="text-secondary list-disc space-y-2 pl-6 leading-8">
                {sections.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>
          )}
          {sections.learned && (
            <Section title="What I learned">
              <p className="text-secondary leading-8">{sections.learned}</p>
            </Section>
          )}
          {tags}
          {buttons}
          {demoLogin}
        </>
      ) : (
        <>
          <p className="text-secondary mb-8 text-center leading-8">
            {project.longDescription ?? project.description}
          </p>
          {tags}
          {buttons}
          {demoLogin}
          {gallery}
        </>
      )}
    </section>
  );
}

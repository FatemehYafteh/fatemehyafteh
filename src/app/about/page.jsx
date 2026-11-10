import CvButtons from "@/components/CvButtons";

export const metadata = {
  title: "About Me",
  description:
    "Front-end developer specialized in React, Next.js, and Tailwind CSS. Based in Tehran, Iran. Open to remote and on-site full-time roles and freelance projects.",
};

export default function About() {
  return (
    <section className="section mx-auto max-w-3xl px-2 py-10 md:px-6 md:py-20" id="about">
      <h2 className="heading mb-8 text-center">About Me</h2>

      <p className="text-secondary mb-4 leading-8">
        I am a front-end developer specialized in React, Next.js, and Tailwind CSS. I love building
        clean, accessible, and user-friendly interfaces that feel natural across all devices.
      </p>

      <p className="text-secondary leading-8">
        When I&apos;m not coding, I enjoy learning new tools, finding design inspiration, going to
        the gym, and spending quality time with my family.
      </p>

      <dl className="text-secondary mt-8 space-y-3 leading-8">
        <div>
          <dt className="inline font-semibold">Location: </dt>
          <dd className="inline">Tehran, Iran (UTC+3:30)</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Open to: </dt>
          <dd className="inline">
            full-time remote roles, full-time on-site or hybrid roles in Tehran, and freelance or
            contract projects
          </dd>
        </div>
        <div>
          <dt className="inline font-semibold">Languages: </dt>
          <dd className="inline">Persian (native), English (intermediate)</dd>
        </div>
      </dl>

      <CvButtons className="mt-10" />
    </section>
  );
}

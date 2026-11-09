import CvButtons from "@/components/CvButtons";

export const metadata = {
  title: "About Me",
  description:
    "Front-end developer specialized in React, Next.js, and Tailwind CSS. Passionate about building clean, accessible, and user-friendly interfaces.",
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

      <CvButtons className="mt-10" />
    </section>
  );
}

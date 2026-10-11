export const metadata = {
  title: "About Me",
  description:
    "Front-end developer specialized in React, Next.js, and Tailwind CSS. Passionate about building clean, accessible, and user-friendly interfaces.",
};

export default function About() {
  return (
    <section className="section px-6 py-20 max-w-3xl mx-auto" id="about">
      <h2 className="heading mb-8 text-center">About Me</h2>

      <p className="text-secondary leading-8 mb-4">
        I am a front-end developer specialized in React, Next.js, and Tailwind CSS.
        I love building clean, accessible, and user-friendly interfaces that feel natural
        across all devices.
      </p>

      <p className="text-secondary leading-8">
        When I&apos;m not coding, I enjoy learning new tools, finding design inspiration,
        going to the gym, and spending quality time with my family.
      </p>
    </section>
  );
}

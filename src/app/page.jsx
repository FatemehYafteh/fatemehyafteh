import Link from "next/link";
import CvButtons from "@/components/CvButtons";

export const metadata = {
  title: { absolute: "Fatemeh - Front-end Developer" },
  description:
    "Hi, I'm Fatemeh, a front-end developer focused on React, Next.js, and Tailwind CSS. I create clean and user-friendly web applications.",
};

export default function HomePage() {
  return (
    <div className="section relative overflow-hidden">
      {/* Main content */}
      <div className="px-2 text-center md:px-4">
        <h1 className="heading effect mb-6 transform-cpu md:mb-0">Fatemeh Yafteh</h1>

        <p className="subheading mb-4">
          I am a front-end developer passionate about building clean, accessible, and visually
          refined web applications using React, Next.js, and Tailwind CSS.
        </p>
        <p className="subheading mb-10 md:mb-6">
          Explore my projects and skills, and feel free to get in touch!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Same width, and a transparent border so both buttons match the outline button's height */}
          <Link href="/projects" className="btn-primary w-38 border border-transparent text-center">
            View Projects
          </Link>
          <Link href="/contact" className="btn-outline w-38 text-center">
            Contact Me
          </Link>
        </div>
        <CvButtons className="mt-6" />
      </div>
    </div>
  );
}

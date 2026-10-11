import MouseEffect from "@/components/MouseEffect";
import Link from "next/link";

export const metadata = {
  title: { absolute: "Fatemeh - Front-end Developer" },
  description:
    "Hi, I'm Fatemeh, a front-end developer focused on React, Next.js, and Tailwind CSS. I create clean and user-friendly web applications.",
};

export default function HomePage() {
  return (
    <div className="section relative overflow-hidden">
      <MouseEffect />
      {/* Main content */}
      <div className="text-center px-4">
        <h1 className="heading transform-cpu effect">Fatemeh Yafteh</h1>

        <p className="subheading mb-4">
          {/* A frontend developer and UI designer passionate about creating
          modern and engaging digital experiences. */}

          I am a front-end developer passionate about building clean, accessible, and visually refined web applications using React, Next.js, and Tailwind CSS.
        </p>
        <p className="subheading mb-6">
        Explore my projects and skills, and feel free to get in touch!
      </p>
        <div className="flex justify-center gap-6">
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

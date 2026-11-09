import Link from "next/link";
import { buttonRow, outlineButton, primaryButton } from "@/lib/buttons";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section mx-auto max-w-3xl px-2 py-10 md:px-6 md:py-20">
      <p
        aria-hidden="true"
        className="mb-2 text-8xl leading-none font-bold text-accent opacity-20 select-none md:text-9xl"
      >
        404
      </p>
      <h1 className="heading mb-6 text-center">Page not found</h1>
      <p className="text-secondary mb-10 text-center leading-8">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className={`${buttonRow} sm:justify-center`}>
        <Link href="/" className={primaryButton}>
          Back to home
        </Link>
        <Link href="/projects" className={outlineButton}>
          View projects
        </Link>
      </div>
    </section>
  );
}

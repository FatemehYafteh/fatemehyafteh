import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section mx-auto max-w-3xl px-2 py-10 md:px-6 md:py-20">
      <p className="mb-2 text-xl font-semibold text-accent">404</p>
      <h1 className="heading mb-6 text-center">Page not found</h1>
      <p className="text-secondary mb-10 text-center leading-8">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/projects" className="btn-outline">
          View projects
        </Link>
      </div>
    </section>
  );
}

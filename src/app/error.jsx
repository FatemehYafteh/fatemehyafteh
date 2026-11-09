"use client";

import Link from "next/link";

export default function ErrorPage({ reset }) {
  return (
    <section className="section mx-auto max-w-3xl px-2 py-10 md:px-6 md:py-20">
      <h1 className="heading mb-6 text-center">Something went wrong</h1>
      <p className="text-secondary mb-10 text-center leading-8">
        An unexpected error happened. You can try again, or go back to the home page.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button type="button" onClick={() => reset()} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-outline">
          Back to home
        </Link>
      </div>
    </section>
  );
}

import { repoUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="text-secondary relative z-10 px-4 py-8 text-center text-sm">
      <p>
        Designed &amp; built by Fatemeh Yafteh with Next.js and Tailwind CSS
        <span aria-hidden="true" className="hidden sm:inline">
          {" "}
          ·{" "}
        </span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block rounded-md text-accent underline-offset-4 hover:underline sm:mt-0 sm:inline"
        >
          View source
        </a>
      </p>
    </footer>
  );
}

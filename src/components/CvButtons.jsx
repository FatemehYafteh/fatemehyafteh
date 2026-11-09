import { buttonRow, cvButton } from "@/lib/buttons";
import { cvFiles } from "@/lib/site";

export default function CvButtons({ className = "" }) {
  return (
    <div className={`${buttonRow} sm:justify-center ${className}`}>
      {cvFiles.map((cv) => (
        <a
          key={cv.href}
          href={cv.href}
          download={cv.filename}
          hrefLang={cv.hrefLang}
          className={cvButton}
        >
          {cv.label}
        </a>
      ))}
    </div>
  );
}

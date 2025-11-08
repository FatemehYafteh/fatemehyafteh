
import MouseEffect from "@/components/MouseEffect"
export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-[#ccd6f6] overflow-hidden">
  <MouseEffect />

      {/* Main content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m Fatemeh
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto">
          A frontend developer and UI designer passionate about creating modern and engaging digital experiences.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-600 opacity-20 rounded-full blur-3xl"></div>
    </div>
  );
}

import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site";

export const alt = "Fatemeh Yafteh - Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accent = "100, 255, 218";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        background: "#0a192f",
        color: "#ccd6f6",
      }}
    >
      {/* Decorative: soft teal glow and rings on the right */}
      <div
        style={{
          position: "absolute",
          top: 15,
          right: -120,
          width: 600,
          height: 600,
          borderRadius: 300,
          background: `radial-gradient(circle, rgba(${accent}, 0.2) 0%, rgba(${accent}, 0) 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -15,
          right: -150,
          width: 660,
          height: 660,
          borderRadius: 330,
          border: `2px solid rgba(${accent}, 0.15)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 155,
          right: 20,
          width: 320,
          height: 320,
          borderRadius: 160,
          border: `2px solid rgba(${accent}, 0.25)`,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 700 }}>Fatemeh Yafteh</div>
        <div style={{ fontSize: 44, color: "#64ffda", marginTop: 16 }}>Front-end Developer</div>
        <div style={{ fontSize: 30, color: "#8892b0", marginTop: 32 }}>
          React · Next.js · TypeScript · Tailwind CSS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          borderRadius: 28,
          background: "#112240",
          border: "2px solid #64ffda",
          fontSize: 84,
          fontWeight: 700,
          color: "#64ffda",
        }}
      >
        {"</>"}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 80,
          fontSize: 24,
          color: "#8892b0",
        }}
      >
        {siteUrl.replace("https://", "")}
      </div>
    </div>,
    size,
  );
}

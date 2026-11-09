import { ImageResponse } from "next/og";

export const alt = "Fatemeh Yafteh - Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a192f",
          color: "#ccd6f6",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700 }}>Fatemeh Yafteh</div>
        <div style={{ fontSize: 44, color: "#64ffda", marginTop: 16 }}>Front-end Developer</div>
        <div style={{ fontSize: 30, color: "#8892b0", marginTop: 32 }}>
          React · Next.js · Tailwind CSS
        </div>
      </div>
    ),
    size,
  );
}

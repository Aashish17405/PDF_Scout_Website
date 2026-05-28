import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 80% 20%, #f7e8da 0%, transparent 40%), linear-gradient(180deg, #f6f2ed 0%, #f1e8de 100%)",
          color: "#1f1a17",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "2px solid #ead7c8",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: 24,
            alignSelf: "flex-start",
          }}
        >
          PDF Scout
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.05 }}>
            Read PDFs in less time
          </div>
          <div style={{ fontSize: 34, color: "#5f5146" }}>
            Smooth navigation, clean workflow, better focus.
          </div>
        </div>
      </div>
    ),
    size
  );
}

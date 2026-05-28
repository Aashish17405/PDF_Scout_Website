import type { Metadata } from "next";
import { SmoothScroll } from "./components/smooth-scroll";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pdf-scout.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PDF Scout | Read, Search, and Understand PDFs Faster",
    template: "%s | PDF Scout",
  },
  description:
    "PDF Scout is a Chrome PDF extension for smooth reading, faster navigation, and better comprehension across long PDF documents.",
  keywords: [
    "pdf extension",
    "chrome pdf extension",
    "pdf reader extension",
    "pdf productivity",
    "pdf navigation",
    "document reading tool",
    "pdf scout",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "PDF Scout | Read, Search, and Understand PDFs Faster",
    description:
      "Watch the PDF Scout walkthrough and see how teams move through large PDFs with speed and clarity.",
    siteName: "PDF Scout",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PDF Scout" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Scout | Chrome PDF Extension",
    description:
      "Move faster through long PDFs with clean reading, quick navigation, and a focused workflow.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/extension-logo.png",
    shortcut: "/extension-logo.png",
    apple: "/extension-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const key = 'pdf-scout-theme';
                const value = localStorage.getItem(key);
                if (value === 'light' || value === 'dark') {
                  document.documentElement.setAttribute('data-theme', value);
                } else {
                  document.documentElement.removeAttribute('data-theme');
                }
              } catch (_) {}
            })();`,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScroll />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

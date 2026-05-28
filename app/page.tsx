import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pdf-scout.vercel.app";
const walkthroughUrl = "https://www.youtube.com/watch?v=8bVCi3hnba4";
const chromeStoreUrl = "https://chromewebstore.google.com/";

const keyFeatures = [
  {
    title: "Detects all hyperlinks inside PDFs",
    body: "Instantly scans the currently open PDF and extracts every embedded link.",
  },
  {
    title: "Uncovers hidden references",
    body: "Reveals useful links you might miss unless you hover over exactly the right text.",
  },
  {
    title: "Open links directly from popup",
    body: "Launch extracted links in one click with a fast, lightweight workflow inside Chrome.",
  },
];

const useCases = [
  "Students going through study material",
  "Researchers reading papers and documentation",
  "Developers checking technical PDFs",
  "Anyone who regularly works with PDFs",
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Scout",
    applicationCategory: "BrowserApplication",
    operatingSystem: "ChromeOS, Windows, macOS, Linux",
    description:
      "PDF Scout is a Chrome extension that uncovers hidden hyperlinks inside PDFs so users can quickly discover references and related resources.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    video: walkthroughUrl,
  };

  return (
    <main id="main-content" className="paper-bg grain-overlay flex-1">
      <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[color:var(--surface)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
          <div className="inline-flex items-center gap-3">
            <Image
              src="/extension-logo.png"
              alt="PDF Scout logo"
              width={32}
              height={32}
              className="rounded-md"
              style={{ height: "auto" }}
              priority
            />
            <p className="text-sm font-semibold text-[var(--foreground)]">
              PDF Scout
            </p>
          </div>
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-3">
            <a
              href={chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="cta_click"
              data-analytics-label="sticky_header_install"
              className="rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-deep)] sm:px-4 sm:text-sm"
            >
              Install Extension
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div className="reveal-up animation-delay-100">
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Find hidden PDF links instantly.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:mt-6 sm:text-lg">
              Ever opened a PDF and felt like important links were impossible to
              find? PDF Scout scans the PDF currently open in your browser and
              extracts all hyperlinks, so you can uncover references,
              documentation, research papers, and deeper resources in seconds.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="cta_click"
                data-analytics-label="hero_install"
                className="rounded-xl bg-[var(--brand)] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-deep)]"
              >
                Install Chrome Extension
              </a>
              <a
                href="#demo"
                data-analytics-event="cta_click"
                data-analytics-label="hero_watch_demo"
                className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-center text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--line)]/25"
              >
                Watch 1-Minute Walkthrough
              </a>
            </div>
          </div>

          <div className="reveal-up animation-delay-200 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:rounded-3xl sm:p-7">
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              Best for
            </h2>
            <ul className="mt-5 space-y-3 text-[var(--foreground)]">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20"
      >
        <div className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:rounded-3xl sm:p-7">
          <h2 className="mb-5 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            See PDF Scout in action
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <div className="aspect-video w-full">
              <iframe
                id="walkthrough-video"
                className="h-full w-full"
                src="https://www.youtube.com/embed/rSFDQ7wLyIo?si=6r7w0OpQHSJI4LDg"
                title="PDF Scout extension walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-10 lg:pb-24"
      >
        <h2 className="reveal-up mb-6 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
          Useful features
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {keyFeatures.map((feature) => (
            <article
              key={feature.title}
              className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[var(--muted)]">{feature.body}</p>
            </article>
          ))}
        </div>
        <div className="reveal-up mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Explore PDFs with deeper context
          </h3>
          <p className="mt-3 text-[var(--muted)]">
            PDF Scout helps you discover hidden references and resources linked
            to PDF content, making technical topics easier to learn and
            understand.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-10 lg:pb-24">
        <div className="reveal-up flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
          <p className="text-[var(--muted)]">
            Learn more:{" "}
            <a
              className="underline decoration-[var(--brand)]"
              href={walkthroughUrl}
            >
              YouTube walkthrough
            </a>
          </p>
          <a
            href={chromeStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="cta_click"
            data-analytics-label="bottom_get_pdf_scout"
            className="rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-deep)]"
          >
            Get PDF Scout
          </a>
        </div>
      </section>
      <footer className="border-t border-[var(--line)] bg-[var(--surface)]/90">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-10 lg:py-8">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} PDF Scout
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link
              className="text-[var(--muted)] underline-offset-4 hover:underline"
              href="/privacy"
            >
              Privacy
            </Link>
            <a
              className="text-[var(--muted)] underline decoration-[var(--brand)] underline-offset-4"
              href="mailto:aashish17405@gmail.com"
            >
              aashish17405@gmail.com
            </a>
          </div>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </main>
  );
}

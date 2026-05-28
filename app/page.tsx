import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./components/theme-toggle";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pdf-scout.vercel.app";
const walkthroughUrl = "https://www.youtube.com/watch?v=8bVCi3hnba4";
const chromeStoreUrl = "https://chromewebstore.google.com/";

const keyFeatures = [
  {
    title: "Smooth PDF Reading",
    body: "Open and read complex PDFs in a cleaner interface designed for long-form focus.",
  },
  {
    title: "Fast Navigation",
    body: "Jump across pages quickly and keep momentum when scanning reports, contracts, or manuals.",
  },
  {
    title: "Made For Real Work",
    body: "Built for students, researchers, analysts, and teams that work with heavy documents daily.",
  },
];

const useCases = [
  "Review legal and compliance documents faster",
  "Study research papers without losing context",
  "Scan large reports and find what matters quickly",
  "Reduce the friction of daily PDF-heavy workflows",
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Scout",
    applicationCategory: "BrowserApplication",
    operatingSystem: "ChromeOS, Windows, macOS, Linux",
    description:
      "PDF Scout is a Chrome extension that helps users read, navigate, and understand long PDFs faster.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    video: walkthroughUrl,
  };

  return (
    <main id="main-content" className="paper-bg grain-overlay flex-1">
      <header className="sticky top-0 z-40 border-b border-[var(--line)]/80 bg-[color:var(--surface)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
          <div className="inline-flex items-center gap-3">
            <Image
              src="/extension-logo.png"
              alt="PDF Scout logo"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
            <p className="text-sm font-semibold text-[var(--foreground)]">PDF Scout</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="cta_click"
              data-analytics-label="sticky_header_install"
              className="rounded-lg bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-deep)] sm:text-sm"
            >
              Install Extension
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:px-10">
        <div className="reveal-up mb-12 inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
          Chrome Extension
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal-up animation-delay-100">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Read PDFs in less time, with less friction.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              PDF Scout helps you move through long documents with clarity and
              speed, so you can spend less time scrolling and more time
              understanding.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-event="cta_click"
                data-analytics-label="hero_install"
                className="rounded-xl bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-deep)]"
              >
                Install Chrome Extension
              </a>
              <a
                href="#demo"
                data-analytics-event="cta_click"
                data-analytics-label="hero_watch_demo"
                className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--line)]/25"
              >
                Watch 2-Minute Walkthrough
              </a>
            </div>
          </div>

          <div className="reveal-up animation-delay-200 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_30px_60px_-35px_rgba(91,53,31,0.35)]">
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              Why Teams Use PDF Scout
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

      <section id="demo" className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="reveal-up rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_25px_55px_-40px_rgba(91,53,31,0.7)] sm:p-7">
          <h2 className="mb-5 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            See PDF Scout in action
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <div className="aspect-video w-full">
              <iframe
                id="walkthrough-video"
                className="h-full w-full"
                src="https://www.youtube.com/embed/8bVCi3hnba4?si=i-FAThraRRHDU58z"
                title="PDF Scout extension walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <h2 className="reveal-up mb-6 text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
          Everything you need for PDF-heavy days
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
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="reveal-up flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
          <p className="text-[var(--muted)]">
            Learn more:{" "}
            <a className="underline decoration-[var(--brand)]" href={walkthroughUrl}>
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 sm:px-10">
          <p className="text-sm text-[var(--muted)]">© {new Date().getFullYear()} PDF Scout</p>
          <nav aria-label="Legal and contact links" className="flex items-center gap-5 text-sm">
            <Link className="text-[var(--muted)] underline-offset-4 hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="text-[var(--muted)] underline-offset-4 hover:underline" href="/terms">
              Terms
            </Link>
            <Link className="text-[var(--muted)] underline-offset-4 hover:underline" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </main>
  );
}

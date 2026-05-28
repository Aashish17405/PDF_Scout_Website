export default function ContactPage() {
  return (
    <main className="paper-bg min-h-screen px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Contact</h1>
        <p className="mt-4 text-[var(--muted)]">
          For support, partnership, or feedback, email us at
          <a className="ml-1 underline decoration-[var(--brand)]" href="mailto:support@pdfscout.app">
            support@pdfscout.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default function PrivacyPage() {
  return (
    <main className="paper-bg min-h-screen px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Last updated: May 28, 2026
        </p>

        <p className="mt-6 text-[var(--muted)]">
          PDF Scout is designed with a strict privacy-first architecture. We do
          not collect, store, transmit, or sell personal data. The extension
          processes PDF content locally in your browser environment and does not
          send document content to our servers.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            1. Data Collection
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            PDF Scout does not collect personally identifiable information,
            usage logs linked to identity, document contents, account
            credentials, payment information, or browsing history.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            2. Data Usage
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Because no personal or document data is collected by PDF Scout,
            there is no processing of user data for profiling, advertising,
            resale, or third-party analytics within the extension itself.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            3. Data Sharing
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            We do not share user data with third parties because PDF Scout does
            not ingest user data in the first place.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            4. Local Processing and Storage
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            PDF rendering and interaction are executed locally on your device.
            Any temporary browser state required for functionality remains under
            browser control and is not transmitted to external systems by PDF
            Scout.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            5. Security and Safe-by-Design Approach
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            PDF Scout follows a minimal-access model and is built to operate
            with only the permissions required for core extension functionality.
            We continuously prioritize secure engineering practices to reduce
            risk and maintain a safe user experience.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            6. Children’s Privacy
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            PDF Scout does not knowingly collect personal information from
            children or any other users.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            7. Changes to This Policy
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            If we update this Privacy Policy, the revised version will be
            published on this page with an updated effective date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            8. Contact
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            For privacy-related questions, contact me at{" "}
            <a
              className="underline decoration-[var(--brand)]"
              href="mailto:aashish17405@gmail.com"
            >
              aashish17405@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

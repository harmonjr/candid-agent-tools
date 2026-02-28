export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-10 text-center">
        <p className="font-sans text-xs text-ink-muted">
          {year} The Candid Agent. Tools for agents who want to thrive,
          not just survive.
        </p>
        <p className="mt-2 font-sans text-[10px] text-ink-muted/60">
          Your assessment data stays on your device. Nothing is sent to a server.
        </p>
      </div>
    </footer>
  );
}

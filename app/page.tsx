import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1>Answer every lead. Book more jobs.</h1>
          <p className="lead">
            SoloPilot AI is an all-in-one AI receptionist + marketing platform:
            automated answering, SMS follow-ups, simple CRM, and campaigns—built
            for solopreneurs.
          </p>

          <div className="ctaRow">
            <Link className="btnPrimary" href="/contact">Request a demo</Link>
            <Link className="btnSecondary" href="/features">See features</Link>
          </div>

          <div className="kpis">
            <div className="kpiCard">
              <div className="kpiNum">24/7</div>
              <div className="muted">Lead capture</div>
            </div>
            <div className="kpiCard">
              <div className="kpiNum">&lt;1 min</div>
              <div className="muted">Response time</div>
            </div>
            <div className="kpiCard">
              <div className="kpiNum">1</div>
              <div className="muted">Unified inbox</div>
            </div>
          </div>
        </div>

        <div className="heroCard">
          <div className="badge">AI Receptionist</div>
          <p className="mono">
            “Thanks for calling! What service do you need, and what’s the best time to reach you?”
          </p>
          <div className="divider" />
          <p className="muted">
            Automatically qualifies leads, creates a contact, and sends a follow‑up SMS.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Built for real businesses</h2>
        <div className="grid3">
          <div className="card">
            <h3>Automated intake</h3>
            <p className="muted">Capture name, job type, urgency, and availability—without missed calls.</p>
          </div>
          <div className="card">
            <h3>Simple CRM</h3>
            <p className="muted">Track leads, conversations, and next steps in one clean pipeline.</p>
          </div>
          <div className="card">
            <h3>SMS campaigns</h3>
            <p className="muted">Re-activate past customers with targeted, opt-in messages.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
























/* import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
} */

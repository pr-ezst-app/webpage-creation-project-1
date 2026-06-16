import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV_GROUPS = [
  { label: 'Overview', items: ['Home', 'About', 'Content', 'Keyw Findings Overview'] },
  { label: 'The Case', items: ['Examining the History', 'Claims and Concepts', 'Claims and Evidence Comparision', 'Court', 'Historical Articles'] },
  { label: 'Evidence', items: ['Documents Archive', 'Testimony Collection', 'Primary Research Sources', 'Supporting Sources', 'Publications', 'Interview Transcript'] },
  { label: 'More', items: ['Resources', 'FAQ', 'Contact'] },
];

const FINDINGS = [
  {
    no: '01',
    icon: 'Network',
    title: 'Thought-Reform Patterns',
    text: 'Analysis comparing the Twelve Steps against established models of coercive persuasion — confession, dependency, and the dissolution of self.',
  },
  {
    no: '02',
    icon: 'Scale',
    title: 'The Evidence Gap',
    text: 'A side-by-side review of efficacy claims versus peer-reviewed outcome data, including dropout rates and the absence of controlled trials in early decades.',
  },
  {
    no: '03',
    icon: 'Gavel',
    title: 'Courts & Coercion',
    text: 'Documented rulings (Griffin v. Coughlin and others) addressing mandated attendance, religious character, and constitutional concerns.',
  },
  {
    no: '04',
    icon: 'BookLock',
    title: 'Doctrine & Language',
    text: 'How phrases like "powerlessness," "your best thinking got you here," and "fake it till you make it" function within group conditioning.',
  },
];

const ARCHIVE = [
  { tag: 'Document', icon: 'FileText', title: 'The Big Book — Annotated', meta: '1939 · Foundational text', desc: 'Marginal analysis of the program’s central doctrine and its theological roots.' },
  { tag: 'Testimony', icon: 'MessageSquareQuote', title: 'Survivor Accounts', meta: '24 transcripts', desc: 'First-person records describing pressure, relapse-shaming, and exit difficulty.' },
  { tag: 'Research', icon: 'FlaskConical', title: 'Outcome Studies Index', meta: 'Peer-reviewed', desc: 'Curated citations measuring abstinence rates and methodological limits.' },
  { tag: 'Court', icon: 'Landmark', title: 'Legal Precedents', meta: 'US Appellate', desc: 'Cases examining the religious nature of mandated meetings.' },
  { tag: 'Article', icon: 'Newspaper', title: 'Historical Press', meta: '1940–2000', desc: 'Contemporary reporting tracing the movement’s growth and its critics.' },
  { tag: 'Interview', icon: 'Mic', title: 'Specialist Interviews', meta: 'Audio + text', desc: 'Conversations with clinicians, sociologists, and former members.' },
];

const FAQ = [
  { q: 'Is this site against recovery from addiction?', a: 'No. This archive supports recovery. It examines one specific organization, its claims, and its methods — encouraging informed, evidence-based choices.' },
  { q: 'What do you mean by "cult"?', a: 'We use the term in the analytical sense studied in the sociology of coercion — examining group dynamics, doctrine, and control mechanisms, not as a casual insult.' },
  { q: 'Are the documents here verified?', a: 'Every primary source in the Documents Archive carries a citation. Testimony is presented as personal account and labeled as such.' },
  { q: 'Can I submit my own testimony or sources?', a: 'Yes. Use the Contact section. This is a collaborative, evolving research archive.' },
];

export default function Index() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="grid place-items-center w-9 h-9 bg-foreground text-background font-mono text-sm tracking-tighter">AA</span>
            <div className="leading-none">
              <div className="font-display text-xl font-semibold tracking-tight">The Inquiry</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Investigative Archive</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV_GROUPS.map((g) => (
              <div key={g.label} className="relative group">
                <button className="flex items-center gap-1 py-2 text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider text-xs">
                  {g.label}
                  <Icon name="ChevronDown" size={13} className="opacity-50" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="w-64 bg-card border border-border shadow-xl p-2">
                    {g.items.map((it) => (
                      <a key={it} href="#" className="block px-3 py-2 text-sm text-foreground/75 hover:text-accent hover:bg-secondary transition-colors">
                        {it}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-card max-h-[70vh] overflow-y-auto">
            {NAV_GROUPS.map((g) => (
              <div key={g.label} className="px-5 py-3 border-b border-border/60">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2">{g.label}</div>
                <div className="grid grid-cols-1 gap-1">
                  {g.items.map((it) => (
                    <a key={it} href="#" className="text-sm text-foreground/80 py-1">{it}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="paper-grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-7 animate-rise" style={{ animationDelay: '0ms' }}>
                <span className="h-px w-10 bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Case File · No. 12</span>
              </div>
              <h1 className="font-display font-medium leading-[0.95] text-balance text-5xl sm:text-7xl lg:text-8xl animate-rise" style={{ animationDelay: '90ms' }}>
                Examining<br />
                Alcoholics Anonymous<br />
                <span className="italic text-accent">as a Cult</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: '180ms' }}>
                An organized, evidence-led inquiry into the claims, doctrine, and group
                dynamics of the world’s best-known recovery program — built for
                learning, comparison, and clear comprehension.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: '270ms' }}>
                <a href="#findings" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-wider hover:bg-accent transition-colors">
                  <Icon name="Search" size={16} /> Begin the Inquiry
                </a>
                <a href="#archive" className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors">
                  <Icon name="Archive" size={16} /> Open the Archive
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 animate-rise" style={{ animationDelay: '360ms' }}>
              <div className="border border-border bg-card/70 backdrop-blur-sm p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
                  <Icon name="Stamp" size={14} className="text-accent" /> Index Summary
                </div>
                <dl className="space-y-4 text-sm">
                  {[
                    ['Primary documents', '120+'],
                    ['Testimonies logged', '24'],
                    ['Court precedents', '08'],
                    ['Years surveyed', '1935–2025'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between border-b border-dashed border-border pb-3">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-display text-2xl font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Some details are <span className="redact px-1">held under review</span> pending
                  source verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">§ About This Archive</div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight">A neutral lens on extraordinary claims.</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              This project gathers and organizes material so that readers can evaluate
              the evidence themselves. We separate <span className="text-foreground font-medium">claim</span> from
              <span className="text-foreground font-medium"> evidence</span>, and personal
              testimony from peer-reviewed research — each clearly labeled.
            </p>
            <p>
              Our purpose is comprehension, not condemnation. Recovery matters. So does
              honest scrutiny of the methods, language, and power structures that shape
              millions of lives inside the rooms.
            </p>
            <div className="sm:col-span-2 grid sm:grid-cols-3 gap-4 mt-2">
              {[
                ['Eye', 'Transparent', 'Every source cited and traceable.'],
                ['GitCompare', 'Comparative', 'Claims set beside the data.'],
                ['GraduationCap', 'Educational', 'Structured for clear learning.'],
              ].map(([ic, t, d]) => (
                <div key={t} className="border border-border bg-background p-5">
                  <Icon name={ic} size={22} className="text-accent mb-3" />
                  <div className="font-display text-xl font-semibold text-foreground">{t}</div>
                  <div className="text-sm mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section id="findings" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">§ Key Findings Overview</div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium">The Four Pillars of the Inquiry</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Updated · June 2026</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {FINDINGS.map((f) => (
            <article key={f.no} className="bg-card p-8 group hover:bg-secondary transition-colors">
              <div className="flex items-start justify-between mb-6">
                <Icon name={f.icon} size={28} className="text-accent" />
                <span className="font-display text-5xl font-semibold text-border group-hover:text-accent/30 transition-colors">{f.no}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Claims vs Evidence */}
      <section id="compare" className="border-y border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">§ Claims & Evidence Comparison</div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-12">What is said · what is shown</h2>
          <div className="space-y-px">
            {[
              ['“AA is the most effective path to sobriety.”', 'Controlled outcome data shows comparable or lower retention than several alternative approaches.'],
              ['“It is spiritual, not religious.”', 'Courts have repeatedly identified explicitly religious content in mandated programs.'],
              ['“The program never fails — only people do.”', 'An unfalsifiable framing that shifts all failure onto the individual.'],
            ].map(([claim, evidence], i) => (
              <div key={i} className="grid md:grid-cols-2 gap-px bg-background/15">
                <div className="bg-foreground p-6 flex gap-4">
                  <Icon name="Quote" size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-background/50 mb-1">The Claim</div>
                    <p className="font-display text-xl italic">{claim}</p>
                  </div>
                </div>
                <div className="bg-foreground p-6 flex gap-4">
                  <Icon name="FileSearch" size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-background/50 mb-1">The Evidence</div>
                    <p className="text-[15px] leading-relaxed text-background/85">{evidence}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive grid */}
      <section id="archive" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">§ Documents Archive</div>
        <h2 className="font-display text-4xl sm:text-5xl font-medium mb-12">Primary Sources & Collections</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHIVE.map((a) => (
            <a key={a.title} href="#" className="group block border border-border bg-card p-6 hover:border-accent transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1">
                  <Icon name={a.icon} size={13} /> {a.tag}
                </span>
                <Icon name="ArrowUpRight" size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight mb-2">{a.title}</h3>
              <div className="font-mono text-[11px] text-muted-foreground mb-3">{a.meta}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-card/40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3 text-center">§ Frequently Asked</div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-center mb-12">Questions & Clarifications</h2>
          <div className="border-t border-border">
            {FAQ.map((item, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-xl font-medium">{item.q}</span>
                  <Icon name={faqOpen === i ? 'Minus' : 'Plus'} size={20} className="text-accent shrink-0" />
                </button>
                {faqOpen === i && (
                  <p className="pb-6 text-[15px] leading-relaxed text-muted-foreground animate-rise">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="border border-border bg-card paper-grain relative p-8 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">§ Contact & Contribute</div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight mb-4">Have a document, study, or testimony?</h2>
            <p className="text-muted-foreground leading-relaxed">
              This archive grows through contributions. Submit sources, request a
              correction, or reach the research desk directly.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              <input type="email" placeholder="Email address" className="bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
            </div>
            <textarea rows={4} placeholder="Your message, source link, or testimony…" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none" />
            <button type="button" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm uppercase tracking-wider hover:bg-accent transition-colors">
              <Icon name="Send" size={16} /> Submit to the Archive
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center w-9 h-9 bg-background text-foreground font-mono text-sm">AA</span>
                <span className="font-display text-xl font-semibold">The Inquiry</span>
              </div>
              <p className="text-sm text-background/60 leading-relaxed">An independent investigative archive. For education and informed discussion.</p>
            </div>
            {NAV_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">{g.label}</div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-background/15 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50 font-mono">
            <span>© 2026 The AA Inquiry · Investigative Archive</span>
            <span>Sources cited · Not legal or medical advice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

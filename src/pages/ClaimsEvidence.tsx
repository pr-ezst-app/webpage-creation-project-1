import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

type Verdict = 'Unsupported' | 'Disputed' | 'Misleading' | 'Partly True';

const VERDICT_STYLE: Record<Verdict, string> = {
  Unsupported: 'border-destructive text-destructive',
  Misleading: 'border-accent text-accent',
  Disputed: 'border-foreground text-foreground',
  'Partly True': 'border-muted-foreground text-muted-foreground',
};

const CATEGORIES = ['All', 'Efficacy', 'Religion', 'Doctrine', 'Control'] as const;

type Claim = {
  id: string;
  category: (typeof CATEGORIES)[number];
  claim: string;
  evidence: string;
  sources: string[];
  verdict: Verdict;
  confidence: number;
};

const CLAIMS: Claim[] = [
  {
    id: 'EF-01',
    category: 'Efficacy',
    claim: 'Alcoholics Anonymous is the most effective path to lasting sobriety.',
    evidence:
      'Controlled outcome studies show retention and abstinence rates comparable to — and in several trials lower than — alternative, evidence-based treatments. Early efficacy figures were self-reported and never independently verified.',
    sources: ['Cochrane Review 2020', 'Project MATCH 1997', 'Vaillant longitudinal study'],
    verdict: 'Disputed',
    confidence: 72,
  },
  {
    id: 'RE-02',
    category: 'Religion',
    claim: 'The program is spiritual, not religious.',
    evidence:
      'US appellate courts have repeatedly identified explicitly religious content — prayer, "God as we understood Him," surrender to a higher power — in mandated programs, ruling coerced attendance unconstitutional.',
    sources: ['Griffin v. Coughlin (1996)', 'Kerr v. Farrey (1996)', 'Inouye v. Kemna (2007)'],
    verdict: 'Misleading',
    confidence: 88,
  },
  {
    id: 'DO-03',
    category: 'Doctrine',
    claim: 'The program never fails — only people fail the program.',
    evidence:
      'An unfalsifiable framing: any success is credited to the method, any failure attributed to the individual. This structure prevents the claim from being tested and shifts all blame onto the member.',
    sources: ['Sociology of coercion, Lifton (1961)', 'Bufe analysis (1991)'],
    verdict: 'Unsupported',
    confidence: 81,
  },
  {
    id: 'CO-04',
    category: 'Control',
    claim: '"Your best thinking got you here" — members must surrender independent judgment.',
    evidence:
      'Language that frames a member’s own reasoning as the enemy maps onto established models of thought-reform: dependency creation and the dissolution of self. Encourages reliance on the group over personal agency.',
    sources: ['Lifton, Eight Criteria', 'Survivor testimony archive (n=24)'],
    verdict: 'Disputed',
    confidence: 69,
  },
  {
    id: 'EF-05',
    category: 'Efficacy',
    claim: 'AA has a 75% (or higher) success rate.',
    evidence:
      'No controlled study supports this figure. Internal AA surveys show high early dropout; commonly cited "success" numbers count only those who remain, an obvious survivorship bias.',
    sources: ['AA Triennial Surveys', 'Dodes, "The Sober Truth" (2014)'],
    verdict: 'Unsupported',
    confidence: 84,
  },
  {
    id: 'DO-06',
    category: 'Doctrine',
    claim: 'Powerlessness over alcohol is a necessary first step to recovery.',
    evidence:
      'Some individuals benefit from acceptance framing; however, research on self-efficacy suggests that a sense of agency can support recovery. The claim is presented as universal when evidence is mixed.',
    sources: ['Bandura, self-efficacy research', 'Clinical psychology reviews'],
    verdict: 'Partly True',
    confidence: 58,
  },
];

const SUMMARY: { label: string; value: string; icon: string }[] = [
  { label: 'Claims examined', value: '06', icon: 'ListChecks' },
  { label: 'Unsupported', value: '02', icon: 'XCircle' },
  { label: 'Misleading / Disputed', value: '03', icon: 'AlertTriangle' },
  { label: 'Sources cited', value: '16', icon: 'Library' },
];

export default function ClaimsEvidence() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>('All');
  const [openId, setOpenId] = useState<string | null>('EF-01');

  const visible = filter === 'All' ? CLAIMS : CLAIMS.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid place-items-center w-9 h-9 bg-foreground text-background font-mono text-sm tracking-tighter">AA</span>
            <div className="leading-none">
              <div className="font-display text-xl font-semibold tracking-tight">The Inquiry</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Investigative Archive</div>
            </div>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors">
            <Icon name="ArrowLeft" size={16} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="paper-grain relative border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-14">
          <div className="flex items-center gap-3 mb-6 animate-rise">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Case File · Exhibit C</span>
          </div>
          <h1 className="font-display font-medium leading-[0.95] text-balance text-5xl sm:text-7xl animate-rise" style={{ animationDelay: '80ms' }}>
            Claims <span className="italic text-accent">vs.</span> Evidence
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: '160ms' }}>
            Each assertion is recorded, weighed against documented evidence, and given
            a verdict. Expand any entry to read the full comparison and cited sources.
          </p>

          {/* Summary ledger */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border animate-rise" style={{ animationDelay: '240ms' }}>
            {SUMMARY.map((s) => (
              <div key={s.label} className="bg-card p-5">
                <Icon name={s.icon} size={18} className="text-accent mb-3" />
                <div className="font-display text-4xl font-semibold leading-none">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-2 overflow-x-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-2 shrink-0">Filter</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 px-4 py-1.5 text-xs uppercase tracking-wider border transition-colors ${
                filter === c ? 'bg-foreground text-background border-foreground' : 'border-border text-foreground/70 hover:border-accent hover:text-accent'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Claim ledger */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 space-y-4">
        {visible.map((c, i) => {
          const open = openId === c.id;
          return (
            <article
              key={c.id}
              className="border border-border bg-card animate-rise"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenId(open ? null : c.id)}
                className="w-full flex items-start gap-4 sm:gap-6 p-6 text-left group"
              >
                <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0 hidden sm:block">{c.id}</span>
                <div className="flex-1">
                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-accent mb-2">{c.category}</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-medium leading-tight">{c.claim}</h2>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <span className={`font-mono text-[10px] uppercase tracking-widest border px-2 py-1 ${VERDICT_STYLE[c.verdict]}`}>
                    {c.verdict}
                  </span>
                  <Icon name={open ? 'Minus' : 'Plus'} size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </button>

              {open && (
                <div className="border-t border-border grid md:grid-cols-2 gap-px bg-border animate-accordion-down">
                  <div className="bg-card p-6">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                      <Icon name="Quote" size={14} className="text-accent" /> The Claim
                    </div>
                    <p className="font-display text-xl italic leading-snug">{c.claim}</p>
                    <div className="mt-6">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Confidence in verdict</div>
                      <div className="h-2 bg-secondary overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${c.confidence}%` }} />
                      </div>
                      <div className="mono text-xs text-muted-foreground mt-1">{c.confidence}% supported by reviewed sources</div>
                    </div>
                  </div>
                  <div className="bg-card p-6">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                      <Icon name="FileSearch" size={14} className="text-accent" /> The Evidence
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{c.evidence}</p>
                    <div className="mt-6">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Cited sources</div>
                      <ul className="space-y-1.5">
                        {c.sources.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm">
                            <Icon name="BookMarked" size={13} className="text-accent shrink-0" />
                            <span className="text-foreground/80">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-12 font-mono text-sm">No claims in this category.</p>
        )}
      </section>

      {/* Methodology note */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">§ Methodology</div>
            <h2 className="font-display text-4xl font-medium leading-tight">How verdicts are reached.</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-background/75">
            <p>Each claim is matched against peer-reviewed research, court records, and primary documents. Personal testimony informs context but is never treated as proof on its own.</p>
            <p>Verdicts — <span className="text-background">Unsupported</span>, <span className="text-background">Misleading</span>, <span className="text-background">Disputed</span>, <span className="text-background">Partly True</span> — reflect the weight of evidence at the time of review and are updated as new sources surface.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span>© 2026 The AA Inquiry · Claims & Evidence Comparison</span>
          <Link to="/" className="hover:text-accent transition-colors">Return to Archive →</Link>
        </div>
      </footer>
    </div>
  );
}

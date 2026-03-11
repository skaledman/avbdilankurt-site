type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[linear-gradient(135deg,rgba(201,168,76,0.08),transparent_35%),linear-gradient(180deg,#0b1020_0%,#06080f_100%)] pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_1px,transparent_1px,transparent_90px)]" />
      <div className="section-inner relative py-0">
        {eyebrow && <span className="section-kicker">{eyebrow}</span>}
        <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-[1.0625rem]">
          {description}
        </p>
      </div>
    </section>
  );
}
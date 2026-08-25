export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">

      {/* =========================
          FLOATING GLASS HEADER
      ========================== */}
      <div className="sticky top-0 z-50 px-3 pt-3 md:px-4">
        <header className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/20 bg-black/35 shadow-[0_12px_40px_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-xl">

          {/* Subtle chrome highlight across top */}
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="flex items-center justify-between px-5 py-3 md:px-8">
            
            {/* Lightbulb Logo */}
            <a
              href="#top"
              aria-label="Swift Fabrications home"
              className="group relative block h-9 w-9 shrink-0"
            >
              {/* Light Off */}
              <img
                src="/images/logo/icon-on-lightbulb.svg"
                alt="Swift Fabrications"
                className="absolute inset-0 h-full w-full object-contain opacity-100 transition-all duration-300 group-hover:scale-105 group-hover:opacity-0"
              />

              {/* Light On */}
              <img
                src="/images/logo/icon-off-lightbulb.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              />
            </a>

            {/* Navigation */}
            <nav className="hidden items-center gap-7 md:flex">
              <a
                href="#services"
                className="text-sm text-zinc-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#00b7e8]"
              >
                Services
              </a>

              <a
                href="#about"
                className="text-sm text-zinc-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#ea0a8c]"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm text-zinc-400 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#fed206]"
              >
                Contact
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-zinc-100 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
              >
                Get a Quote
              </a>
            </nav>

          </div>
        </header>
      </div>

      {/* =========================
          HERO
      ========================== */}
      <section
        id="top"
        className="flex flex-col items-center px-6 pb-28 pt-20 text-center md:pt-10"
      >

        {/* Complete Chrome Logo */}
        <div className="swift-hero-logo">
          <div className="swift-hero-ambient" />

          <img
            src="/images/logo/chrome-header-swift-fab.svg"
            alt="Swift Fabrications"
            className="swift-hero-image"
          />
        </div>

        {/* Hero Text */}
        <div className="mt-12 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Your <span className="text-[#FED206]">imagination.</span> Our fabrication.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
            From custom apparel and stickers to graphics and specialty projects,
            we help bring bold ideas to life.
          </p>

          <a
            href="#services"
            className="mt-8 inline-block text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            Explore What We Do ↓
          </a>
        </div>

      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="services"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-5xl">

          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Design. Print. Create.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-zinc-400">
              From the first idea to the final product, Swift Fabrications helps
              turn creative concepts into finished pieces people remember.
            </p>
          </div>


          {/* Cards */}
          <div className="group grid gap-6 md:grid-cols-3">

            {/* Design */}
            <article className="rounded-2xl border border-white/10 bg-[#181818] p-8 transition duration-300 group-hover:opacity-40 hover:!opacity-100 hover:border-white/20">
              <h3 className="text-2xl font-semibold">
                Design
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Logos, graphics, illustrations, layouts, and creative assets
                built to give your project a strong visual identity.
              </p>
            </article>


            {/* Print */}
            <article className="rounded-2xl border border-white/10 bg-[#181818] p-8 transition duration-300 group-hover:opacity-40 hover:!opacity-100 hover:border-white/20">
              <h3 className="text-2xl font-semibold">
                Print
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Custom apparel, stickers, decals, banners, and merchandise
                produced with clean details and bold presentation.
              </p>
            </article>


            {/* Create */}
            <article className="rounded-2xl border border-white/10 bg-[#181818] p-8 transition duration-300 group-hover:opacity-40 hover:!opacity-100 hover:border-white/20">
              <h3 className="text-2xl font-semibold">
                Create
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                Specialty projects, custom pieces, and branded items made for
                people who want something different from the standard template.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =========================
          ABOUT PLACEHOLDER
      ========================== */}
      <section
        id="about"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            About Swift
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Made by people who care about the details.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-zinc-400">
            We believe great creative work comes from conversation,
            collaboration, experimentation, and craftsmanship.
          </p>
        </div>
      </section>

        {/* =========================
            PORTFOLIO TRANSITION
        ========================== */}
      <section
        aria-hidden="true"
        className="relative h-[260px] overflow-hidden md:h-[340px]"
      >
        {/* Dark upper half */}
        <div className="absolute inset-x-0 top-0 h-[46%] bg-[#121212]" />

        {/* Cream lower half */}
        <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[#f7f1e4]" />

        {/* CMYK Transition Artwork */}
        <img
          src="/images/graphics/portfolio-transition.svg"
          alt=""
          className="absolute left-1/2 top-1/2 w-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 md:w-full"
        />
      </section>

      {/* =========================
          SELECTED WORK
      ========================== */}
      <section
        id="portfolio"
        className="bg-[#f7f1e4] px-6 pb-32 pt-20 text-[#121212] md:px-10 md:pt-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[280px_1fr] lg:gap-16">

            {/* =========================
                LEFT SIDE
            ========================== */}
            <div className="lg:pt-8">

              <p className="text-sm font-black uppercase tracking-[0.08em]">
                Selected Work
              </p>

              <div className="mt-3 h-[2px] w-32 bg-[#121212]" />

              <h2 className="mt-8 text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-6xl">
                Ideas
                <br />
                Made
                <br />
                Real.
              </h2>

              <p className="mt-8 max-w-[240px] text-base leading-relaxed text-black/65">
                A few projects shaped through conversation, experimentation,
                design, and hands-on production.
              </p>

              {/* Decorative Stamp */}
              <div className="mt-16 hidden rotate-[-3deg] border-2 border-black px-4 py-3 lg:inline-block">
                <p className="text-xs font-black uppercase leading-tight">
                  Design. Print.
                  <br />
                  Create.
                </p>
              </div>

            </div>


            {/* =========================
                RIGHT SIDE — PROJECT GRID
            ========================== */}
            <div className="grid gap-7 md:grid-cols-2">

              {/* PROJECT 1 */}
              <a href="#" className="group">
                <article className="overflow-hidden border-2 border-black bg-[#f7f1e4] shadow-[7px_7px_0_#121212] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[11px_11px_0_#121212]">

                  {/* Image */}
                  <div className="overflow-hidden bg-[#121212]">
                    <img
                      src="/images/portfolio/project-1-cover.jpg"
                      alt="Swift Fabrications apparel project"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex items-end justify-between gap-6 p-5">

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="bg-[#00b7e8] px-3 py-1 text-[11px] font-black uppercase">
                          Apparel
                        </span>

                        <h3 className="text-xl font-black uppercase">
                          Project Name
                        </h3>
                      </div>

                      <p className="mt-3 text-xs text-black/60">
                        Design / Print / Production
                      </p>
                    </div>

                    <span className="text-3xl font-light transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>
                </article>
              </a>


              {/* PROJECT 2 */}
              <a href="#" className="group">
                <article className="overflow-hidden border-2 border-black bg-[#f7f1e4] shadow-[7px_7px_0_#121212] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[11px_11px_0_#121212]">

                  {/* Image */}
                  <div className="overflow-hidden bg-[#121212]">
                    <img
                      src="/images/portfolio/project-2-cover.JPG"
                      alt="Swift Fabrications sticker project"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex items-end justify-between gap-6 p-5">

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="bg-[#ea0a8c] px-3 py-1 text-[11px] font-black uppercase">
                          Stickers
                        </span>

                        <h3 className="text-xl font-black uppercase">
                          Project Name
                        </h3>
                      </div>

                      <p className="mt-3 text-xs text-black/60">
                        Illustration / Print
                      </p>
                    </div>

                    <span className="text-3xl font-light transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>
                </article>
              </a>


              {/* =========================
                  PROJECT 3 — WIDE
              ========================== */}
              <a
                  href="/portfolio/brand-identity"
                  className="group md:col-span-2"
              >
                
                <article className="grid overflow-hidden border-2 border-black bg-[#f7f1e4] shadow-[7px_7px_0_#121212] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[11px_11px_0_#121212] md:grid-cols-[1.15fr_1fr]">

                  {/* Image */}
                  <div className="overflow-hidden bg-[#121212]">
                    <img
                      src="/images/portfolio/project-3-cover.JPG"
                      alt="Swift Fabrications brand identity project"
                      className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>


                  {/* Project Details */}
                  <div className="flex flex-col justify-between p-7 md:p-9">

                    <div>
                      <span className="inline-block bg-[#fed206] px-3 py-1 text-[11px] font-black uppercase">
                        Brand Identity
                      </span>

                      <h3 className="mt-5 text-2xl font-black uppercase leading-tight md:text-3xl">
                        Swift Fabrications
                        <br />
                        Brand System
                      </h3>

                      <p className="mt-3 text-xs font-medium">
                        Brand Strategy / Identity / Print Collateral
                      </p>

                      <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/65">
                        A closer look at the thinking, design decisions, and
                        craftsmanship behind the finished project.
                      </p>
                    </div>


                    <div className="mt-10 flex items-center gap-5">
                      <span className="text-xs font-black uppercase">
                        View Project
                      </span>

                      <div className="h-[2px] flex-1 bg-black" />

                      <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>

                  </div>

                </article>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT PLACEHOLDER
      ========================== */}
      <section
        id="contact"
         className="bg-[#f7f1e4] px-6 pb-32 pt-16 text-[#121212]"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Have an idea?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Bring us the idea. We&apos;ll help turn it into something real.
          </p>
        </div>
      </section>

    </main>
  );
}
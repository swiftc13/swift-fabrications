export default function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e4] text-[#121212]">

      {/* =========================
          PROJECT HEADER
      ========================== */}
      <section className="px-6 pb-16 pt-10 md:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl">

          {/* Back Link */}
          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-50"
          >
            ← Back to Work
          </a>

          {/* Project Intro */}
          <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">

            <div>
              <span className="inline-block bg-[#fed206] px-3 py-1 text-xs font-black uppercase tracking-wider">
                Brand Identity
              </span>

              <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-8xl">
                Swift
                <br />
                Fabrications
              </h1>
            </div>

            <div className="border-t-2 border-black pt-5">
              <p className="text-sm font-bold uppercase tracking-wider">
                Brand Strategy / Identity / Print
              </p>

              <p className="mt-5 leading-relaxed text-black/65">
                Building a visual identity that reflects the energy,
                craftsmanship, experimentation, and personality behind
                Swift Fabrications.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          HERO IMAGE
      ========================== */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden border-2 border-black bg-[#121212] shadow-[10px_10px_0_#121212]">
          <img
            src="/images/portfolio/project-3-cover.jpg"
            alt="Swift Fabrications brand identity"
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>


      {/* =========================
          PROJECT OVERVIEW
      ========================== */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.7fr_1.3fr]">

          {/* Left */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em]">
              The Project
            </p>

            <div className="mt-3 h-[2px] w-24 bg-black" />
          </div>

          {/* Right */}
          <div>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Building a brand that feels as creative as the work.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-relaxed text-black/65 md:grid-cols-2">
              <p>
                Swift Fabrications needed an identity that could live between
                design studio, print shop, and creative workshop without feeling
                like a traditional production company.
              </p>

              <p>
                The goal was to create something polished enough to feel
                professional while still leaving room for experimentation,
                color, texture, and personality.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          DESIGN SYSTEM
      ========================== */}
      <section className="bg-[#121212] px-6 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.15em] text-zinc-400">
            Visual System
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            Serious up front.
            <br />
            Playful underneath.
          </h2>

          <p className="mt-8 max-w-2xl leading-relaxed text-zinc-400">
            The visual language combines dark, polished surfaces with bright
            CMYK accents, tactile print textures, bold typography, and
            intentionally imperfect graphic elements.
          </p>


          {/* Color Blocks */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

            <div className="flex aspect-square items-end bg-[#00b7e8] p-5 text-black">
              <span className="text-sm font-black uppercase">
                Cyan
                <br />
                #00B7E8
              </span>
            </div>

            <div className="flex aspect-square items-end bg-[#ea0a8c] p-5 text-black">
              <span className="text-sm font-black uppercase">
                Magenta
                <br />
                #EA0A8C
              </span>
            </div>

            <div className="flex aspect-square items-end bg-[#fed206] p-5 text-black">
              <span className="text-sm font-black uppercase">
                Yellow
                <br />
                #FED206
              </span>
            </div>

            <div className="flex aspect-square items-end border border-white/20 bg-[#121212] p-5">
              <span className="text-sm font-black uppercase">
                Black
                <br />
                #121212
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          PROJECT IMAGES
      ========================== */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-sm font-black uppercase tracking-[0.15em]">
              In Practice
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              From identity to application.
            </h2>
          </div>


          {/* Placeholder Image Grid */}
          <div className="grid gap-6 md:grid-cols-2">

            <div className="overflow-hidden border-2 border-black bg-[#121212]">
              <img
                src="/images/portfolio/project-3-cover.jpg"
                alt="Swift Fabrications identity application"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden border-2 border-black bg-[#121212]">
              <img
                src="/images/portfolio/project-3-cover.jpg"
                alt="Swift Fabrications print application"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="overflow-hidden border-2 border-black bg-[#121212] md:col-span-2">
              <img
                src="/images/portfolio/project-3-cover.jpg"
                alt="Swift Fabrications complete brand identity"
                className="aspect-[16/7] w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          NEXT PROJECT
      ========================== */}
      <section className="border-t-2 border-black px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em]">
              Next Project
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase">
              Keep Exploring.
            </h2>
          </div>

          <a
            href="/#portfolio"
            className="inline-flex items-center gap-4 text-lg font-black uppercase transition-transform hover:translate-x-2"
          >
            View All Work
            <span className="text-3xl">→</span>
          </a>

        </div>
      </section>

    </main>
  );
}
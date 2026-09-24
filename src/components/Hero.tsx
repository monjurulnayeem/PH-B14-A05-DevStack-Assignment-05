

function Hero() {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto grid min-h-[500px] max-w-[1300px] items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-0 lg:py-24">

        {/* Hero Content */}
        <div>
          <h1 className="max-w-[620px] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[54px]">
            Build Your Ideal

            <span className="brand-gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-sm leading-6 text-slate-500 sm:text-[15px]">
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and put together
            the stack that fits your next project.
          </p>

          {/* Hero Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-md px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-6 py-2.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/public/images/banner-stack.png"
            alt="Development stack illustration"
            className="w-full max-w-[430px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
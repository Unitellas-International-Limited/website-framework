import classNames from "classnames";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section
      className={classNames(
        "relative isolate flex min-h-[300px] items-center justify-center overflow-hidden bg-[#102A43] px-6 py-20 sm:min-h-[340px] sm:px-8 md:min-h-[380px]",
        "before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_75%_20%,rgba(21,201,228,0.14),transparent_32%),radial-gradient(circle_at_15%_90%,rgba(21,201,228,0.08),transparent_30%)]",
        "after:absolute after:inset-0 after:-z-10 after:opacity-40 after:[background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] after:[background-size:48px_48px]",
      )}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-[#15C9E4]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-[#15C9E4]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
          <span className="h-px w-6 bg-[#15C9E4]" />
          Unitellas International
          <span className="h-px w-6 bg-[#15C9E4]" />
        </span>

        <h1 className="font-Mongoose text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {subtitle !== undefined && (
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Cloud Engineering · Level 7 · 2026
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Microsoft Azure
              <span className="mt-2 block text-blue-600">
                Cloud Engineering Assessment
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              A technical implementation report documenting the design,
              deployment, testing and analysis of Microsoft Azure cloud
              solutions across storage, automation, containerisation,
              networking and security.
            </p>

            {/* Primary navigation */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/task-1/"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                View Task 1 →
              </Link>

              <Link
                href="/references/"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                References
              </Link>
            </div>

            {/* Technology badges */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {[
                "Microsoft Azure",
                "Cloud Engineering",
                "Technical Evidence",
                "Architecture",
                "2026 Assessment",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Assessment Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              From implementation to technical understanding
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              This assessment documents the practical implementation of
              Microsoft Azure services together with the technical reasoning
              behind each solution. The report uses configuration evidence,
              verification testing, architecture diagrams and written
              interpretation to demonstrate both implementation capability and
              understanding of the underlying cloud concepts.
            </p>

            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              Each task is presented as a technical journey from planning and
              configuration through to verification, analysis and reflection.
              This provides evidence of what was implemented while also
              explaining how the individual Azure services contribute to a
              complete cloud architecture.
            </p>
          </div>

          {/* Report approach */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Report Approach
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  number: "01",
                  title: "Purpose",
                  text: "Explain why the Azure service or configuration is required.",
                },
                {
                  number: "02",
                  title: "Action",
                  text: "Document the implementation and configuration process.",
                },
                {
                  number: "03",
                  title: "Result",
                  text: "Verify the technical outcome using practical evidence.",
                },
                {
                  number: "04",
                  title: "Technical Significance",
                  text: "Interpret what the result means within the wider cloud architecture.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4">
                  <span className="text-xs font-bold text-blue-600">
                    {item.number}
                  </span>

                  <div>
                    <p className="font-bold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Assessment tasks */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Assessment Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Three implementation tasks
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Each task focuses on a different area of Microsoft Azure cloud
              engineering and is supported by practical implementation
              evidence, architecture diagrams and technical analysis.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Task 1 */}
            <article className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                  Task 01
                </span>

                <div className="flex gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    30%
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Completed
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold">
                Azure Storage & Automation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Design and implementation of an Azure Storage solution
                incorporating Blob Storage, event-driven automation, access
                control, recovery, lifecycle management and structured NoSQL
                storage.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Blob Storage",
                  "Functions",
                  "RBAC",
                  "Azure Files",
                  "Lifecycle",
                  "Table Storage",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <Link
                  href="/task-1/"
                  className="text-sm font-bold text-blue-600 transition group-hover:text-blue-800"
                >
                  View Task 1 Report →
                </Link>
              </div>
            </article>

            {/* Task 2 */}
            <article className="rounded-2xl border border-slate-200 bg-slate-50/50 p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Task 02
                </span>

                <div className="flex gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    35%
                  </span>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    Upcoming
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold text-slate-800">
                Containerisation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Containerising an application and deploying it using Microsoft
                Azure container services.
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5 text-sm font-medium text-slate-500">
                Docker · ACR · ACI
              </div>
            </article>

            {/* Task 3 */}
            <article className="rounded-2xl border border-slate-200 bg-slate-50/50 p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Task 03
                </span>

                <div className="flex gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    35%
                  </span>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    Upcoming
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold text-slate-800">
                Networking & Security
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Azure virtual networking, compute infrastructure, routing and
                network security controls.
              </p>

              <div className="mt-8 border-t border-slate-200 pt-5 text-sm font-medium text-slate-500">
                VNet · Virtual Machines · Routing · Security
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Assessment methodology */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-10 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Evidence-Based Assessment
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Implementation evidence supported by architectural
                understanding.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-300">
                Screenshots provide evidence that the Azure services were
                configured and tested, while architecture diagrams demonstrate
                how those services relate to one another within the wider cloud
                solution.
              </p>

              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-5">
                <p className="font-semibold text-white">
                  Screenshots prove the implementation.
                </p>
                <p className="mt-1 font-semibold text-blue-400">
                  Architecture diagrams explain the implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Research & Sources
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                APA 7th Edition References
              </h2>

              <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                Microsoft documentation and supporting technical sources used
                throughout the assessment are documented in the reference list.
              </p>
            </div>

            <Link
              href="/references/"
              className="shrink-0 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              View References →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Microsoft Azure Cloud Engineering Assessment</p>
          <p>Cloud Engineering · Level 7 · 2026</p>
        </div>
      </footer>
    </main>
  );
}
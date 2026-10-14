export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Cloud Engineering · Level 7
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Azure Cloud Engineering
            <span className="mt-2 block text-blue-600">
              Technical Assessment
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A technical implementation report documenting cloud storage,
            automation, containerisation, networking and security using
            Microsoft Azure.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium">
              Microsoft Azure
            </span>

            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium">
              Cloud Engineering
            </span>

            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-medium">
              2026 Assessment
            </span>
          </div>
        </div>
      </section>

      {/* Assessment Tasks */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Assessment Overview
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Three implementation tasks
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Each section will document the purpose, implementation process,
            technical evidence, results and learning outcomes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Task 1 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Task 01
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                30%
              </span>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Storage & Automation
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Azure Storage, Blob Storage, Azure Functions and event-driven
              automation.
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5 text-sm font-medium text-slate-500">
              Blob Storage · Functions · Automation
            </div>
          </article>

          {/* Task 2 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Task 02
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                35%
              </span>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Containerisation
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Containerising an application and deploying it using Azure
              container services.
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5 text-sm font-medium text-slate-500">
              Docker · ACR · ACI
            </div>
          </article>

          {/* Task 3 */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Task 03
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                35%
              </span>
            </div>

            <h3 className="mt-8 text-xl font-bold">
              Networking & Security
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Azure virtual networking, virtual machines, routing and network
              security controls.
            </p>

            <div className="mt-8 border-t border-slate-100 pt-5 text-sm font-medium text-slate-500">
              VNet · Virtual Machines · Security
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
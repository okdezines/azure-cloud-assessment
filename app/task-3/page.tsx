import type { Metadata } from "next";
import Task3Introduction from "../Task3Introduction";
import Task3Architecture from "../Task3Architecture";
import Task3NetworkDeployment from "../Task3NetworkDeployment";
import Task3FirewallDeployment from "../Task3FirewallDeployment";
import Task3JumpHost from "../Task3JumpHost";
import Task3Routing from "../Task3Routing";
import Task3FirewallPolicies from "../Task3FirewallPolicies";
import Task3Connectivity from "../Task3Connectivity";
import Task3SecurityEvaluation from "../Task3SecurityEvaluation";
import Task3Monitoring from "../Task3Monitoring";
import Task3Conclusion from "../Task3Conclusion";

export const metadata: Metadata = {
  title: "Task 3 | Azure Firewall & Network Security",
  description:
    "Azure Cloud Engineering Assessment Task 3 — firewall architecture, network security and implementation evidence.",
};

export default function Task3Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 text-slate-800 sm:px-8">
      <header className="mb-12 border-b border-slate-300 pb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
          Microsoft Azure Cloud Assessment
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Task 3 — Azure Firewall & Network Security
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Architecture, security risk evaluation, firewall implementation and
          validation of restricted website access in Microsoft Azure.
        </p>

        <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
          <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">
            Assessment Weight: 35%
          </span>

          <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-800">
            Implementation Documentation
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700">
            Learning Outcome: LO2
          </span>
        </div>
      </header>

      <section className="mb-14">
        <Task3Introduction />
      </section>
      <section className="mb-14">
        <Task3Architecture />
      </section>
      <Task3NetworkDeployment />

      <Task3FirewallDeployment />
      <Task3JumpHost />
      <Task3Routing />
      <Task3FirewallPolicies />
      <Task3Connectivity />
      <Task3Monitoring />
      <Task3SecurityEvaluation />
      <Task3Conclusion />

      <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
        Task 3 — Azure Firewall and network security implementation
        documentation.
      </footer>
    </main>
  );
}

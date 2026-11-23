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

// Keep each report section within the mobile viewport. Oversized diagrams,
// tables, and code blocks can scroll within their own section.
function ReportSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-0 max-w-full overflow-x-auto [overflow-wrap:anywhere]">
      {children}
    </section>
  );
}

export default function Task3Page() {
  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-4 py-8 text-slate-800 sm:px-8 sm:py-12">
      <header className="mb-8 min-w-0 border-b border-slate-300 pb-6 sm:mb-12 sm:pb-8">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-blue-600 sm:text-xs sm:tracking-widest">
          Microsoft Azure Cloud Assessment
        </p>

        <h1 className="max-w-full break-words text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
          Task 3 — Azure Firewall &amp; Network Security
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          Architecture, security risk evaluation, firewall implementation and
          validation of restricted website access in Microsoft Azure.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold sm:gap-3">
          <span className="max-w-full rounded-full bg-blue-50 px-3 py-2 text-blue-700">
            Assessment Weight: 35%
          </span>
          <span className="max-w-full rounded-full bg-amber-50 px-3 py-2 text-amber-800">
            Implementation Documentation
          </span>
          <span className="max-w-full rounded-full bg-slate-100 px-3 py-2 text-slate-700">
            Learning Outcome: LO2
          </span>
        </div>
      </header>

      <div className="min-w-0 space-y-10 sm:space-y-14">
        <ReportSection>
          <Task3Introduction />
        </ReportSection>
        <ReportSection>
          <Task3Architecture />
        </ReportSection>
        <ReportSection>
          <Task3NetworkDeployment />
        </ReportSection>
        <ReportSection>
          <Task3FirewallDeployment />
        </ReportSection>
        <ReportSection>
          <Task3JumpHost />
        </ReportSection>
        <ReportSection>
          <Task3Routing />
        </ReportSection>
        <ReportSection>
          <Task3FirewallPolicies />
        </ReportSection>
        <ReportSection>
          <Task3Connectivity />
        </ReportSection>
        <ReportSection>
          <Task3Monitoring />
        </ReportSection>
        <ReportSection>
          <Task3SecurityEvaluation />
        </ReportSection>
        <ReportSection>
          <Task3Conclusion />
        </ReportSection>
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500 sm:mt-14">
        Task 3 — Azure Firewall and network security implementation
        documentation.
      </footer>
    </main>
  );
}

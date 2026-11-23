import React from "react";

const base = "/images/task-3/3.5/";

const evidence = [
  {
    section: "3.5.2",
    title: "Windows Jump Host deployment",
    file: "01-jumphost-overview.png",
    purpose: "Establish an administrative entry point in PublicSN.",
    action: "Reviewed the deployed Windows Jump Host in Azure Portal.",
    result:
      "The overview records the jump host resource; successful remote access is demonstrated separately.",
  },
  {
    section: "3.5.3",
    title: "Jump Host network security group",
    file: "02-jumphost-nsg.png",
    purpose: "Restrict inbound management traffic to the administrative host.",
    action: "Inspected the jump host network security group configuration.",
    result:
      "The screenshot documents the NSG configuration. Its permitted source and rule priority should be checked against the actual rule details.",
  },
  {
    section: "3.5.4",
    title: "Remote Desktop connection",
    file: "03-rdp-connection-progress.png",
    purpose: "Establish a remote Windows session using RDP.",
    action: "Initiated a Remote Desktop connection to the jump host.",
    result:
      "This screenshot records the connection process; the following figure demonstrates the remote session.",
  },
  {
    section: "3.5.5",
    title: "Windows RDP session verified",
    file: "04-rdp-session.png",
    purpose: "Confirm that the administrative host is reachable.",
    action:
      "Connected to the Windows Jump Host and inspected its desktop and terminal.",
    result:
      "The remote desktop session demonstrates successful administrative access to the jump host.",
  },
  {
    section: "3.5.6",
    title: "Private Ubuntu VM configuration",
    file: "05-private-vm-overview.png",
    purpose: "Identify the protected Linux workload in PrivateSN.",
    action: "Reviewed the Linux virtual machine configuration in Azure Portal.",
    result:
      "The VM overview supports the resource identity and configuration; private-only exposure should be confirmed from its networking settings.",
  },
  {
    section: "3.5.7",
    title: "SSH access to the private VM",
    file: "06-private-vm-ssh.png",
    purpose:
      "Demonstrate the second administrative hop from Windows to Ubuntu.",
    action:
      "Used a terminal in the jump host session to connect to the Ubuntu VM over SSH.",
    result:
      "The terminal evidence supports private-VM command-line access through the jump host.",
  },
];

function AdministrativeAccessDiagram() {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="px-4 py-6 sm:px-8">
        <h3 className="mb-6 text-sm font-semibold text-slate-900">
          Administrative Access Architecture
        </h3>

        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Local workstation */}
          <div className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
            <p className="font-semibold text-slate-900">
              Local Windows Workstation
            </p>
            <p className="text-xs text-slate-600">Administrator</p>
          </div>

          <div className="py-3 text-xs text-slate-600">
            <div>↓</div>
            <div>RDP · TCP 3389</div>
            <div>↓</div>
          </div>

          {/* Jump Host */}
          <div className="w-full rounded-lg border border-blue-300 bg-blue-50 px-4 py-4">
            <p className="font-semibold text-blue-900">Windows Jump Host</p>
            <p className="text-xs text-blue-800">PublicSN · 10.0.0.4</p>
            <p className="text-xs text-blue-700">Source-restricted NSG</p>
          </div>

          <div className="py-3 text-xs text-slate-600">
            <div>↓</div>
            <div>SSH · TCP 22</div>
            <div>↓</div>
          </div>

          {/* Private VM */}
          <div className="w-full rounded-lg border border-green-300 bg-green-50 px-4 py-4">
            <p className="font-semibold text-green-900">Ubuntu Test VM</p>
            <p className="text-xs text-green-800">PrivateSN · 10.0.0.68</p>
            <p className="text-xs text-green-700">
              No public IP required for administration
            </p>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600">
        <strong>Figure 3.13 —</strong> Administrative access architecture
        showing RDP access to the Windows Jump Host followed by private SSH
        connectivity to the Ubuntu VM.
      </figcaption>
    </figure>
  );
}

export default function Task3JumpHost() {
  return (
    <section
      id="task3-section-3-5"
      className="mb-14 space-y-7 text-slate-800 print:break-before-page"
    >
      <header className="border-b border-slate-200 pb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Section 3.5
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          Jump Host &amp; Private VM
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Controlled administrative access using RDP and SSH
        </p>

        <AdministrativeAccessDiagram />
      </header>
      <div className="space-y-3 text-sm leading-7">
        <h3 className="font-bold text-slate-950">
          3.5.1 Purpose and administrative access strategy
        </h3>
        <p>
          The deployment separates the public-facing administrative Windows Jump
          Host in <strong>PublicSN (10.0.0.0/26)</strong> from the protected
          Ubuntu workload in <strong>PrivateSN (10.0.0.64/26)</strong>. The
          documented administrative path uses Remote Desktop Protocol (RDP) to
          reach the jump host, followed by Secure Shell (SSH) to access the
          Linux VM at <strong>10.0.0.68</strong>.
        </p>
        <p>
          This two-stage pattern reduces the need for direct internet-facing
          administrative access to the private VM. The existence of distinct
          subnets is not itself a security guarantee; network security rules and
          the VM's public IP configuration must be checked separately.
        </p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center text-sm print:break-inside-avoid">
        <p className="font-semibold">Administrator workstation</p>
        <p className="my-2 text-blue-700">↓ RDP (TCP 3389)</p>
        <div className="rounded-lg border border-blue-300 bg-blue-50 p-3">
          <strong>Windows Jump Host</strong>
          <div className="text-xs">PublicSN · 10.0.0.4</div>
        </div>
        <p className="my-2 text-blue-700">
          ↓ SSH (TCP 22) over private network
        </p>
        <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3">
          <strong>Ubuntu Test VM</strong>
          <div className="text-xs">PrivateSN · 10.0.0.68</div>
        </div>
        <p className="mt-3 text-xs text-slate-600">
          Figure 3.13 — Conceptual administrative access path; verified using
          the screenshots below.
        </p>
      </div>
      {evidence.map((item, index) => (
        <article
          key={item.file}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white print:break-inside-avoid"
        >
          <div className="p-4 sm:p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              {item.section} · Figure {`3.${14 + index}`}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-950">
              {item.title}
            </h3>
            <img
              src={base + item.file}
              alt={item.title}
              className="mt-4 h-auto w-full rounded-md border border-slate-200 object-contain"
              loading="lazy"
            />
            <p className="mt-2 text-xs text-slate-500">
              Figure {`3.${14 + index}`} — {item.title}. Source: Azure Task 3
              implementation evidence.
            </p>
            <dl className="mt-4 grid gap-3 text-sm leading-6">
              <div>
                <dt className="font-semibold">Purpose</dt>
                <dd>{item.purpose}</dd>
              </div>
              <div>
                <dt className="font-semibold">Action / Evidence</dt>
                <dd>{item.action}</dd>
              </div>
              <div>
                <dt className="font-semibold">Result / Interpretation</dt>
                <dd>{item.result}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6">
        <h3 className="font-semibold text-slate-950">
          3.5.8 Security evaluation and checkpoint result
        </h3>
        <p className="mt-2">
          The evidence documents a Windows administrative entry point, a
          protected Linux workload and an RDP-to-SSH management workflow. This
          establishes administrative connectivity, but does not alone prove that
          the private VM has no public IP or that every NSG rule is
          appropriately restrictive. Those claims require explicit networking
          evidence. Outbound firewall routing and web restrictions are evaluated
          in Sections 3.6–3.9.
        </p>
      </div>
    </section>
  );
}

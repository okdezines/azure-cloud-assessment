const addressing = [
  ["Resource group", "270907283-rg", "Logical deployment boundary"],
  ["Virtual network", "270907283-vNet · 10.0.0.0/24", "Private Azure address space"],
  ["PublicSN", "10.0.0.0/26", "Windows jump host · 10.0.0.4"],
  ["PrivateSN", "10.0.0.64/26", "Ubuntu test VM · 10.0.0.68"],
  ["AzureFirewallSubnet", "10.0.0.128/26", "Azure Firewall · 10.0.0.132"],
  ["Default route", "0.0.0.0/0 → 10.0.0.132", "Virtual appliance next hop"],
];

const decisions = [
  ["Network segmentation", "Separates administrative access, the protected workload and firewall infrastructure into distinct subnets. Subnets alone do not block traffic; NSGs and firewall policy provide enforcement."],
  ["Controlled administration", "The local workstation connects to the Windows jump host using RDP. The jump host then connects to the private Ubuntu VM using SSH, without assigning the private VM a public IP."],
  ["Centralised egress filtering", "A user-defined default route sends protected-VM outbound traffic to the Azure Firewall private IP, where application rules evaluate requested web destinations."],
  ["Verifiable security", "Effective routes, firewall diagnostic logs and connection tests are used later in the report to distinguish configured controls from observed results."],
];

export default function Task3Architecture() {
  return (
    <section id="task3-architecture" className="mb-14 space-y-9 text-slate-700">
      <header className="border-b border-slate-200 pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Section 3.2</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Architecture &amp; IP Addressing</h2>
        <p className="mt-2 text-sm text-slate-600">Network topology, subnet allocation, traffic flow and design justification</p>
      </header>

      <div className="space-y-3 leading-7">
        <h3 className="text-lg font-bold text-slate-900">3.2.1 Architecture overview</h3>
        <p>
          The solution is organised within resource group <strong>270907283-rg</strong> and virtual network
          <strong> 270907283-vNet</strong>. Three subnets separate the administrative jump host, the
          protected Ubuntu workload and the managed Azure Firewall service. This design supports
          controlled administration and a central inspection point for outbound web traffic.
        </p>
        <p>
          The architecture below represents the documented implementation design. Configuration
          screenshots and verification results are presented in later sections, rather than
          implying that the diagram alone proves security enforcement.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">3.2.2 Azure network architecture</h3>
        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="p-3 sm:p-6">
            <svg viewBox="0 0 760 610" role="img" aria-label="Azure architecture: workstation RDP to jump host, SSH to private Ubuntu VM, outbound traffic via UDR and Azure Firewall to allowed or denied websites" className="h-auto w-full">
              <defs>
                <marker id="task3-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
                </marker>
              </defs>
              <rect x="8" y="8" width="744" height="594" rx="16" fill="#f8fafc" stroke="#94a3b8" />
              <text x="28" y="36" fontSize="17" fontWeight="700" fill="#0f172a">Resource group: 270907283-rg</text>
              <rect x="24" y="58" width="712" height="452" rx="13" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
              <text x="44" y="85" fontSize="16" fontWeight="700" fill="#1d4ed8">VNet: 270907283-vNet · 10.0.0.0/24</text>
              <rect x="44" y="111" width="302" height="118" rx="10" fill="#dbeafe" stroke="#2563eb" />
              <text x="60" y="136" fontSize="16" fontWeight="700" fill="#1e40af">PublicSN · 10.0.0.0/26</text>
              <text x="60" y="164" fontSize="15" fontWeight="700" fill="#1e3a8a">Windows Jump Host</text>
              <text x="60" y="187" fontSize="13" fill="#334155">Private IP: 10.0.0.4</text>
              <text x="60" y="209" fontSize="12" fill="#334155">RDP entry point; SSH client</text>
              <rect x="414" y="111" width="302" height="118" rx="10" fill="#dcfce7" stroke="#16a34a" />
              <text x="430" y="136" fontSize="16" fontWeight="700" fill="#166534">PrivateSN · 10.0.0.64/26</text>
              <text x="430" y="164" fontSize="15" fontWeight="700" fill="#166534">Ubuntu Test VM</text>
              <text x="430" y="187" fontSize="13" fill="#334155">Private IP: 10.0.0.68</text>
              <text x="430" y="209" fontSize="12" fill="#334155">Protected outbound web access</text>
              <path d="M346 170 H414" stroke="#64748b" strokeWidth="2.5" markerEnd="url(#task3-arrow)" />
              <text x="380" y="158" textAnchor="middle" fontSize="12" fill="#334155">SSH</text>
              <rect x="414" y="260" width="302" height="75" rx="10" fill="#fef3c7" stroke="#d97706" />
              <text x="565" y="286" textAnchor="middle" fontSize="16" fontWeight="700" fill="#92400e">Route table / UDR</text>
              <text x="565" y="308" textAnchor="middle" fontSize="13" fill="#78350f">0.0.0.0/0 → 10.0.0.132</text>
              <path d="M565 229 V260" stroke="#64748b" strokeWidth="2.5" markerEnd="url(#task3-arrow)" />
              <rect x="44" y="366" width="672" height="119" rx="10" fill="#fee2e2" stroke="#dc2626" />
              <text x="62" y="394" fontSize="16" fontWeight="700" fill="#991b1b">AzureFirewallSubnet · 10.0.0.128/26</text>
              <text x="62" y="422" fontSize="17" fontWeight="700" fill="#991b1b">Azure Firewall · 10.0.0.132</text>
              <text x="62" y="447" fontSize="13" fill="#7f1d1d">Application rules inspect outbound HTTP/HTTPS destinations</text>
              <text x="62" y="469" fontSize="12" fill="#7f1d1d">Documented exception: azure.archive.ubuntu.com</text>
              <path d="M565 335 V366" stroke="#64748b" strokeWidth="2.5" markerEnd="url(#task3-arrow)" />
              <rect x="46" y="532" width="307" height="49" rx="9" fill="#dcfce7" stroke="#16a34a" />
              <text x="199" y="561" textAnchor="middle" fontSize="15" fontWeight="700" fill="#166534">ALLOW · www.bing.com</text>
              <rect x="408" y="532" width="307" height="49" rx="9" fill="#fee2e2" stroke="#dc2626" />
              <text x="561" y="561" textAnchor="middle" fontSize="15" fontWeight="700" fill="#991b1b">DENY · Unlisted websites</text>
              <path d="M380 485 V520 H199 V532" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#task3-arrow)" />
              <path d="M380 520 H561 V532" stroke="#64748b" strokeWidth="2" fill="none" markerEnd="url(#task3-arrow)" />
            </svg>
          </div>
          <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
            <strong>Figure 3.2 —</strong> Azure network architecture and protected outbound traffic path. The workstation-to-jump-host RDP connection is described in the accompanying text; the diagram shows the internal SSH and egress paths. Allow-list exceptions are documented explicitly.
          </figcaption>
        </figure>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">3.2.3 IP addressing and subnet plan</h3>
        <p className="leading-7">The /24 network is subdivided into three non-overlapping /26 subnets. The AzureFirewallSubnet uses the required reserved name and provides dedicated address space for the managed firewall service.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-900"><tr><th className="p-3">Component</th><th className="p-3">Address / identifier</th><th className="p-3">Purpose</th></tr></thead>
            <tbody>{addressing.map(([name, value, purpose]) => <tr key={name} className="border-t border-slate-200"><td className="p-3 font-semibold">{name}</td><td className="p-3 font-mono text-xs sm:text-sm">{value}</td><td className="p-3">{purpose}</td></tr>)}</tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3 leading-7">
        <h3 className="text-lg font-bold text-slate-900">3.2.4 Administrative and outbound traffic flow</h3>
        <p><strong>Administrative path:</strong> An administrator initiates RDP from their workstation to the public-facing Windows jump host. From that authenticated session, an SSH connection reaches the Ubuntu VM on its private IP address. The private VM does not need a public IP for this access pattern.</p>
        <p><strong>Outbound web path:</strong> The Ubuntu VM sends an outbound request. Its effective default route points to the Azure Firewall private IP, where the associated firewall policy evaluates the destination. The intended result is access to Bing and rejection of unlisted websites. The implemented policy also contains an explicitly documented Ubuntu repository exception.</p>
        <p><strong>Validation:</strong> Later sections use Azure Portal configuration, effective routes, connectivity tests and KQL diagnostic logs to verify which parts of this flow actually occurred.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">3.2.5 Design justification</h3>
        <div className="grid gap-4 md:grid-cols-2">{decisions.map(([title, description]) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-5"><h4 className="font-bold text-slate-900">{title}</h4><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></article>)}</div>
        <p className="text-sm leading-7 text-slate-600">Design limitation: A route table is a forwarding control, not a firewall rule; subnet separation does not itself enforce isolation. Encryption is considered separately from Azure Firewall destination filtering. Any administrator-specific /32 route exception must be evaluated against the intended security boundary.</p>
      </div>
    </section>
  );
}

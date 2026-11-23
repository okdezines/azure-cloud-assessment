const risks = [
  { risk: 'Unrestricted internet access', impact: 'Exposure to malicious sites, phishing and unintended data transfers.', control: 'Azure Firewall application rules with a limited destination allow-list.' },
  { risk: 'Public administrative access', impact: 'Credential attacks and unauthorised remote access.', control: 'Windows jump host and source-restricted RDP using a network security group.' },
  { risk: 'Insufficient network segmentation', impact: 'Unnecessary exposure of protected workloads.', control: 'Separate PublicSN, PrivateSN and dedicated AzureFirewallSubnet.' },
  { risk: 'Incorrect outbound routing', impact: 'Traffic bypassing the intended firewall inspection point.', control: 'User-defined routes and verification of effective NIC routes.' },
  { risk: 'Limited security visibility', impact: 'Difficulty detecting and investigating blocked or permitted traffic.', control: 'Azure Firewall diagnostic logs analysed with Kusto Query Language (KQL).' },
];

const methodology = [
  ['01', 'Identify risks', 'Review the CTO’s requirement and assess network threats.'],
  ['02', 'Design controls', 'Plan subnet isolation, administrative access and routing.'],
  ['03', 'Implement', 'Deploy Azure Firewall, NSGs, VMs and application rules.'],
  ['04', 'Verify', 'Check effective routes, access tests and diagnostic logs.'],
  ['05', 'Evaluate', 'Discuss outcomes, exceptions, limitations and improvements.'],
];

export default function Task3Introduction() {
  return (
    <section id="task3-introduction" className="mb-14 space-y-9 text-slate-700">
      <header className="border-b border-slate-200 pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Section 3.1</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Introduction, Objectives &amp; Security Risks</h2>
        <p className="mt-2 text-sm text-slate-600">Business context, risk assessment and implementation methodology</p>
      </header>

      <div className="space-y-3 leading-7">
        <h3 className="text-lg font-bold text-slate-900">3.1.1 Business scenario</h3>
        <p>
          The assessment scenario describes an organisation whose Chief Technology Officer (CTO)
          requires stronger control over internet access for users in a designated Azure subnet.
          The stated business requirement is to permit access to www.bing.com and display a
          connection failure when users attempt to visit other websites.
        </p>
        <p>
          The solution uses an Azure virtual network, separate public and private subnets,
          a dedicated Azure Firewall subnet, a Windows jump host and a protected Linux virtual
          machine. A user-defined route directs the protected machine’s default outbound traffic
          to Azure Firewall, where application rules control permitted destinations.
        </p>
        <p>
          The implemented firewall policy also includes an Ubuntu package repository exception.
          This is documented explicitly as a deviation from a literal Bing-only policy, rather
          than treating all non-Bing destinations as blocked.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">3.1.2 Project objectives</h3>
        <ul className="list-disc space-y-2 pl-6 leading-7">
          <li>Segment administrative and protected workloads into distinct Azure subnets.</li>
          <li>Deploy Azure Firewall in its dedicated, correctly named subnet.</li>
          <li>Provide controlled administrative access through a Windows jump host.</li>
          <li>Route the protected VM’s outbound traffic through Azure Firewall.</li>
          <li>Configure and verify destination-specific application rules.</li>
          <li>Evaluate the configuration using connectivity tests, effective routes and firewall logs.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">3.1.3 Security risk assessment</h3>
        <p className="leading-7">
          The following qualitative assessment identifies key risks relevant to the scenario and
          maps them to the security controls selected for this implementation.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-900">
              <tr><th className="p-3">Risk</th><th className="p-3">Potential impact</th><th className="p-3">Mitigation</th></tr>
            </thead>
            <tbody>
              {risks.map((item) => (
                <tr key={item.risk} className="border-t border-slate-200 align-top">
                  <td className="p-3 font-semibold text-slate-900">{item.risk}</td>
                  <td className="p-3">{item.impact}</td>
                  <td className="p-3">{item.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">3.1.4 Risk-based implementation methodology</h3>
        <p className="leading-7">
          A defence-in-depth approach combines network segmentation, restricted administrative
          access, centralised firewall policy, explicit routing and diagnostic monitoring.
          Each configuration is assessed through evidence rather than assuming that successful
          resource deployment proves effective security enforcement.
        </p>
        <figure className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <div className="mx-auto max-w-2xl space-y-0">
            {methodology.map(([number, title, detail], index) => (
              <div key={number}>
                <div className="flex items-center gap-4 rounded-lg border border-blue-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-bold text-blue-800">{number}</div>
                  <div><p className="font-semibold text-slate-900">{title}</p><p className="text-sm text-slate-600">{detail}</p></div>
                </div>
                {index < methodology.length - 1 && <div aria-hidden="true" className="py-1 text-center text-xl text-blue-600">↓</div>}
              </div>
            ))}
          </div>
          <figcaption className="mt-5 border-t border-slate-200 pt-3 text-sm text-slate-600">
            <strong>Figure 3.1 —</strong> Risk-based Azure Firewall implementation methodology (conceptual diagram).
          </figcaption>
        </figure>
      </div>

      <div className="space-y-3 leading-7">
        <h3 className="text-lg font-bold text-slate-900">3.1.5 Expected outcomes and evaluation</h3>
        <p>
          The intended result is a protected private workload whose outbound web traffic is
          routed through Azure Firewall and governed by an explicit destination allow-list.
          Verification requires both permitted and denied traffic evidence, confirmation of
          effective routes, and successful administrative connectivity through the jump host.
        </p>
        <p>
          This approach supports the organisation by reducing unnecessary internet exposure,
          separating administrative access from protected workloads and improving visibility
          into network activity. The final evaluation will distinguish verified controls from
          remaining limitations and configuration exceptions.
        </p>
        <p className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-950">
          <strong>Security scope:</strong> Azure Firewall filtering is not itself encryption.
          RDP and SSH provide encrypted administrative sessions, while HTTPS protects applicable
          application traffic in transit. Encryption settings and broader data-protection
          controls require separate verification.
        </p>
      </div>
    </section>
  );
}

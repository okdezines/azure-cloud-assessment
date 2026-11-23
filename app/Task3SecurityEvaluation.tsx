import React from "react";

type Risk = { risk: string; mitigation: string; finding: string; limitation: string };

const risks: Risk[] = [
  { risk: "Unrestricted internet access", mitigation: "Azure Firewall application rules and restricted destination allow-list", finding: "Firewall logs show Bing allowed by Allow-Bing and Google denied (Sections 3.7 and 3.9).", limitation: "An Ubuntu repository exception is documented; this is not a Bing-only policy." },
  { risk: "Unauthorised administrative access", mitigation: "Windows Jump Host, NSG controls and private SSH connection", finding: "RDP to the Jump Host and SSH to the Ubuntu VM are documented (Section 3.5).", limitation: "The complete source restriction and authentication posture require configuration review." },
  { risk: "Lateral movement between workloads", mitigation: "Separate PublicSN, PrivateSN and AzureFirewallSubnet", finding: "Network segmentation and subnet deployment are documented (Sections 3.2–3.3).", limitation: "Subnet separation alone does not prevent lateral movement; NSG rules must be validated." },
  { risk: "Firewall bypass through routing", mitigation: "Default UDR with virtual appliance next hop 10.0.0.132", finding: "Route configuration and selected effective-route evidence are documented (Section 3.6).", limitation: "The private Ubuntu VM's effective default route was not conclusively shown in the selected evidence." },
  { risk: "Insufficient security visibility", mitigation: "Azure Firewall diagnostics, Azure Monitor and KQL", finding: "Allowed and denied application requests are visible in diagnostic logs (Section 3.9).", limitation: "Alerting, retention and incident-response arrangements were not fully assessed." },
  { risk: "Unprotected data in transit", mitigation: "RDP, SSH and HTTPS transport protocols", finding: "The administrative and web-testing workflows use encrypted protocols (Sections 3.5 and 3.8).", limitation: "This does not verify all encryption settings or encryption at rest." },
];

const areas = [
  { title: "Network segmentation", body: "The VNet uses PublicSN, PrivateSN and AzureFirewallSubnet to separate administrative access, protected workloads and firewall infrastructure. These are logical boundaries; effective isolation also depends on correctly configured NSGs and other network controls." },
  { title: "Controlled administration", body: "The documented access path uses RDP to a Windows Jump Host, followed by SSH to the Ubuntu VM on its private address. This avoids a public IP requirement for routine administration of the protected VM, while leaving the Jump Host itself as a security-sensitive entry point." },
  { title: "Outbound filtering", body: "Azure Firewall application rules restrict web destinations. Diagnostic records support the observed Allow-Bing match and denied Google requests. The Ubuntu repository exception should be retained in the policy description rather than describing access as exclusively Bing-only." },
  { title: "Routing and inspection", body: "The user-defined default route targets Azure Firewall at 10.0.0.132. The selected evidence documents route configuration, but the private Ubuntu VM effective-route view remains a verification gap; firewall log records provide separate evidence of inspected traffic." },
  { title: "Encryption", body: "RDP and SSH provide encrypted administrative protocols, while HTTPS protects supported web sessions in transit. This assessment does not independently establish the configuration of every TLS setting or encryption at rest." },
  { title: "Monitoring", body: "Azure Firewall diagnostic logs queried using KQL show allow and deny decisions. This supports troubleshooting and security review; production readiness would also require appropriate retention, alerting and operational response procedures." },
];

export default function Task3SecurityEvaluation() {
  return (
    <section aria-labelledby="task3-security-evaluation" className="mb-14 space-y-7 text-slate-800">
      <header className="border-b border-slate-200 pb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Section 3.10</p>
        <h2 id="task3-security-evaluation" className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Security Evaluation &amp; Risk Mitigation</h2>
        <p className="mt-1 text-sm text-slate-600">Evaluating the deployed security controls against the risks identified in Section 3.1</p>
      </header>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.10.1 Evaluation objectives</h3>
        <p className="text-sm leading-7">As outlined in <strong>Section 3.1 — Introduction, Objectives &amp; Risks</strong>, the assessment began by identifying risks associated with unrestricted web access, administrative exposure, inadequate segmentation, routing errors and limited visibility. This section revisits those risks and evaluates the evidence presented in Sections 3.3–3.9. The approach reflects defence in depth: no single Azure service is assumed to provide complete protection.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.10.2 Risk evaluation matrix</h3>
        <p className="text-sm leading-7">The following matrix links each original security concern to the deployed mitigation, the demonstrated result and any remaining evidence limitation.</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs leading-5">
            <thead className="bg-slate-100 text-slate-950">
              <tr>{["Risk from Section 3.1", "Implemented mitigation", "Evidence-based finding", "Remaining limitation"].map(h => <th key={h} scope="col" className="border-b border-slate-200 px-3 py-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>{risks.map((r, i) => <tr key={r.risk} className={i % 2 ? "bg-slate-50" : "bg-white"}>
              <th scope="row" className="border-b border-slate-200 px-3 py-3 align-top font-semibold text-slate-900">{r.risk}</th>
              <td className="border-b border-slate-200 px-3 py-3 align-top">{r.mitigation}</td>
              <td className="border-b border-slate-200 px-3 py-3 align-top">{r.finding}</td>
              <td className="border-b border-slate-200 px-3 py-3 align-top text-slate-600">{r.limitation}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <p className="text-xs leading-5 text-slate-500">Table 3.10 — Security risk mitigation and evidence evaluation. Findings are limited to the implementation and screenshots documented in this report.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-950">3.10.3 Evaluation of implemented controls</h3>
        <div className="grid gap-3 sm:grid-cols-2">{areas.map((area) => <article key={area.title} className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="mb-2 text-sm font-bold text-slate-950">{area.title}</h4>
          <p className="text-sm leading-6 text-slate-700">{area.body}</p>
        </article>)}</div>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.10.4 Overall security assessment</h3>
        <p className="text-sm leading-7">The strongest verified outcome is destination-based application filtering: Azure Firewall records show a permitted Bing request and denied requests to unlisted destinations. The deployment also demonstrates subnet planning, an administrative Jump Host access path, a firewall-directed route configuration and diagnostic monitoring. These controls reduce important exposure pathways, but they do not establish that all security risks have been eliminated.</p>
        <p className="text-sm leading-7">The distinction between <strong>configured controls</strong> and <strong>verified behaviour</strong> is central to this evaluation. For example, a configured route is not the same as an independently verified effective route on every VM, and an encrypted protocol does not establish an organisation-wide encryption audit.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.10.5 Recommendations for improvement</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>Verify effective routes on the private Ubuntu VM and confirm the intended firewall next hop.</li>
          <li>Audit NSG inbound and east–west rules against least-privilege requirements; further restrict and protect the Jump Host.</li>
          <li>Review firewall allow-list exceptions periodically and document why each is necessary.</li>
          <li>Validate encryption settings, patching, log retention, alerting and incident-response procedures before production use.</li>
          <li>Consider infrastructure as code and automated validation to improve repeatability and reduce configuration drift.</li>
        </ul>
      </div>

      <div className="break-inside-avoid rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="text-base font-bold text-blue-950">3.10.6 Evaluation summary</h3>
        <p className="mt-2 text-sm leading-7 text-slate-800">Revisiting the risks introduced in Section 3.1 shows that the Azure solution provides a practical demonstration of defence-in-depth principles. The evidence supports centralised web filtering, monitored firewall decisions and controlled administrative access. Remaining verification gaps are documented openly, providing clear priorities for further hardening. Successful deployment is an important milestone, but security effectiveness ultimately depends on testing, evidence and ongoing review.</p>
      </div>
    </section>
  );
}

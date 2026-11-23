type Evidence = { figure: string; title: string; image: string; purpose: string; action: string; result: string };
const base = "/images/task-3/3.4/";
const evidence: Evidence[] = [
  {
    figure: "3.9", title: "Firewall configuration reviewed before creation", image: "01-firewall-review-create.png",
    purpose: "Confirm the planned firewall resource and configuration before deployment.",
    action: "Reviewed the Azure Portal Create a firewall summary before submitting the deployment.",
    result: "The review screen documents the proposed configuration. It does not independently prove that provisioning succeeded."
  },
  {
    figure: "3.10", title: "Azure Resource Manager deployment status", image: "02-firewall-deployment-overview.png",
    purpose: "Track the Azure Firewall provisioning operation.",
    action: "Opened the deployment overview to inspect the deployment operation and resource status.",
    result: "This screen records the provisioning workflow; the final successful outcome is documented in the next figure."
  },
  {
    figure: "3.11", title: "Firewall deployment completed", image: "03-firewall-deployment-success.png",
    purpose: "Verify that Azure Resource Manager completed the firewall deployment.",
    action: "Checked the deployment completion page and its success notification.",
    result: "Azure reports successful completion of the recorded deployment operation. Resource settings are verified separately."
  },
  {
    figure: "3.12", title: "Firewall private IP, subnet and policy association", image: "04-firewall-resource-overview.png",
    purpose: "Verify the deployed firewall's identity, address and network placement.",
    action: "Inspected the 270907283-fw Overview in Azure Portal, including the Standard SKU, AzureFirewallSubnet, private IP 10.0.0.132, VNet 270907283-vNet and associated 270907283-fw-policy.",
    result: "Provisioning state is Succeeded, and the firewall's private IP matches the intended UDR next hop. At this capture point the overview shows zero application rules; rule configuration and enforcement are documented later in Section 3.7."
  }
];

export default function Task3FirewallDeployment() {
  return (
    <section id="task3-firewall-deployment" className="mb-14 space-y-7 text-slate-800">
      <header className="border-b border-slate-200 pb-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Section 3.4</p>
        <h2 className="text-2xl font-bold text-slate-900">Azure Firewall Deployment</h2>
        <p className="mt-2 text-sm text-slate-600">Provisioning, dedicated subnet, private IP verification and policy association</p>
      </header>
      <div className="space-y-3 text-sm leading-7">
        <h3 className="text-base font-bold text-slate-900">3.4.1 Purpose and deployment strategy</h3>
        <p>Azure Firewall provides a central policy enforcement point for outbound web traffic from the protected private subnet. The design uses a dedicated AzureFirewallSubnet and a user-defined default route that forwards traffic to the firewall's private IP address. Deploying the firewall establishes the security service; configuring rules and validating enforcement are separate stages.</p>
        <h3 className="text-base font-bold text-slate-900">3.4.2 Deployment configuration</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-slate-100"><tr><th className="p-3">Setting</th><th className="p-3">Recorded value</th></tr></thead>
            <tbody>{[
              ["Firewall", "270907283-fw"], ["Resource group", "270907283-rg"], ["Region", "Australia East"], ["SKU", "Standard"],
              ["Virtual network", "270907283-vNet"], ["Dedicated subnet", "AzureFirewallSubnet · 10.0.0.128/26"],
              ["Firewall private IP", "10.0.0.132"], ["Associated policy", "270907283-fw-policy"], ["Public IP resource", "270907283-fw-pip"]
            ].map(([k,v])=><tr key={k} className="border-t border-slate-200"><th scope="row" className="p-3 font-semibold">{k}</th><td className="p-3 text-slate-600">{v}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
      <div className="space-y-7">
        {evidence.map((item,index)=>(
          <article key={item.figure} className="rounded-xl border border-slate-200 bg-white p-5 print:break-inside-avoid">
            <h3 className="text-base font-bold text-slate-900">3.4.{index+3} {item.title}</h3>
            <figure className="mt-4"><img src={base+item.image} alt={item.title} className="w-full rounded-lg border border-slate-200" loading="lazy"/><figcaption className="mt-2 text-xs text-slate-500">Figure {item.figure} — {item.title}. Source: Azure Portal implementation evidence.</figcaption></figure>
            <dl className="mt-4 space-y-3 text-sm leading-7">
              <div><dt className="font-semibold">Purpose</dt><dd>{item.purpose}</dd></div>
              <div><dt className="font-semibold">Action / Evidence</dt><dd>{item.action}</dd></div>
              <div><dt className="font-semibold">Result / Interpretation</dt><dd>{item.result}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-slate-800">
        <h3 className="font-bold text-slate-900">3.4.7 Deployment evaluation</h3>
        <p className="mt-2">The evidence establishes that Azure Firewall was deployed successfully with the intended dedicated subnet, private IP and policy association. It does not, by itself, demonstrate that web filtering is enforced. Route-table configuration, application rules, connection tests and diagnostic logs will be evaluated in Sections 3.6–3.9.</p>
      </div>
    </section>
  );
}

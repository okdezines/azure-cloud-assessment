const evidence = [
  { number: '3.3', heading: 'Resource group creation', file: '01-resource-group-creation.png', purpose: 'Establish a logical boundary for the network security resources.', action: 'Created resource group 270907283-rg in the Azure Portal.', result: 'The creation form records the intended resource group settings; the following resource-group overview provides evidence that the group exists.' },
  { number: '3.4', heading: 'Resource group overview', file: '02-resource-group-overview.png', purpose: 'Verify the deployment boundary before provisioning network resources.', action: 'Opened the resource group overview in the Azure Portal.', result: 'The resource group overview is visible. This confirms the resource-group context, not the completion of all later resources.' },
  { number: '3.5', heading: 'Virtual network and subnet planning', file: '03-vnet-subnet-planning.png', purpose: 'Allocate separate address ranges for administration, protected workloads and the firewall.', action: 'Configured VNet 270907283-vNet with 10.0.0.0/24 and three non-overlapping /26 subnets.', result: 'The configuration form shows the planned subnet allocation before deployment.' },
  { number: '3.6', heading: 'VNet review before deployment', file: '04-vnet-review.png', purpose: 'Check the VNet configuration before submitting it to Azure.', action: 'Reviewed the virtual network configuration and address ranges.', result: 'The review screen records the requested settings; it does not alone establish that the network was deployed.' },
  { number: '3.7', heading: 'Deployment success', file: '05-deployment-success.png', purpose: 'Verify that the Azure deployment operation completed.', action: 'Reviewed the Azure Resource Manager deployment status.', result: 'Azure reports that the deployment is complete. The actual subnet layout is verified in the following figure.' },
  { number: '3.8', heading: 'Deployed VNet subnets', file: '06-deployed-subnets.png', purpose: 'Confirm the three subnets exist within the deployed VNet.', action: 'Opened the virtual network Subnets page in Azure Portal.', result: 'The portal lists PublicSN, PrivateSN and AzureFirewallSubnet. Later sections verify routing, firewall policy and enforcement separately.' },
];

export default function Task3NetworkDeployment() {
  return (
    <section className="mb-14 space-y-7 text-slate-800">
      <header className="border-b border-slate-200 pb-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Section 3.3</p>
        <h2 className="text-2xl font-bold text-slate-900">Resource Group, VNet &amp; Subnets</h2>
        <p className="mt-2 text-sm text-slate-600">Implementation evidence for the planned Azure network foundation.</p>
      </header>
      <div className="space-y-3 leading-7 text-slate-700">
        <h3 className="font-bold text-slate-900">3.3.1 Deployment approach</h3>
        <p>The deployment begins with a dedicated resource group, followed by the virtual network and three non-overlapping subnets. This order creates a clear management boundary and reserves address space for the administrative jump host, the protected Linux workload and Azure Firewall.</p>
        <p>The screenshots below document the Azure Portal configuration and deployment sequence. They establish what was configured and provisioned; they do not independently prove firewall inspection or website restrictions, which are validated in later sections.</p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[530px] text-left text-sm">
          <thead className="bg-slate-100 text-slate-900"><tr><th className="p-3">Network component</th><th className="p-3">Address range</th><th className="p-3">Purpose</th></tr></thead>
          <tbody>{[['VNet','10.0.0.0/24','Network address space'],['PublicSN','10.0.0.0/26','Administrative jump host'],['PrivateSN','10.0.0.64/26','Protected Linux VM'],['AzureFirewallSubnet','10.0.0.128/26','Dedicated Azure Firewall subnet']].map(([a,b,c]) => <tr key={a} className="border-t border-slate-200"><td className="p-3 font-semibold">{a}</td><td className="p-3 font-mono text-xs">{b}</td><td className="p-3">{c}</td></tr>)}</tbody>
        </table>
      </div>
      {evidence.map((item, index) => (
        <article key={item.file} className="evidence-card rounded-xl border border-slate-200 bg-white p-5 print:shadow-none">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">3.3.{index+2} · Figure {item.number}</p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">{item.heading}</h3>
          <figure className="mt-4"><img src={`/images/task-3/3.3/${item.file}`} alt={item.heading} className="w-full rounded-lg border border-slate-200"/><figcaption className="mt-2 text-xs text-slate-500">Figure {item.number} — {item.heading}. Azure Portal evidence captured during Task 3 implementation.</figcaption></figure>
          <dl className="mt-5 space-y-3 text-sm leading-6">{[['Purpose',item.purpose],['Action',item.action],['Evidence',`Azure Portal screenshot: ${item.heading.toLowerCase()}.`],['Result / Interpretation',item.result]].map(([key,value]) => <div key={key}><dt className="font-semibold text-slate-900">{key}</dt><dd className="text-slate-700">{value}</dd></div>)}</dl>
        </article>
      ))}
      <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm leading-7 text-blue-950"><strong>Checkpoint result:</strong> The resource group and network foundation are documented. The next section verifies the Azure Firewall deployment and its dedicated subnet.</div>
    </section>
  );
}

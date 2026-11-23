/**
 * Task 3 — Section 3.11: Conclusion & Reflections
 * Next.js / React / Tailwind CSS; no external dependencies.
 */
export default function Task3Conclusion() {
  const achievements = [
    ["Network architecture", "Deployed a virtual network with separate administrative, protected-workload and firewall subnets."],
    ["Controlled administration", "Used a Windows Jump Host for RDP access and an internal SSH connection to the Ubuntu VM."],
    ["Outbound filtering", "Configured Azure Firewall and application rules; logs show Bing allowed and unlisted requests denied."],
    ["Monitoring", "Used Azure Monitor and KQL to inspect application-rule decisions and interpret traffic outcomes."],
  ];

  return (
    <section aria-labelledby="task3-conclusion-heading" className="mb-14 space-y-7 text-slate-800 print:break-before-auto">
      <header className="border-b border-slate-200 pb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Section 3.11</p>
        <h2 id="task3-conclusion-heading" className="text-2xl font-bold tracking-tight text-slate-950">Conclusion &amp; Personal Reflections</h2>
        <p className="mt-1 text-sm text-slate-600">Project outcomes, technical lessons and opportunities for improvement</p>
      </header>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.11.1 Project conclusion</h3>
        <p className="text-sm leading-7">This task explored how Microsoft Azure networking services can be combined to reduce the exposure of a protected virtual machine and provide controlled outbound web access. Beginning with the security risks and objectives identified in Section 3.1, the implementation progressed through virtual network planning, Azure Firewall deployment, administrative access, user-defined routing, application rules and monitoring.</p>
        <p className="text-sm leading-7">The result is a documented defence-in-depth design supported by configuration evidence, connectivity tests and Azure Firewall diagnostic logs. The exercise reinforced the distinction between successfully deploying infrastructure and demonstrating that security controls operate as intended.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.11.2 Achievement of security objectives</h3>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-900"><tr><th className="w-1/3 px-4 py-3 font-semibold">Objective</th><th className="px-4 py-3 font-semibold">Outcome</th></tr></thead>
            <tbody className="divide-y divide-slate-200">
              {achievements.map(([name, outcome]) => <tr key={name} className="align-top"><th scope="row" className="px-4 py-3 font-semibold text-slate-900">{name}</th><td className="px-4 py-3 leading-6">{outcome}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-7">These outcomes address the main security concerns raised in the introduction. Section 3.10 provides the fuller risk-by-risk evaluation, including controls that still require additional verification. The firewall policy also contains a documented Ubuntu repository exception, so it is more accurate to describe the result as restricted destination access rather than Bing-only access.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.11.3 Technical challenges and problem-solving</h3>
        <p className="text-sm leading-7">Several implementation steps required troubleshooting and reassessment. Virtual machine size and quota restrictions influenced deployment choices, while configuring a Jump Host and accessing a private Ubuntu VM required careful attention to network interfaces, access rules and connection methods. Routing and firewall policy configuration also demonstrated how a small difference in network settings can change application connectivity.</p>
        <p className="text-sm leading-7">The connectivity tests provided an important lesson in evidence interpretation. A successful HTTPS request establishes connectivity, whereas a failed request does not automatically prove a firewall denial. Comparing terminal results with KQL records made the analysis more reliable and helped separate observed behaviour from the reason for that behaviour.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.11.4 Personal learning and professional development</h3>
        <p className="text-sm leading-7">This assessment strengthened my understanding of how virtual networks, subnets, Network Security Groups, user-defined routes, Azure Firewall and monitoring services interact. Working through the deployment and documenting each stage helped me move beyond knowing the names of Azure services toward understanding their roles in a complete network security solution.</p>
        <p className="text-sm leading-7">It also improved my approach to technical reporting. Recording the purpose of each action, the evidence collected and the interpretation of the result made it easier to explain both successful outcomes and remaining limitations. These are practical skills I intend to carry into future Cloud Engineering and DevOps work.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-950">3.11.5 Final reflection and future improvements</h3>
        <p className="text-sm leading-7">Although the implementation demonstrates meaningful network security controls, it is a learning environment rather than a production-ready security architecture. Further work should verify the private VM's effective routes, review NSG source restrictions, assess encryption and authentication settings, and introduce operational monitoring and alerting. Infrastructure as Code could also improve repeatability and consistency in future deployments.</p>
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 print:break-inside-avoid">
          <p className="text-sm font-semibold text-blue-950">Final takeaway</p>
          <p className="mt-2 text-sm leading-7 text-slate-800">The central lesson of Task 3 is that cloud security depends on coordinated controls and verifiable results. Designing a secure network, implementing its policies and testing the observed behaviour are all necessary parts of responsible cloud engineering.</p>
        </div>
      </div>
    </section>
  );
}

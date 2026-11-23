import React from 'react';

const base = '/images/task-3/3.7/';

function PolicyFlowDiagram() {
  return <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white break-inside-avoid">
    <div className="p-5 sm:p-7 text-center">
      <h3 className="text-sm font-semibold text-slate-900 mb-5 text-left">Outbound Application Rule Evaluation</h3>
      <div className="mx-auto max-w-xl space-y-2 text-sm">
        <div className="rounded-lg border border-green-300 bg-green-50 p-3 font-semibold text-green-900">Ubuntu Test VM · 10.0.0.68</div>
        <div className="text-slate-500">↓ Default route via 10.0.0.132</div>
        <div className="rounded-lg border border-red-300 bg-red-50 p-3 font-semibold text-red-900">Azure Firewall · 270907283-fw</div>
        <div className="text-slate-500">↓ Application rule evaluation</div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-green-300 bg-green-50 p-3"><strong className="text-green-900">ALLOW</strong><p className="text-xs mt-1 text-green-800">www.bing.com</p><p className="text-xs text-green-800">Documented Ubuntu repository exception</p></div>
          <div className="rounded-lg border border-red-300 bg-red-50 p-3"><strong className="text-red-900">DENY</strong><p className="text-xs mt-1 text-red-800">Unlisted destinations</p><p className="text-xs text-red-800">Example: www.google.com</p></div>
        </div>
      </div>
    </div>
    <figcaption className="border-t border-slate-200 bg-slate-50 p-3 text-xs text-slate-600"><strong>Figure 3.25 —</strong> Conceptual Azure Firewall application rule evaluation for protected outbound web traffic. Actual enforcement is corroborated by firewall logs below.</figcaption>
  </figure>;
}
function Evidence({number,src,caption,purpose,action,result}:{number:string;src:string;caption:string;purpose:string;action:string;result:string}) {
  return <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white break-inside-avoid">
    <a href={base+src} target="_blank" rel="noreferrer"><img src={base+src} alt={caption} className="block w-full h-auto" loading="lazy" /></a>
    <figcaption className="border-t border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700"><strong>Figure {number} —</strong> {caption}</figcaption>
    <div className="p-4 text-sm leading-7 text-slate-700 space-y-1"><p><strong>Purpose:</strong> {purpose}</p><p><strong>Action / Evidence:</strong> {action}</p><p><strong>Result / Interpretation:</strong> {result}</p></div>
  </figure>;
}
export default function Task3FirewallPolicies() {
  return <section id="task3-section-3-7" className="mb-14 space-y-7 text-slate-800">
    <header className="border-b border-slate-200 pb-4"><p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Section 3.7</p><h2 className="mt-2 text-2xl font-bold text-slate-950">Firewall Policies &amp; Application Rules</h2><p className="mt-1 text-sm text-slate-600">Restricting outbound website access using centrally managed firewall controls</p></header>
    <PolicyFlowDiagram />
    <div><h3 className="font-semibold text-slate-950">3.7.1 Purpose and security strategy</h3><p className="mt-2 text-sm leading-7">The purpose of the firewall policy is to limit outbound web access from the protected Ubuntu workload to approved destinations. A default-deny posture reduces exposure to unauthorised websites and creates a central point for inspecting and logging application traffic.</p></div>
    <div><h3 className="font-semibold text-slate-950">3.7.2 Policy and rule collection design</h3><p className="mt-2 text-sm leading-7">Azure Firewall <code>270907283-fw</code> is associated with firewall policy <code>270907283-fw-policy</code>. Application rules evaluate destination names for supported HTTP/HTTPS traffic. The recorded policy includes an <code>Allow-Bing</code> rule and a documented Ubuntu repository exception. The exact rule collection priority and protocol settings should be checked against a dedicated policy screenshot before being asserted in the final submission.</p></div>
    <div><h3 className="font-semibold text-slate-950">3.7.3 Bing allow-list</h3><p className="mt-2 text-sm leading-7"><strong>Purpose:</strong> Permit access to the required search destination. <strong>Action:</strong> Configure an application rule for <code>www.bing.com</code> in the firewall policy. <strong>Result:</strong> The available Azure Firewall application logs show <code>Allow</code> for <code>www.bing.com</code>, with the matching rule recorded as <code>Allow-Bing</code>.</p></div>
    <div><h3 className="font-semibold text-slate-950">3.7.4 Ubuntu repository exception</h3><p className="mt-2 text-sm leading-7">An exception for <code>azure.archive.ubuntu.com</code> is documented elsewhere in the implementation. It supports package repository access needed for Ubuntu maintenance. This is an explicit exception to a Bing-only allow-list, and should be acknowledged in the security evaluation rather than described as an unrestricted or perfectly exclusive rule set.</p></div>
    <div><h3 className="font-semibold text-slate-950">3.7.5 Default-deny behaviour</h3><p className="mt-2 text-sm leading-7">Traffic not matching an applicable allow rule is denied by Azure Firewall's rule processing. The observed denial of <code>www.google.com</code> provides a specific example. This does not, by itself, prove every possible protocol or destination is blocked; that broader conclusion depends on route coverage and further testing.</p></div>
    <div><h3 className="font-semibold text-slate-950">3.7.6 Policy enforcement evidence</h3>
      <Evidence number="3.26" src="3.26-firewall-allow-deny-logs.png" caption="Azure Firewall application log results for Bing and Google from private VM 10.0.0.68." purpose="Confirm that application rules distinguish approved and unapproved destinations." action="Query AZFWApplicationRule records and review the Fqdn, Action, SourceIp and Rule columns." result="Bing requests are logged as Allow under Allow-Bing, while Google requests are logged as Deny. This supports the observed enforcement of the website policy for these two destinations." />
    </div>
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-semibold text-slate-950">3.7.7 Result and security evaluation</h3><p className="mt-2 text-sm leading-7">The recorded logs demonstrate differentiated access decisions for requests originating from the private Ubuntu VM. The firewall policy supports a least-privilege outbound access strategy, with the documented Ubuntu repository exception. Section 3.8 will present connectivity tests, while Section 3.9 will examine the monitoring and KQL evidence in greater detail.</p><p className="mt-2 text-xs text-slate-600"><strong>Evidence limitation:</strong> The supplied screenshot collection does not clearly establish the complete rule collection configuration. Add a direct screenshot of the firewall policy rule collection if available.</p></div>
  </section>;
}


import Head from "next/head";

const prerequisites = [
    ["Azure subscription", "Active subscription with permissions to create resources"],
    ["Resource Group", "studentID-rg — organise Task 3 resources"],
    ["Virtual Network", "studentID-vNet — 10.0.0.0/24"],
    ["PublicSN", "10.0.0.0/26 — jump-host VM"],
    ["PrivateSN", "10.0.0.64/26 — protected VM"],
    ["AzureFirewallSubnet", "10.0.0.128/26 — dedicated firewall subnet"],
    ["Azure Firewall", "Firewall policy, public IP and private IP"],
    ["Route Table / UDR", "Direct protected subnet traffic through the firewall"],
    ["Two Virtual Machines", "Jump host and private test machine"],
    ["NSG and RDP", "Secure administrative access and connectivity testing"],
];

const flow = [
    ["Administrative Access", "An administrator connects to the jump-host VM and then accesses the protected VM using RDP."],
    ["Outbound Request", "The protected VM attempts to access a website."],
    ["User-Defined Routing", "The route table directs outbound traffic towards Azure Firewall."],
    ["Firewall Inspection", "Azure Firewall evaluates the request against application rules."],
    ["Access Decision", "www.bing.com is allowed; other websites are denied."],
    ["Validation", "Browser tests, routing checks and firewall logs provide evidence."],
];

const checkpoints = [
    ["01", "Resource Group", "Establish the deployment boundary."],
    ["02", "Virtual Network & Subnets", "Create the network and reserve the firewall subnet."],
    ["03", "Azure Firewall", "Deploy the firewall and record its private IP address."],
    ["04", "Route Table & Security", "Configure traffic routing and filtering rules."],
    ["05", "Virtual Machines", "Deploy the jump host and protected VM."],
    ["06", "Testing & Validation", "Verify allowed and denied access and collect evidence."],
];

function SectionHeading({
    number,
    title,
    subtitle,
}: {
    number: string;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Section {number}
            </p>
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-2 text-sm text-slate-600">{subtitle}</p>}
        </div>
    );
}

function ArchitectureDiagram() {
    return (
        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="p-4 sm:p-8">
                <svg
                    viewBox="0 0 800 650"
                    role="img"
                    aria-label="Proposed Azure network architecture showing a jump host, protected virtual machine, route table, Azure Firewall and web filtering."
                    className="h-auto w-full"
                >
                    <rect x="12" y="12" width="776" height="625" rx="18"
                        fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                    <text x="35" y="43" fontSize="19" fontWeight="bold" fill="#0f172a">
                        Azure Resource Group: studentID-rg
                    </text>

                    <rect x="35" y="65" width="730" height="455" rx="16"
                        fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
                    <text x="55" y="94" fontSize="18" fontWeight="bold" fill="#1e40af">
                        Virtual Network: studentID-vNet
                    </text>
                    <text x="55" y="115" fontSize="14" fill="#475569">
                        Address space: 10.0.0.0/24
                    </text>

                    <rect x="55" y="140" width="320" height="145" rx="12"
                        fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                    <text x="75" y="169" fontSize="18" fontWeight="bold" fill="#1d4ed8">
                        PublicSN
                    </text>
                    <text x="75" y="191" fontSize="14" fill="#334155">
                        10.0.0.0/26
                    </text>
                    <rect x="75" y="210" width="280" height="55" rx="9" fill="#bfdbfe" />
                    <text x="215" y="232" fontSize="16" fontWeight="bold"
                        fill="#1e3a8a" textAnchor="middle">
                        Jump Host VM
                    </text>
                    <text x="215" y="250" fontSize="12" fill="#334155" textAnchor="middle">
                        Administrative RDP access
                    </text>

                    <rect x="425" y="140" width="320" height="145" rx="12"
                        fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                    <text x="445" y="169" fontSize="18" fontWeight="bold" fill="#166534">
                        PrivateSN
                    </text>
                    <text x="445" y="191" fontSize="14" fill="#334155">
                        10.0.0.64/26
                    </text>
                    <rect x="445" y="210" width="280" height="55" rx="9" fill="#bbf7d0" />
                    <text x="585" y="232" fontSize="16" fontWeight="bold"
                        fill="#166534" textAnchor="middle">
                        Protected VM
                    </text>
                    <text x="585" y="250" fontSize="12" fill="#334155" textAnchor="middle">
                        Restricted web access
                    </text>

                    <path d="M355 237 H445" stroke="#64748b" strokeWidth="3" />
                    <path d="M435 230 L445 237 L435 244"
                        fill="none" stroke="#64748b" strokeWidth="3" />
                    <text x="400" y="224" fontSize="12" fill="#334155" textAnchor="middle">
                        RDP
                    </text>

                    <path d="M585 285 V315" stroke="#d97706" strokeWidth="3" />
                    <path d="M578 305 L585 315 L592 305"
                        fill="none" stroke="#d97706" strokeWidth="3" />

                    <rect x="425" y="315" width="320" height="65" rx="10"
                        fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                    <text x="585" y="341" fontSize="17" fontWeight="bold"
                        fill="#92400e" textAnchor="middle">
                        Route Table / UDR
                    </text>
                    <text x="585" y="362" fontSize="13" fill="#78350f" textAnchor="middle">
                        Next hop: Firewall private IP
                    </text>

                    <path d="M585 380 V405" stroke="#d97706" strokeWidth="3" />
                    <path d="M578 395 L585 405 L592 395"
                        fill="none" stroke="#d97706" strokeWidth="3" />

                    <rect x="55" y="405" width="690" height="95" rx="12"
                        fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                    <text x="75" y="434" fontSize="18" fontWeight="bold" fill="#991b1b">
                        AzureFirewallSubnet — 10.0.0.128/26
                    </text>
                    <text x="75" y="461" fontSize="17" fontWeight="bold" fill="#991b1b">
                        Azure Firewall
                    </text>
                    <text x="75" y="483" fontSize="14" fill="#7f1d1d">
                        Application rules inspect outbound web traffic
                    </text>

                    <path d="M400 500 V550" stroke="#64748b" strokeWidth="3" />
                    <path d="M393 540 L400 550 L407 540"
                        fill="none" stroke="#64748b" strokeWidth="3" />

                    <rect x="65" y="550" width="320" height="58" rx="10"
                        fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
                    <text x="225" y="575" fontSize="17" fontWeight="bold"
                        fill="#166534" textAnchor="middle">
                        ALLOW
                    </text>
                    <text x="225" y="594" fontSize="14" fill="#166534" textAnchor="middle">
                        www.bing.com
                    </text>

                    <rect x="415" y="550" width="320" height="58" rx="10"
                        fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                    <text x="575" y="575" fontSize="17" fontWeight="bold"
                        fill="#991b1b" textAnchor="middle">
                        DENY
                    </text>
                    <text x="575" y="594" fontSize="14" fill="#991b1b" textAnchor="middle">
                        Other websites
                    </text>
                </svg>
            </div>
            <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">
                <strong>Figure 3.1 —</strong> Proposed Azure Firewall network architecture.
                Diagram represents the intended design, not a completed deployment.
            </figcaption>
        </figure>
    );
}

export default function Task3Page() {
    return (
        <>
            <Head>
                <title>Task 3 | Azure Firewall & Network Security</title>
                <meta
                    name="description"
                    content="Azure Cloud Engineering Assessment Task 3 — firewall architecture, network security and implementation evidence."
                />
            </Head>

            <main className="mx-auto max-w-5xl px-5 py-12 text-slate-800 sm:px-8">
                <header className="mb-12 border-b border-slate-300 pb-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
                        Microsoft Azure Cloud Assessment
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Task 3 — Azure Firewall & Network Security
                    </h1>
                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                        Architecture, security risk evaluation, firewall implementation
                        and validation of restricted website access in Microsoft Azure.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
                        <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">
                            Assessment Weight: 35%
                        </span>
                        <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-800">
                            Planning Stage
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-700">
                            Learning Outcome: LO2
                        </span>
                    </div>
                </header>

                <section className="mb-14">
                    <SectionHeading number="3.1" title="Executive Summary" />
                    <div className="space-y-4 leading-8 text-slate-700">
                        <p>
                            This task examines the design and implementation of a secure
                            Azure network environment in response to an organisation's
                            requirement to restrict internet access for users within
                            a designated subnet.
                        </p>
                        <p>
                            The proposed solution consists of an Azure Virtual Network,
                            separate public and private subnets, two virtual machines,
                            Azure Firewall and a user-defined route table. The firewall
                            will be configured to permit access to www.bing.com while
                            restricting access to other websites from the protected VM.
                        </p>
                        <p>
                            The implementation will be evaluated through configuration
                            evidence, network connectivity tests and firewall rule
                            validation. The objective is to demonstrate centralised
                            access control and explain its value to business security.
                        </p>
                    </div>
                </section>

                <section className="mb-14">
                    <SectionHeading
                        number="3.2"
                        title="Proposed Infrastructure Architecture"
                        subtitle="A high-level overview of the Azure networking components and their relationships."
                    />
                    <ArchitectureDiagram />
                </section>

                <section className="mb-14">
                    <SectionHeading
                        number="3.3"
                        title="Infrastructure Traffic Flow"
                        subtitle="The expected sequence of events when a user attempts to access the internet."
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                        {flow.map(([title, description], index) => (
                            <article key={title}
                                className="rounded-xl border border-slate-200 bg-white p-5">
                                <span className="text-xs font-bold text-blue-600">
                                    STEP {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mb-14">
                    <SectionHeading
                        number="3.4"
                        title="Prerequisites & Resource Planning"
                        subtitle="Resources and tools required before beginning deployment."
                    />
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full min-w-[550px] text-left text-sm">
                            <thead className="bg-slate-100 text-slate-900">
                                <tr>
                                    <th className="p-4">Component</th>
                                    <th className="p-4">Requirement / Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prerequisites.map(([name, detail]) => (
                                    <tr key={name} className="border-t border-slate-200">
                                        <td className="p-4 font-semibold">{name}</td>
                                        <td className="p-4 text-slate-600">{detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-amber-800">
                        Planning note: Confirm subscription permissions, Azure Firewall
                        pricing, regional availability, VM sizes and RDP access
                        before provisioning resources.
                    </p>
                </section>

                <section className="mb-14">
                    <SectionHeading
                        number="3.5"
                        title="Implementation Strategy"
                        subtitle="The proposed deployment order and the reason for each checkpoint."
                    />
                    <div className="space-y-4">
                        {checkpoints.map(([number, title, reason]) => (
                            <div key={number}
                                className="flex gap-4 rounded-xl border border-slate-200 p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-700">
                                    {number}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        {reason}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                        <strong>Architecture decision pending:</strong> The assessment
                        specifies a route table associated with PublicSN, while the
                        security objective requires restricting traffic from the
                        protected subnet. We will verify the required route
                        associations before deployment. DNS settings and firewall
                        filtering will also be documented separately.
                    </div>
                </section>

                <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
                    Task 3 — Planning and architecture documentation.
                    Practical implementation evidence will be added at each checkpoint.
                </footer>
            </main>
        </>
    );
}

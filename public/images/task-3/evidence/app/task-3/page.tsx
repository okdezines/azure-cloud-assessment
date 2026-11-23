import Head from "next/head";



const prerequisites = [

  [

    "Azure subscription",



    "Active subscription with permissions to create resources",

  ],



  ["Resource Group", "270907283-rg — organise Task 3 resources"],



  ["Virtual Network", "270907283-vNet — 10.0.0.0/24"],



  ["PublicSN", "10.0.0.0/26 — jump-host VM"],



  ["PrivateSN", "10.0.0.64/26 — protected VM"],



  ["AzureFirewallSubnet", "10.0.0.128/26 — dedicated firewall subnet"],



  ["Azure Firewall", "Firewall policy, public IP and private IP"],



  [

    "Route Table / UDR",



    "270907283-rt — associated with PublicSN and PrivateSN",

  ],



  ["Two Virtual Machines", "Jump host and private test machine"],



  ["NSG and RDP", "Secure administrative access and connectivity testing"],

];



const flow = [

  [

    "Administrative Access",



    "An administrator connects to the jump-host VM and then accesses the protected VM using RDP.",

  ],



  [

    "Outbound Request",



    "The test VM attempts to access a website; capture its source subnet and effective routes.",

  ],



  [

    "User-Defined Routing",



    "The effective route determines whether outbound traffic is forwarded to Azure Firewall; verify the association and next hop.",

  ],



  [

    "Firewall Inspection",



    "Azure Firewall evaluates the request against application rules.",

  ],



  [

    "Access Decision",



    "The intended policy allows www.bing.com and denies other websites; test both outcomes.",

  ],



  [

    "Validation",



    "Browser tests, routing checks and firewall logs provide evidence.",

  ],

];



const checkpoints = [

  ["01", "Resource Group", "Establish the deployment boundary."],



  [

    "02",



    "Virtual Network & Subnets",



    "Create the network and reserve the firewall subnet.",

  ],



  [

    "03",



    "Azure Firewall",



    "Deploy the firewall and record its private IP address.",

  ],



  [

    "04",



    "Route Table & Security",



    "Configure traffic routing and filtering rules.",

  ],



  ["05", "Virtual Machines", "Deploy the jump host and protected VM."],



  [

    "06",



    "Testing & Validation",



    "Verify allowed and denied access and collect evidence.",

  ],

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

          <rect

            x="12"

            y="12"

            width="776"

            height="625"

            rx="18"

            fill="#f8fafc"

            stroke="#94a3b8"

            strokeWidth="2"

          />



          <text x="35" y="43" fontSize="19" fontWeight="bold" fill="#0f172a">

            Azure Resource Group: 270907283-rg

          </text>



          <rect

            x="35"

            y="65"

            width="730"

            height="455"

            rx="16"

            fill="#eff6ff"

            stroke="#3b82f6"

            strokeWidth="2"

          />



          <text x="55" y="94" fontSize="18" fontWeight="bold" fill="#1e40af">

            Virtual Network: 270907283-vNet

          </text>



          <text x="55" y="115" fontSize="14" fill="#475569">

            Address space: 10.0.0.0/24

          </text>



          <rect

            x="55"

            y="140"

            width="320"

            height="145"

            rx="12"

            fill="#dbeafe"

            stroke="#2563eb"

            strokeWidth="2"

          />



          <text x="75" y="169" fontSize="18" fontWeight="bold" fill="#1d4ed8">

            PublicSN

          </text>



          <text x="75" y="191" fontSize="14" fill="#334155">

            10.0.0.0/26

          </text>



          <rect x="75" y="210" width="280" height="55" rx="9" fill="#bfdbfe" />



          <text

            x="215"

            y="232"

            fontSize="16"

            fontWeight="bold"

            fill="#1e3a8a"

            textAnchor="middle"

          >

            Jump Host VM

          </text>



          <text

            x="215"

            y="250"

            fontSize="12"

            fill="#334155"

            textAnchor="middle"

          >

            Administrative RDP access

          </text>



          <rect

            x="425"

            y="140"

            width="320"

            height="145"

            rx="12"

            fill="#dcfce7"

            stroke="#16a34a"

            strokeWidth="2"

          />



          <text x="445" y="169" fontSize="18" fontWeight="bold" fill="#166534">

            PrivateSN

          </text>



          <text x="445" y="191" fontSize="14" fill="#334155">

            10.0.0.64/26

          </text>



          <rect x="445" y="210" width="280" height="55" rx="9" fill="#bbf7d0" />



          <text

            x="585"

            y="232"

            fontSize="16"

            fontWeight="bold"

            fill="#166534"

            textAnchor="middle"

          >

            Protected VM

          </text>



          <text

            x="585"

            y="250"

            fontSize="12"

            fill="#334155"

            textAnchor="middle"

          >

            Restricted web access

          </text>



          <path d="M355 237 H445" stroke="#64748b" strokeWidth="3" />



          <path

            d="M435 230 L445 237 L435 244"

            fill="none"

            stroke="#64748b"

            strokeWidth="3"

          />



          <text

            x="400"

            y="224"

            fontSize="12"

            fill="#334155"

            textAnchor="middle"

          >

            RDP

          </text>



          <path d="M585 285 V315" stroke="#d97706" strokeWidth="3" />



          <path

            d="M578 305 L585 315 L592 305"

            fill="none"

            stroke="#d97706"

            strokeWidth="3"

          />



          <rect

            x="425"

            y="315"

            width="320"

            height="65"

            rx="10"

            fill="#fef3c7"

            stroke="#d97706"

            strokeWidth="2"

          />



          <text

            x="585"

            y="341"

            fontSize="17"

            fontWeight="bold"

            fill="#92400e"

            textAnchor="middle"

          >

            Route Table / UDR

          </text>



          <text

            x="585"

            y="362"

            fontSize="13"

            fill="#78350f"

            textAnchor="middle"

          >

            Next hop: Firewall private IP

          </text>



          <path d="M585 380 V405" stroke="#d97706" strokeWidth="3" />



          <path

            d="M578 395 L585 405 L592 395"

            fill="none"

            stroke="#d97706"

            strokeWidth="3"

          />



          <rect

            x="55"

            y="405"

            width="690"

            height="95"

            rx="12"

            fill="#fee2e2"

            stroke="#dc2626"

            strokeWidth="2"

          />



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



          <path

            d="M393 540 L400 550 L407 540"

            fill="none"

            stroke="#64748b"

            strokeWidth="3"

          />



          <rect

            x="65"

            y="550"

            width="320"

            height="58"

            rx="10"

            fill="#dcfce7"

            stroke="#16a34a"

            strokeWidth="2"

          />



          <text

            x="225"

            y="575"

            fontSize="17"

            fontWeight="bold"

            fill="#166534"

            textAnchor="middle"

          >

            ALLOW

          </text>



          <text

            x="225"

            y="594"

            fontSize="14"

            fill="#166534"

            textAnchor="middle"

          >

            www.bing.com

          </text>



          <rect

            x="415"

            y="550"

            width="320"

            height="58"

            rx="10"

            fill="#fee2e2"

            stroke="#dc2626"

            strokeWidth="2"

          />



          <text

            x="575"

            y="575"

            fontSize="17"

            fontWeight="bold"

            fill="#991b1b"

            textAnchor="middle"

          >

            DENY

          </text>



          <text

            x="575"

            y="594"

            fontSize="14"

            fill="#991b1b"

            textAnchor="middle"

          >

            Other websites

          </text>

        </svg>

      </div>



      <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-600">

        <strong>Figure 3.1 —</strong> Proposed Azure Firewall network

        architecture. Diagram represents the intended design, not a completed

        deployment.

      </figcaption>

    </figure>

  );

}



type EvidenceItem = {

  figure: string;



  title: string;



  purpose: string;



  action: string;



  evidence: string;



  result: string;



  imageSrc?: string;



  commandImageSrc?: string;

};



// Curated, deduplicated Task 3 evidence files.

// All curated names are URL-safe.

const evidencePath = (filename: string) =>
  `/images/task-3/evidence/${filename}`;



const evidenceItems: EvidenceItem[] = [

  {

    figure: "3.2",



    title: "B1 — Azure Virtual Network subnet configuration.",



    purpose:

      "Separate administrative access, protected workloads and firewall infrastructure into distinct subnets.",



    action:

      "Inspected 270907283-vNet in Azure Portal. PublicSN uses 10.0.0.0/26, PrivateSN uses 10.0.0.64/26, and AzureFirewallSubnet uses 10.0.0.128/26. PublicSN and PrivateSN both show association with route table 270907283-rt.",



    evidence:

      "Azure Portal > 270907283-vNet > Subnets. The screenshot displays subnet names, IPv4 ranges and route-table associations.",



    result:

      "All three subnet entries and both route-table associations are visible. This confirms the configuration shown in the portal, not successful traffic inspection or enforcement.",



    imageSrc: evidencePath("01-vnet-subnets.png"),

  },



  {

    figure: "3.3",



    title: "B2 — User-Defined Routes and Next Hops",



    purpose:

      "Direct default-route traffic towards the firewall while retaining a specific Internet route for the administrator's RDP return destination.",



    action:

      "Inspected route table 270907283-rt. Route-To-Firewall sends 0.0.0.0/0 to VirtualAppliance 10.0.0.132. RDP-Return-MyPC sends 222.153.10.215/32 to Internet.",



    evidence:

      "Azure Portal > 270907283-rt > Routes. Both routes, destination prefixes and next-hop settings are visible.",



    result:

      "The configured /32 destination is more specific than 0.0.0.0/0 and therefore takes precedence for matching traffic. Firewall private IP, NIC effective routes and end-to-end RDP/web filtering remain to be verified.",



    imageSrc: evidencePath("02-udr-routes.png"),

  },



  {

    figure: "3.4",



    title: "B3 — Azure Infrastructure Deployment Verification",



    purpose:

      "Confirm that the Azure infrastructure deployment operation completed successfully before proceeding with firewall configuration and security validation.",



    action:

      "Reviewed the Azure deployment overview in resource group 270907283-rg. Azure Resource Manager reported that the deployment operation completed successfully.",



    evidence:

      "The Azure Portal deployment overview displays the message 'Your deployment is complete', together with the deployment name and associated resource group.",



    result:

      "The screenshot confirms successful completion of the recorded Azure deployment operation. However, it does not independently verify the Azure Firewall resource, its private IP address, associated policy or application rules. These settings require separate verification.",



    imageSrc: evidencePath("03-deployment-success.png"),

  },



  {

    figure: "3.5",



    title: "B4 — Azure Firewall Overview and Private IP Verification",



    purpose:

      "Verify the successful provisioning of Azure Firewall and confirm that its private IP address matches the next-hop address configured in the user-defined route table.",



    action:

      "Inspected the Azure Firewall resource 270907283-fw in the Azure Portal. Reviewed its provisioning state, Standard SKU, virtual network, dedicated firewall subnet, private IP address and associated firewall policy.",



    evidence:

      "The Azure Firewall Overview confirms provisioning state Succeeded, private IP address 10.0.0.132, virtual network 270907283-vNet, subnet AzureFirewallSubnet and firewall policy 270907283-fw-policy. The Overview also displays two application rules in one collection.",



    result:

      "Azure Firewall is successfully provisioned and its private IP address matches the Virtual Appliance next hop configured in route table 270907283-rt. The firewall policy is associated with the resource. These observations verify configuration consistency, while effective traffic inspection and website filtering remain subject to testing.",



    imageSrc: evidencePath("04-firewall-overview.png"),

  },



  {

    figure: "3.6",



    title: "B5 — Azure Firewall Application Rule Configuration",



    purpose:

      "Restrict outbound web access from the protected private subnet using centrally managed Azure Firewall application rules.",



    action:

      "Reviewed firewall policy 270907283-fw-policy and its Allow-Web-Traffic-RCG rule collection group. The Allow-Bing-Web collection contains two allow rules for HTTP port 80 and HTTPS port 443, both applying to source subnet 10.0.0.64/26.",



    evidence:

      "The Azure Portal displays the Allow-Bing rule for www.bing.com and the Allow-Ubuntu-Repo rule for azure.archive.ubuntu.com. Both rules have the Allow action, with collection priority 100 and group priority 200.",



    result:

      "The firewall policy contains destination-specific application rules for the protected subnet. This demonstrates the intended allow-list configuration, including the Ubuntu repository exception. Actual enforcement, successful Bing access and blocking of other websites require connectivity tests from the protected VM.",



    imageSrc: evidencePath("05-firewall-application-rules.png"),

  },



  {

    figure: "3.7",



    title: "B6 — Jump Host Network Configuration",



    purpose:

      "Provide a controlled administrative access point to the Azure virtual network while restricting direct RDP access to a designated administrator IP address.",



    action:

      "Inspected the network settings of VM 270907283-jumphost. Verified its placement in PublicSN, public and private IP assignments, network interface and associated Network Security Group. Reviewed the inbound RDP rule permitting TCP port 3389 from 222.153.10.215/32.",



    evidence:

      "The Azure Portal Network settings page shows VNet 270907283-vNet, subnet PublicSN, private IP 10.0.0.4, public IP 40.82.192.28 and NSG 270907283-jumphost-nsg. The Allow-RDP-MyPC rule has priority 100 and permits TCP 3389 from the specified /32 address.",



    result:

      "The Jump Host has a public endpoint and a configured source-restricted RDP rule. This supports the intended administrative access design while reducing exposure compared with an unrestricted RDP rule. Successful RDP connectivity and access to the protected VM require separate verification.",



    imageSrc: evidencePath("06-jumphost-public-ip.png"),

  
    commandImageSrc: evidencePath("07-jumphost-rdp.png"),
  },



  {

    figure: "3.8",



    title: "B7 — Protected TestVM Network Configuration",



    purpose:

      "Verify that the protected virtual machine is deployed within the private subnet without a directly assigned public IP address, reducing its exposure to unsolicited internet connections.",



    action:

      "Inspected the network settings of 270907283-testvm in Azure Portal. Reviewed its virtual network, subnet placement, private IP address, network interface, public IP assignment and associated Network Security Group.",



    evidence:

      "The Azure Portal confirms that 270907283-testvm is attached to 270907283-vNet / PrivateSN, using network interface 270907283-testvm987 and private IP address 10.0.0.68. No public IP address is assigned. The associated NSG is 270907283-testvm-nsg, displaying the three default inbound security rules.",



    result:

      "The TestVM is configured within the protected private subnet without a directly assigned public IP address. Its NSG provides default virtual-network access and denies unmatched inbound traffic. This supports the intended network-isolation design, although administrative connectivity, effective routing and firewall enforcement require separate verification.",



    imageSrc: evidencePath("08-private-testvm-network.png"),

  },



  {

    figure: "3.9",



    title: "B8 — TestVM Effective Route Verification",



    purpose:

      "Confirm that the protected virtual machine has an active user-defined default route directing outbound traffic towards Azure Firewall.",



    action:

      "Opened the Effective routes view for network interface 270907283-testvm987. Reviewed the associated route table, address prefixes, route states and next-hop configurations.",



    evidence:

      "The Azure Portal identifies route table 270907283-rt and shows an active user-defined route for 0.0.0.0/0 with next-hop type Virtual appliance and IP address 10.0.0.132. The default Internet route is marked Invalid. A separate /32 Internet route remains Active.",



    result:

      "The TestVM network interface has an active user-defined default route pointing to Azure Firewall at 10.0.0.132, matching the firewall private IP verified in Figure 3.5. This confirms the intended default-route configuration is effective on the NIC. Actual traffic forwarding and application-rule enforcement must still be validated through connectivity tests.",



    imageSrc: evidencePath("09-testvm-effective-routes.png"),

  },



  {

    figure: "3.10",



    title: "B9 — Protected VM HTTPS Connectivity Testing",



    purpose:

      "Validate selective outbound HTTPS access from the protected TestVM through Azure Firewall.",



    action:

      "Performed HTTPS connectivity tests from the private TestVM to an authorised destination (www.bing.com) and a restricted destination (www.microsoft.com). Reviewed the terminal responses to compare permitted and unsuccessful connections.",



    evidence:

      "The saved terminal screenshots document the HTTPS tests. The Bing test provides evidence of a successful HTTP response, while the Microsoft test records an unsuccessful HTTPS request with an SSL connection error.",



    result:

      "The tests support selective outbound access. The failed Microsoft request alone does not establish the cause of the failure; Azure Firewall diagnostic logs provide additional evidence of policy enforcement.",



    imageSrc: evidencePath("10-https-bing-allowed.png"),



    commandImageSrc: evidencePath("11-https-microsoft-failed.png"),

  },



  {

    figure: "3.11",



    title: "B9.5 — Azure Firewall Denied Traffic Verification",



    purpose:

      "Verify that Azure Firewall enforces outbound application rules for the private TestVM.",



    action:

      "Executed a KQL query against AZFWApplicationRule to identify denied outbound requests from TestVM (10.0.0.68) over the previous 24 hours.",



    evidence:

      "The query returned 47 denied requests across seven domains, including three requests to www.google.com.",



    result:

      "Azure Firewall diagnostic logs confirm denied outbound requests from TestVM. The Google denial records support the unsuccessful HTTPS test, while Bing returned HTTP/2 200. Exact timestamp correlation remains to be verified.",



    imageSrc: evidencePath("12-firewall-denied-summary.png"),



    commandImageSrc: evidencePath("13-firewall-denied-details.png"),

  },



  {

    figure: "3.12",



    title: "B9.6 — Azure Firewall Allowed Traffic Verification",



    imageSrc: evidencePath("14-firewall-bing-allowed-log.png"),



    purpose:

      "Verify that Azure Firewall permits authorised outbound HTTPS traffic from the private TestVM according to its configured application rules.",



    action:

      "Executed a KQL query against the AZFWApplicationRule table, filtering records from the previous 24 hours for source IP 10.0.0.68 and destination www.bing.com. Reviewed the recorded firewall actions and matching rule.",



    evidence:

      "Azure Firewall diagnostic logs returned three matching records. All three recorded Action = Allow and Rule = Allow-Bing for traffic originating from TestVM (10.0.0.68).",



    result:

      "The firewall logs confirm that the configured Allow-Bing application rule permitted requests to www.bing.com. Combined with the denied-traffic evidence in Figure 3.11, this demonstrates selective outbound traffic control through Azure Firewall.",

  },



  {

    figure: "3.13",



    title: "Azure Firewall Ubuntu Repository Traffic Verification",



    imageSrc: evidencePath("15-ubuntu-repository-logs.png"),



    purpose:

      "Verify that Azure Firewall permits authorised outbound traffic from the private TestVM to the Ubuntu package repository.",



    action:

      "Executed a KQL query against the AZFWApplicationRule table, filtering the previous 48 hours for source IP 10.0.0.68 and destination azure.archive.ubuntu.com. Examined the recorded firewall actions and matching application rules.",



    evidence:

      "Azure Firewall diagnostic logs show requests from TestVM to azure.archive.ubuntu.com. Later records display Action = Allow and Rule = Allow-Ubuntu-Repo, while earlier records display Action = Deny.",



    result:

      "The logs confirm that the Allow-Ubuntu-Repo application rule permitted the recorded repository requests. Earlier denied requests provide additional evidence of firewall enforcement, although the exact cause of the change in behaviour requires configuration history to establish.",

  },



  {

    // B9.8 — Final route verification



    figure: "3.14",



    title: "Final Effective Route Verification",



    imageSrc: evidencePath("16-final-routing-verification.png"),



    purpose:

      "Confirm that the private TestVM uses Azure Firewall as its default outbound network gateway.",



    action:

      "Inspected the effective routes of network interface 270907283-testvm987 in Azure Portal. Reviewed the associated route table, active user-defined routes, destination prefixes and next-hop configuration.",



    evidence:

      "The network interface is associated with route table 270907283-rt. The active user-defined route Route-To-Firewall directs 0.0.0.0/0 traffic to virtual appliance 10.0.0.132. The default internet route is marked Invalid.",



    result:

      "The effective route configuration confirms that TestVM's default outbound traffic is directed through Azure Firewall. Combined with the firewall's allowed and denied traffic logs, this provides evidence that outbound traffic is routed through and controlled by the firewall.",

  },

];



function EvidenceCard({ item }: { item: EvidenceItem }) {

  return (

    <article className="break-inside-avoid rounded-xl border border-slate-200 bg-white p-5 print:shadow-none">

      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">

        Figure {item.figure}

      </p>



      <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>



      {item.imageSrc ? (

        <figure className="mt-4">

          <img

            src={item.imageSrc}

            alt={item.title}

            className="w-full rounded-lg border border-slate-200"

          />



          <figcaption className="mt-2 text-xs text-slate-500">

            Figure {item.figure} — {item.title}

          </figcaption>

        </figure>

      ) : (

        <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">

          Screenshot not matched to an original evidence file — verify before

          submission.

        </div>

      )}



      {/* Smaller supporting evidence screenshot */}



      {item.commandImageSrc && (

        <figure className="mx-auto mt-5 w-full md:w-1/2">

          <img

            src={item.commandImageSrc}

            alt={`Supporting screenshot for Figure ${item.figure}`}

            className="w-full rounded-lg border border-slate-200 shadow-sm"

          />



          <figcaption className="mt-2 text-center text-xs italic text-slate-500">

            {item.figure === "3.10"

              ? "Supporting evidence — restricted HTTPS destination test"

              : "Supporting evidence — additional verification screenshot"}

          </figcaption>

        </figure>

      )}



      <dl className="mt-5 space-y-3 text-sm leading-6">

        <div>

          <dt className="font-semibold text-slate-900">Purpose</dt>



          <dd>{item.purpose}</dd>

        </div>



        <div>

          <dt className="font-semibold text-slate-900">Action</dt>



          <dd>{item.action}</dd>

        </div>



        <div>

          <dt className="font-semibold text-slate-900">Evidence</dt>



          <dd>{item.evidence}</dd>

        </div>



        <div>

          <dt className="font-semibold text-slate-900">

            Result / Interpretation

          </dt>



          <dd>{item.result}</dd>

        </div>

      </dl>

    </article>

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

            Architecture, security risk evaluation, firewall implementation and

            validation of restricted website access in Microsoft Azure.

          </p>



          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">

            <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">

              Assessment Weight: 35%

            </span>



            <span className="rounded-full bg-amber-50 px-3 py-2 text-amber-800">

              Implementation Documentation

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

              This task examines the design and implementation of a secure Azure

              network environment in response to an organisation's requirement

              to restrict internet access for users within a designated subnet.

            </p>



            <p>

              The documented solution design consists of an Azure Virtual

              Network, separate public and private subnets, two virtual

              machines, Azure Firewall and a user-defined route table. The

              firewall is intended to permit access to www.bing.com while

              restricting other websites from the protected VM, with a

              documented Ubuntu repository exception.

            </p>



            <p>

              The implementation is evaluated through configuration evidence,

              network connectivity tests and firewall rule validation. The

              objective is to demonstrate centralised access control and explain

              its value to business security.

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

              <article

                key={title}

                className="rounded-xl border border-slate-200 bg-white p-5"

              >

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

            pricing, regional availability, VM sizes and RDP access before

            provisioning resources.

          </p>

        </section>



        <section className="mb-14">

          <SectionHeading

            number="3.5"

            title="Implementation Strategy"

            subtitle="The deployment sequence and evidence required for each checkpoint."

          />



          <div className="space-y-4">

            {checkpoints.map(([number, title, reason]) => (

              <div

                key={number}

                className="flex gap-4 rounded-xl border border-slate-200 p-5"

              >

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

            <strong>Routing verification note:</strong> The portal confirms that

            270907283-rt is associated with both PublicSN and PrivateSN. Its

            default route points to 10.0.0.132, while a more specific /32 route

            points to Internet. Verify NIC effective routes, firewall policy,

            DNS resolution and observed website tests before claiming

            enforcement.

          </div>

        </section>



        <section className="mb-14">

          <SectionHeading

            number="3.6"

            title="Verified Implementation Evidence and Validation"

            subtitle="Configuration, connectivity and diagnostic-log evidence captured during implementation."

          />



          <div className="space-y-5">

            {evidenceItems.map((item) => (

              <EvidenceCard key={item.figure} item={item} />

            ))}

          </div>

        </section>



        <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">

          Task 3 — Architecture and implementation documentation. Unverified

          results are explicitly marked pending.

        </footer>

      </main>

    </>

  );

}

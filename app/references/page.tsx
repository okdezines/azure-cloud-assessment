import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "References",
    description:
        "APA 7th edition references and technical sources supporting the Azure Cloud Engineering Assessment.",
};

type Reference = {
    id: number;
    author: string;
    year: string;
    title: string;
    source?: string;
    url: string;
    label: string;
};

type ReferenceGroup = {
    number: string;
    title: string;
    description: string;
    references: Reference[];
};

const referenceGroups: ReferenceGroup[] = [
    {
        number: "01",
        title: "Microsoft Azure Documentation",
        description:
            "Official Microsoft documentation supporting the Azure services, configurations and technical concepts implemented throughout the assessment.",
        references: [
            {
                id: 1,
                author: "Microsoft",
                year: "n.d.",
                title: "Introduction to Azure Storage",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction",
                label: "Azure Storage",
            },
            {
                id: 2,
                author: "Microsoft",
                year: "n.d.",
                title: "What is Azure Blob Storage?",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview",
                label: "Blob Storage",
            },
            {
                id: 3,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure Blob storage trigger for Azure Functions",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger",
                label: "Azure Functions",
            },
            {
                id: 4,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure Blob storage bindings for Azure Functions overview",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob",
                label: "Functions Bindings",
            },
            {
                id: 5,
                author: "Microsoft",
                year: "n.d.",
                title: "Assign an Azure role for access to blob data",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal",
                label: "Azure RBAC",
            },
            {
                id: 6,
                author: "Microsoft",
                year: "n.d.",
                title: "What is Azure Files?",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction",
                label: "Azure Files",
            },
            {
                id: 7,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure Blob Storage lifecycle management overview",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",
                label: "Lifecycle Management",
            },
            {
                id: 8,
                author: "Microsoft",
                year: "n.d.",
                title: "Blob versioning",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview",
                label: "Blob Versioning",
            },
            {
                id: 9,
                author: "Microsoft",
                year: "n.d.",
                title: "Soft delete for blobs",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview",
                label: "Soft Delete",
            },
            {
                id: 10,
                author: "Microsoft",
                year: "n.d.",
                title: "Introduction to Table storage",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/tables/table-storage-overview/",
                label: "Table Storage",
            },
            {
                id: 11,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure Storage redundancy",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy",
                label: "Storage Redundancy",
            },
        ],
    },
    {
        number: "02",
        title: "Cloud Architecture & Security",
        description:
            "Technical guidance supporting cloud architecture decisions, access control, data protection, resilience and security practices discussed in the report.",
        references: [
            {
                id: 12,
                author: "Microsoft",
                year: "n.d.",
                title: "Microsoft Azure Well-Architected Framework pillars",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/well-architected/pillars",
                label: "Well-Architected Framework",
            },
            {
                id: 13,
                author: "Microsoft",
                year: "n.d.",
                title: "Reliability design principles",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/well-architected/reliability/principles",
                label: "Reliability",
            },
            {
                id: 14,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure reliability documentation",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/reliability/",
                label: "Resilience & Recovery",
            },
            {
                id: 15,
                author: "Microsoft",
                year: "n.d.",
                title: "Get started with storage architecture design",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/architecture/storage/storage-get-started",
                label: "Storage Architecture",
            },
        ],
    },
    {
        number: "03",
        title: "Development & Deployment",
        description:
            "Technical documentation supporting the development, automation, containerisation and deployment technologies used throughout the assessment.",
        references: [
            {
                id: 16,
                author: "Microsoft",
                year: "n.d.",
                title: "Azure Functions Node.js developer reference",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node",
                label: "Node.js & TypeScript",
            },
            {
                id: 17,
                author: "Microsoft",
                year: "n.d.",
                title: "Code and test Azure Functions locally",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local",
                label: "Local Development",
            },
            {
                id: 18,
                author: "Microsoft",
                year: "n.d.",
                title: "Develop Azure Functions locally by using Core Tools",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local",
                label: "Functions Core Tools",
            },
            {
                id: 19,
                author: "Microsoft",
                year: "n.d.",
                title: "Deployment technologies in Azure Functions",
                source: "Microsoft Learn",
                url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-deployment-technologies",
                label: "Functions Deployment",
            },
            {
                id: 20,
                author: "GitHub",
                year: "n.d.",
                title: "Deploying your website automatically",
                source: "GitHub Docs",
                url: "https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically",
                label: "GitHub Actions & Pages",
            },
        ],
    },
    {
        number: "04",
        title: "Assessment & Learning Resources",
        description:
            "Course materials and supporting learning resources used to develop and reinforce the technical knowledge demonstrated in this assessment.",
        references: [
            {
                id: 21,
                author: "Verma, A.",
                year: "2025",
                title: "Introduction to Azure",
                source: "Yoobee Colleges – Cloud Engineering course materials",
                url: "",
                label: "Azure Fundamentals",
            },
            {
                id: 22,
                author: "Verma, A.",
                year: "2025",
                title: "Azure Blob Trigger",
                source: "Yoobee Colleges – Cloud Engineering course materials",
                url: "",
                label: "Blob Trigger",
            },
            {
                id: 23,
                author: "Verma, A.",
                year: "2025",
                title: "Azure Storage Introduction",
                source: "Yoobee Colleges – Cloud Engineering course materials",
                url: "",
                label: "Azure Storage",
            },
            {
                id: 24,
                author: "Verma, A.",
                year: "2025",
                title: "Azure Storage File Share",
                source: "Yoobee Colleges – Cloud Engineering course materials",
                url: "",
                label: "Azure Files",
            },
            {
                id: 25,
                author: "Verma, A.",
                year: "2025",
                title: "Azure Function HTTP Trigger",
                source: "Yoobee Colleges – Cloud Engineering course materials",
                url: "",
                label: "Azure Functions",
            },
        ],
    },
];

export default function ReferencesPage() {
    const totalReferences = referenceGroups.reduce(
        (total, group) => total + group.references.length,
        0,
    );

    return (
        <main className="min-h-screen bg-slate-50 text-slate-950">
            {/* Hero */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                        Assessment References · APA 7
                    </p>

                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                        References &amp;
                        <span className="block text-blue-600">Technical Sources</span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                        This reference list documents the authoritative technical
                        documentation, cloud architecture guidance and learning resources
                        used to support the implementation, analysis and recommendations
                        presented throughout the Microsoft Azure Cloud Engineering
                        assessment.
                    </p>

                    {/* Reference overview */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            APA 7th Edition
                        </span>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            Microsoft Learn
                        </span>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            Technical Documentation
                        </span>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                            {totalReferences} Sources
                        </span>
                    </div>
                </div>
            </section>

            {/* Reference methodology */}
            <section className="border-b border-slate-200 bg-slate-950 text-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                            Referencing Approach
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight">
                            Evidence supported by authoritative sources
                        </h2>
                    </div>

                    <p className="leading-7 text-slate-300">
                        References are included where external technical documentation
                        supports the explanation of Azure services, architectural
                        decisions, security controls and implementation practices. The
                        practical screenshots and architecture diagrams contained in the
                        assessment remain evidence of the implementation itself, while
                        these sources provide supporting technical authority.
                    </p>
                </div>
            </section>

            {/* Reference groups */}
            <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="space-y-16">
                    {referenceGroups.map((group) => (
                        <section key={group.number}>
                            {/* Group heading */}
                            <div className="grid gap-5 border-b border-slate-200 pb-7 md:grid-cols-[80px_1fr]">
                                <div className="text-3xl font-bold text-blue-600">
                                    {group.number}
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                                        Reference Category
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold tracking-tight">
                                        {group.title}
                                    </h2>

                                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                                        {group.description}
                                    </p>
                                </div>
                            </div>

                            {/* References */}
                            {group.references.length > 0 ? (
                                <div className="mt-8 space-y-5">
                                    {group.references.map((reference) => (
                                        <article
                                            key={reference.id}
                                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-7"
                                        >
                                            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                                <div className="max-w-4xl">
                                                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                                                        {reference.label}
                                                    </span>

                                                    {/* APA reference */}
                                                    <p className="mt-4 pl-6 -indent-6 leading-8 text-slate-700">
                                                        {reference.author} ({reference.year}).{" "}
                                                        <span className="italic">{reference.title}</span>
                                                        {reference.source && (
                                                            <>
                                                                .{" "}
                                                                <span className="font-medium">
                                                                    {reference.source}
                                                                </span>
                                                            </>
                                                        )}
                                                        .
                                                    </p>

                                                    <a
                                                        href={reference.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-3 block break-all pl-6 text-sm font-medium text-blue-600 transition hover:text-blue-800 hover:underline"
                                                    >
                                                        {reference.url}
                                                    </a>
                                                </div>

                                                <span className="shrink-0 text-xs font-bold text-slate-300">
                                                    REF {String(reference.id).padStart(2, "0")}
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                /* Temporary placeholder until we populate references */
                                <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                                        +
                                    </div>

                                    <p className="mt-4 font-semibold text-slate-800">
                                        References ready to be added
                                    </p>

                                    <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                                        APA 7 references relevant to this category will be added
                                        after reviewing the technical sources used throughout the
                                        assessment.
                                    </p>
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </section>

            {/* Referencing principles */}
            <section className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                        Academic &amp; Technical Integrity
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight">
                        How sources are used in this assessment
                    </h2>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <span className="text-xs font-bold text-blue-600">01</span>

                            <h3 className="mt-4 font-bold">Implementation Evidence</h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Screenshots and verification tests demonstrate the Azure
                                resources and configurations implemented during the practical
                                assessment.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <span className="text-xs font-bold text-blue-600">02</span>

                            <h3 className="mt-4 font-bold">Architecture Interpretation</h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Architecture diagrams demonstrate my understanding of how the
                                implemented Azure services interact as part of a wider cloud
                                solution.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-6">
                            <span className="text-xs font-bold text-blue-600">03</span>

                            <h3 className="mt-4 font-bold">Technical References</h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Authoritative documentation supports technical explanations,
                                service behaviour, architectural reasoning and business
                                recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 rounded-2xl bg-slate-950 p-7 text-white md:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                            Referencing Principle
                        </p>

                        <p className="mt-3 max-w-4xl text-lg font-medium leading-8">
                            Practical evidence demonstrates what I implemented. Architecture
                            diagrams demonstrate how I understand the solution. Technical
                            references provide authoritative support for why the Azure
                            services and configurations behave as described.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
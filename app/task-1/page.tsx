import EvidenceCard from "./EvidenceCard";

import ImplementationJourney from "./ImplementationJourney";

export default function TaskOnePage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
            {/* =========================================================
    TASK 1 — MAIN ARCHITECTURE DIAGRAM
========================================================= */}

            <section className="bg-white">
                <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">

                    {/* Diagram heading */}
                    <div className="max-w-4xl">
                        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                            Task 1 · Solution Architecture
                        </p>

                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Azure Storage Solution Architecture
                        </h1>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                            This architecture diagram provides an overview of the Azure
                            Storage solution implemented throughout Task 1. It shows the
                            relationship between the primary storage environment,
                            event-driven Azure Function automation, backup storage and the
                            supporting security, protection and storage services.
                        </p>
                    </div>
                    {/* Implementation Naming Notice */}
                    <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg">
                                !
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                                    Implementation Notice · Resource Naming
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-700">
                                    The Azure resources implemented in this assessment use descriptive
                                    names that differ slightly from the naming examples provided in the
                                    assessment scenario. The functional roles remain equivalent:
                                    <span className="font-semibold text-slate-900">
                                        {" "}st270907283assessment
                                    </span>{" "}
                                    represents the primary storage account,
                                    <span className="font-semibold text-slate-900">
                                        {" "}st270907283backup
                                    </span>{" "}
                                    represents the backup storage account, and
                                    <span className="font-semibold text-slate-900">
                                        {" "}func-270907283-blob-backup
                                    </span>{" "}
                                    represents the Azure Function App. These names are used consistently
                                    throughout the implementation, architecture diagrams and evidence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main architecture */}
                    <div className="mt-12 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-sm">

                        {/* Resource Group */}
                        <div className="border-b border-blue-100 bg-blue-600 px-6 py-7 text-center text-white">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">
                                Azure Resource Group
                            </p>

                            <p className="mt-2 text-xl font-bold">
                                270907283-azure-assessment-rg
                            </p>

                            <p className="mt-1 text-sm text-blue-100">
                                Australia East
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 lg:p-10">

                            {/* Primary architecture flow */}
                            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">

                                {/* Primary Storage */}
                                <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                            ☁
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                                Primary Storage
                                            </p>

                                            <h3 className="mt-1 break-words font-bold text-slate-950">
                                                st270907283assessment
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Blob Container
                                        </p>

                                        <p className="mt-2 font-semibold text-slate-950">
                                            assessment-data
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Operational source container containing the
                                            assessment blob objects.
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">
                                        →
                                    </div>

                                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Blob event
                                    </p>
                                </div>

                                {/* Azure Function */}
                                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-2xl">
                                            ⚡
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                                                Azure Function
                                            </p>

                                            <h3 className="mt-1 font-bold text-slate-950">
                                                blobBackupTrigger
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-sm leading-6 text-slate-600">
                                        Detects newly created blobs in the primary container
                                        and automatically initiates the backup operation.
                                    </p>

                                    <div className="mt-4 rounded-xl bg-white p-3 text-sm font-semibold text-violet-700">
                                        Event-driven serverless automation
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">
                                        →
                                    </div>

                                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Automated copy
                                    </p>
                                </div>

                                {/* Backup Storage */}
                                <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
                                            ☁
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                                Backup Storage
                                            </p>

                                            <h3 className="mt-1 break-words font-bold text-slate-950">
                                                st270907283backup
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                            Blob Container
                                        </p>

                                        <p className="mt-2 font-semibold text-slate-950">
                                            backup-data
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Separate destination used to store automatically
                                            created backup copies.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Verification example */}
                            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                                            Verified End-to-End Flow
                                        </p>

                                        <p className="mt-2 font-semibold text-slate-950">
                                            task1-automated-backup-test.txt · 383 B
                                        </p>
                                    </div>

                                    <div className="text-sm font-semibold text-emerald-700">
                                        Source → Function → Backup ✓
                                    </div>
                                </div>
                            </div>

                            {/* Supporting capabilities */}
                            <div className="mt-10">
                                <div className="text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                                        Storage Capabilities & Controls
                                    </p>

                                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                                        Supporting Task 1 Services
                                    </h3>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                                    {/* RBAC */}
                                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                                        <div className="text-2xl">🔐</div>

                                        <h4 className="mt-3 font-bold text-slate-950">
                                            RBAC
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Least-privilege access using Azure role-based
                                            access control.
                                        </p>
                                    </div>

                                    {/* Soft Delete */}
                                    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                                        <div className="text-2xl">♻</div>

                                        <h4 className="mt-3 font-bold text-slate-950">
                                            Soft Delete & Versioning
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Protects blob data and supports recovery of
                                            deleted or previous versions.
                                        </p>
                                    </div>

                                    {/* Lifecycle */}
                                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                        <div className="text-2xl">↻</div>

                                        <h4 className="mt-3 font-bold text-slate-950">
                                            Lifecycle Management
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Automatically moves qualifying older blobs to
                                            the Cool access tier.
                                        </p>
                                    </div>

                                    {/* File Share */}
                                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                                        <div className="text-2xl">📁</div>

                                        <h4 className="mt-3 font-bold text-slate-950">
                                            Azure File Share
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Managed cloud file storage accessible through
                                            SMB.
                                        </p>
                                    </div>

                                    {/* Table Storage */}
                                    <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">
                                        <div className="text-2xl">▦</div>

                                        <h4 className="mt-3 font-bold text-slate-950">
                                            Table Storage
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            NoSQL key-value storage for structured
                                            assessment records.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Architecture interpretation */}
                            <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3">

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        Data Layer
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Azure Storage provides Blob Storage, Azure Files and
                                        Table Storage for the different workload types.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                                        Automation Layer
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Azure Functions responds to Blob Storage events and
                                        performs the automated backup operation.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                                        Protection Layer
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        RBAC, soft delete, versioning and lifecycle policies
                                        provide access control, recoverability and storage
                                        optimisation.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Figure caption */}
                    <div className="mt-5 border-l-4 border-blue-600 pl-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Figure A1 - Task 1 Architecture Diagram
                        </p>

                        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
                            Overall architecture of the Azure Storage solution implemented
                            for Task 1, showing the relationship between the primary Blob
                            Storage environment, event-driven Azure Function automation,
                            separate backup storage and the supporting storage, security
                            and data-protection capabilities.
                        </p>
                    </div>
                </div>
            </section>
            {/* Architecture Visualisation & Learning Rationale */}
            <section className="mx-auto mt-10 max-w-6xl px-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                        Architecture Visualisation & Learning Rationale
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                        Why This Architecture Diagram Matters
                    </h3>

                    <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
                        Figure A1 provides a consolidated visual representation of the Azure
                        architecture implemented throughout Task 1. While the individual
                        evidence screenshots demonstrate that specific Azure resources,
                        configurations and tests were completed, the architecture diagram
                        shows how these components operate together as one cloud solution.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Proof of Concept */}
                    <article className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            01 · Proof of Concept
                        </p>

                        <h4 className="mt-3 text-lg font-bold text-slate-950">
                            Connecting the Evidence
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            The diagram complements the practical evidence rather than
                            replacing it. Screenshots provide direct evidence that individual
                            resources were configured and tested, while the architecture
                            diagram explains the relationship and data flow between those
                            resources.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            This allows the automated backup workflow to be followed visually
                            from the source Blob Storage container, through the Azure Function,
                            and into the separate backup destination.
                        </p>
                    </article>

                    {/* Architecture Understanding */}
                    <article className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                            02 · Architecture Understanding
                        </p>

                        <h4 className="mt-3 text-lg font-bold text-slate-950">
                            Seeing Azure as a System
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            The diagram helps me understand Azure services as connected parts
                            of an architecture rather than as isolated resources. I can
                            visually follow the sequence from storage, to an event, to
                            serverless processing, and finally to the backup destination.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            It also shows where RBAC, soft delete, versioning, lifecycle
                            management, Azure Files and Table Storage contribute security,
                            protection and additional storage capabilities.
                        </p>
                    </article>

                    {/* Learning Journey */}
                    <article className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                            03 · Learning Journey
                        </p>

                        <h4 className="mt-3 text-lg font-bold text-slate-950">
                            Visualising to Understand
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Visualising cloud infrastructure has become an important part of
                            my learning process because it helps me understand and remember
                            the relationships between services more effectively than viewing
                            each configuration independently.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            My goal is not simply to learn how to configure individual Azure
                            resources, but to understand why they are used, how they
                            communicate, and how they can be combined to meet a business
                            requirement.
                        </p>
                    </article>
                </div>

                {/* Key takeaway */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        Key Learning Principle
                    </p>

                    <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                        Screenshots prove the implementation. Architecture diagrams explain
                        the implementation.
                    </p>

                    <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
                        Using both approaches allows this report to demonstrate not only that
                        the Azure solution was successfully implemented, but also my
                        understanding of how the individual cloud services form a complete
                        architecture.
                    </p>
                </div>
            </section>


            {/* ====================== SECTION 1 — STORAGE INFRASTRUCTURE================================= */}

            <section className="border-t border-slate-200 bg-slate-50">

                <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">

                    {/* Section heading */}
                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        01 · Storage Infrastructure
                    </p>
                    {/* =========================================================
    SECTION 01 ARCHITECTURE DIAGRAM
========================================================= */}
                    <div className="mt-12">
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                Section Architecture
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-slate-950">
                                Azure Storage Infrastructure
                            </h3>

                            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                                This diagram isolates the storage foundation implemented for Task 1,
                                showing how the resource group contains the primary Azure Storage
                                account, Blob Storage service, assessment container and the blob
                                objects used throughout the practical implementation.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm">
                            {/* Resource Group Header */}
                            <div className="bg-blue-600 px-6 py-5 text-center text-white">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100">
                                    Azure Resource Group
                                </p>

                                <p className="mt-1 text-lg font-bold">
                                    270907283-azure-assessment-rg
                                </p>

                                <p className="mt-1 text-xs text-blue-100">
                                    Australia East
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 md:p-8">

                                {/* Main Architecture Flow */}
                                <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">

                                    {/* Storage Account */}
                                    <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-lg">
                                            ☁
                                        </div>

                                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                            Storage Account
                                        </p>

                                        <h4 className="mt-2 break-words text-sm font-bold text-slate-950">
                                            st270907283assessment
                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-slate-600">
                                            Central Azure Storage resource used to host the
                                            assessment storage services.
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden items-center justify-center lg:flex">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-blue-500">→</div>
                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                Provides
                                            </p>
                                        </div>
                                    </div>

                                    {/* Blob Service */}
                                    <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-lg">
                                            ◉
                                        </div>

                                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-600">
                                            Storage Service
                                        </p>

                                        <h4 className="mt-2 text-sm font-bold text-slate-950">
                                            Azure Blob Storage
                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-slate-600">
                                            Object storage service used for unstructured assessment
                                            data and automated processing.
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden items-center justify-center lg:flex">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-blue-500">→</div>
                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                Contains
                                            </p>
                                        </div>
                                    </div>

                                    {/* Container */}
                                    <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                                            ▣
                                        </div>

                                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                                            Blob Container
                                        </p>

                                        <h4 className="mt-2 text-sm font-bold text-slate-950">
                                            assessment-data
                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-slate-600">
                                            Primary source container used to store the blob objects
                                            created and tested during Task 1.
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden items-center justify-center lg:flex">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-blue-500">→</div>
                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                Stores
                                            </p>
                                        </div>
                                    </div>

                                    {/* Blob Objects */}
                                    <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-lg">
                                            ▤
                                        </div>

                                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-600">
                                            Blob Objects
                                        </p>

                                        <h4 className="mt-2 text-sm font-bold text-slate-950">
                                            Assessment Data
                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-slate-600">
                                            Block blobs used to verify storage, automation,
                                            protection and lifecycle behaviour.
                                        </p>
                                    </div>
                                </div>

                                {/* Configuration Characteristics */}
                                <div className="mt-7 border-t border-slate-200 pt-6">
                                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                        Storage Account Configuration
                                    </p>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Region
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-slate-900">
                                                Australia East
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Performance
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-slate-900">
                                                Standard
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Replication
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-slate-900">
                                                LRS
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                Access Tier
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-slate-900">
                                                Hot
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Architecture Meaning */}
                                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                        Architecture Relationship
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-700">
                                        The resource group provides the management boundary for the
                                        solution. Within it, the storage account provides Azure Blob
                                        Storage, where the{" "}
                                        <span className="font-semibold text-slate-900">
                                            assessment-data
                                        </span>{" "}
                                        container stores the block blobs used by the later automation,
                                        security, recovery and lifecycle-management stages.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Figure Caption */}
                        <div className="mt-5 border-l-4 border-blue-600 pl-4">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Figure A2 · Storage Infrastructure Architecture
                            </p>

                            <p className="mt-2 text-xs leading-5 text-slate-600">
                                Logical architecture of the primary Azure Storage environment
                                implemented for Task 1, showing the relationship between the resource
                                group, storage account, Blob Storage service, assessment-data
                                container and stored blob objects.
                            </p>
                        </div>
                    </div> <br />

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                        Azure Storage Account & Blob Storage
                    </h2>

                    <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                        The first stage of the implementation established the Azure Storage
                        infrastructure required for the assessment. A storage account was
                        configured to provide a central cloud storage platform for blob
                        data, security controls, versioning, recovery and lifecycle
                        management.
                    </p>

                    {/* Infrastructure summary */}
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                Storage Account
                            </p>

                            <p className="mt-3 break-words font-semibold">
                                st270907283assessment
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Central Azure Storage resource used throughout the assessment.
                            </p>
                        </div>

                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                Blob Container
                            </p>

                            <p className="mt-3 break-words font-semibold">assessment-data</p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Container used to store and test assessment blob objects.
                            </p>
                        </div>

                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                Primary Region
                            </p>

                            <p className="mt-3 font-semibold">Australia East</p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Primary Azure region hosting the assessment storage account.
                            </p>
                        </div>
                    </div>

                    <ImplementationJourney
                        title="Building the Azure Storage Foundation"
                        description="These stages show the progression from configuring the primary Azure Storage account to verifying the storage services that supported the assessment workloads."
                        items={[
                            {
                                figure: 1,
                                stage: "Stage 01",
                                title: "Primary Storage Account Configuration",
                                description:
                                    "Configured the primary Azure Storage account in Australia East using Standard performance, locally redundant storage and the Hot access tier before deployment.",
                                image:
                                    "/evidence/task-1/01-storage-infrastructure/journey/01-primary-storage-account-configuration.png",
                                alt: "Azure Portal showing the primary storage account configuration before deployment",
                                caption:
                                    "Primary Azure Storage account configuration showing the selected region, performance tier, redundancy and access settings.",
                            },
                            {
                                figure: 2,
                                stage: "Stage 02",
                                title: "Storage Services Implemented",
                                description:
                                    "Verified the resulting storage environment after Blob Storage, Azure Files and Table Storage resources had been implemented during the assessment.",
                                image:
                                    "/evidence/task-1/01-storage-infrastructure/journey/02-storage-services-implemented.png",
                                alt: "Azure Portal showing the implemented storage services",
                                caption:
                                    "Azure Storage environment showing the storage services implemented to support the Task 1 workloads.",
                            },
                            {
                                figure: 3,
                                stage: "Stage 03",
                                title: "Storage Services Deployed",
                                description: "Deployment is complete with verified details.",
                                image:
                                    "/evidence/task-1/01-storage-infrastructure/journey/03-storage-services-implemented.png",
                                alt: "Azure Portal showing the completed storage deployment",
                                caption:
                                    "Completed Azure Storage deployment confirming that the storage infrastructure was successfully established.",
                            },
                        ]}
                    />

                    {/* Evidence */}
                    <div className="mt-14 space-y-14">
                        <EvidenceCard
                            figure={4}
                            title="Primary Azure Storage Infrastructure Verified"
                            image="/evidence/task-1/01-storage-infrastructure/primary/01-storage-infrastructure-verified.png"
                            alt="Azure Portal showing the implemented primary storage account and Azure Storage services"
                            caption="Primary evidence confirming the implemented Azure Storage environment used throughout Task 1."
                            purpose="The purpose of this evidence was to verify that the primary Azure Storage environment had been successfully established and was available to support the different storage workloads required throughout Task 1."
                            action="After configuring the storage account, I reviewed the deployed Azure Storage environment and verified the storage services and resources used throughout the assessment."
                            result="The primary storage environment was successfully established and provided the Azure Storage foundation required for Blob Storage, Azure Files, Table Storage, security controls, lifecycle management and data-protection testing."
                            significance="This provides the primary evidence that the underlying Azure Storage infrastructure was operational. The earlier journey screenshots document how the environment was configured and developed, while this evidence confirms the resulting storage environment that supported the later implementation activities."
                        />
                    </div>

                    {/* =========================================================
    SECTION 02 — FUNCTION AUTOMATION
========================================================= */}

                    <div className="mt-24 border-t border-slate-200 pt-16">
                        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                            02 · Function Automation
                        </p>
                        {/* =========================================================
    FIGURE A3 — FUNCTION AUTOMATION ARCHITECTURE
========================================================= */}
                        <div className="mt-12">
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                                    Section Architecture
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-slate-950">
                                    Event-Driven Blob Backup Automation
                                </h3>

                                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                                    This diagram isolates the automated backup workflow implemented for
                                    Task 1. A newly created blob in the primary assessment container
                                    generates a storage event, which invokes the Azure Function and
                                    automatically copies the blob into a separate backup storage
                                    environment.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm">
                                {/* Header */}
                                <div className="bg-violet-600 px-6 py-5 text-center text-white">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-100">
                                        Azure Function Automation
                                    </p>

                                    <p className="mt-1 text-lg font-bold">
                                        Event-Driven Blob Backup Workflow
                                    </p>

                                    <p className="mt-1 text-xs text-violet-100">
                                        Source → Event → Function → Backup → Verification
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 md:p-8">
                                    {/* Main Flow */}
                                    <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">

                                        {/* Stage 1 */}
                                        <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-lg">
                                                ☁
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                                01 · Source
                                            </p>

                                            <h4 className="mt-2 text-sm font-bold text-slate-950">
                                                assessment-data
                                            </h4>

                                            <p className="mt-3 text-xs leading-5 text-slate-600">
                                                Primary Blob Storage container monitored for newly
                                                created assessment objects.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-blue-50 p-3">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-blue-500">
                                                    Verification Object
                                                </p>

                                                <p className="mt-1 break-words text-xs font-semibold text-slate-900">
                                                    task1-automated-backup-test.txt
                                                </p>

                                                <p className="mt-1 text-[11px] text-slate-500">
                                                    383 B
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden items-center justify-center lg:flex">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-blue-500">→</div>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                    Blob Event
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stage 2 */}
                                        <div className="rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-lg">
                                                ⚡
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-600">
                                                02 · Trigger
                                            </p>

                                            <h4 className="mt-2 text-sm font-bold text-slate-950">
                                                blobBackupTrigger
                                            </h4>

                                            <p className="mt-3 text-xs leading-5 text-slate-600">
                                                Azure Function Blob trigger detects the new object and
                                                invokes the backup handler automatically.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-violet-50 p-3">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-violet-500">
                                                    Trigger Path
                                                </p>

                                                <p className="mt-1 break-words text-xs font-semibold text-slate-900">
                                                    assessment-data/{"{name}"}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden items-center justify-center lg:flex">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-violet-500">→</div>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                    Execute
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stage 3 */}
                                        <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-lg">
                                                ↻
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-600">
                                                03 · Automation
                                            </p>

                                            <h4 className="mt-2 text-sm font-bold text-slate-950">
                                                Backup Operation
                                            </h4>

                                            <p className="mt-3 text-xs leading-5 text-slate-600">
                                                The Function reads the incoming blob and uses the backup
                                                storage connection to write the same object into the
                                                destination container.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-amber-50 p-3">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-amber-600">
                                                    Operation
                                                </p>

                                                <p className="mt-1 text-xs font-semibold text-slate-900">
                                                    uploadData(blob)
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden items-center justify-center lg:flex">
                                            <div className="text-center">
                                                <div className="text-xl font-bold text-emerald-500">→</div>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                    Copy
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stage 4 */}
                                        <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                                                ✓
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                                                04 · Destination
                                            </p>

                                            <h4 className="mt-2 text-sm font-bold text-slate-950">
                                                backup-data
                                            </h4>

                                            <p className="mt-3 text-xs leading-5 text-slate-600">
                                                Separate backup container receives the automatically
                                                generated copy of the source blob.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-emerald-50 p-3">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                                                    Verified Backup
                                                </p>

                                                <p className="mt-1 break-words text-xs font-semibold text-slate-900">
                                                    task1-automated-backup-test.txt
                                                </p>

                                                <p className="mt-1 text-[11px] text-slate-500">
                                                    383 B ✓
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Infrastructure Boundary */}
                                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                                        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-blue-600">
                                                Primary Storage
                                            </p>

                                            <p className="mt-2 break-words text-xs font-semibold text-slate-900">
                                                st270907283assessment
                                            </p>

                                            <p className="mt-1 text-[11px] leading-5 text-slate-600">
                                                Hosts the operational assessment-data container.
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-violet-600">
                                                Serverless Processing
                                            </p>

                                            <p className="mt-2 text-xs font-semibold text-slate-900">
                                                Azure Functions
                                            </p>

                                            <p className="mt-1 text-[11px] leading-5 text-slate-600">
                                                Responds automatically to Blob Storage events.
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                                                Backup Storage
                                            </p>

                                            <p className="mt-2 break-words text-xs font-semibold text-slate-900">
                                                st270907283backup
                                            </p>

                                            <p className="mt-1 text-[11px] leading-5 text-slate-600">
                                                Hosts the separate backup-data destination container.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Verified Flow */}
                                    <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                                                    Verified End-to-End Flow
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-slate-950">
                                                    task1-automated-backup-test.txt · 383 B
                                                </p>
                                            </div>

                                            <div className="text-sm font-bold text-emerald-700">
                                                Source → Trigger → Function → Backup ✓
                                            </div>
                                        </div>
                                    </div>

                                    {/* Architecture Interpretation */}
                                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600">
                                            Architecture Relationship
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-700">
                                            The architecture uses an event-driven model rather than a
                                            manual copy process. Blob creation in{" "}
                                            <span className="font-semibold text-slate-950">
                                                assessment-data
                                            </span>{" "}
                                            acts as the event source. The{" "}
                                            <span className="font-semibold text-slate-950">
                                                blobBackupTrigger
                                            </span>{" "}
                                            Function responds to that event and writes the object to the
                                            separate{" "}
                                            <span className="font-semibold text-slate-950">
                                                backup-data
                                            </span>{" "}
                                            container, separating operational data from its automated
                                            backup copy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Figure Caption */}
                            <div className="mt-4 border-l-4 border-violet-500 pl-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600">
                                    Figure A3 · Event-Driven Backup Architecture
                                </p>

                                <p className="mt-2 text-xs leading-5 text-slate-600">
                                    Event-driven Azure Blob Storage backup architecture implemented and
                                    re-verified during Task 1. A newly uploaded blob in the primary
                                    assessment-data container invokes the blobBackupTrigger Azure
                                    Function, which automatically writes the object to the separate
                                    backup-data destination.
                                </p>
                            </div>
                        </div> <br />

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                            Event-Driven Blob Backup with Azure Functions
                        </h2>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                            An event-driven backup workflow was implemented using Azure
                            Functions and Azure Blob Storage. The{" "}
                            <strong>assessment-data</strong> container acted as the primary
                            source, while the <strong>blobBackupTrigger</strong> Function
                            monitored the container for newly created blob objects.
                        </p>

                        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                            When a new blob was detected, the Function automatically processed
                            the storage event and copied the object to the{" "}
                            <strong>backup-data</strong> destination. This demonstrated how
                            event-driven cloud automation can respond to changes in storage
                            without requiring the backup operation to be started manually.
                        </p>

                        {/* =====================================================
    AUTOMATED BACKUP WORKFLOW
====================================================== */}

                        <div className="mt-10 rounded-2xl border border-violet-200 bg-violet-50/50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                                Automated Backup Workflow
                            </p>

                            <div className="mt-5 grid gap-4 md:grid-cols-5 md:items-center">
                                {/* Source */}
                                <div className="min-w-0 rounded-xl border border-blue-200 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        Primary Source
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        assessment-data
                                    </p>

                                    <p className="mt-1 break-words text-sm text-slate-600">
                                        task1-automated-backup-test.txt
                                    </p>

                                    <p className="mt-1 text-xs font-semibold text-blue-600">
                                        383 B
                                    </p>
                                </div>

                                <div className="text-center text-2xl font-semibold text-violet-500">
                                    →
                                </div>

                                {/* Function */}
                                <div className="min-w-0 rounded-xl border border-violet-200 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                                        Automation
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        blobBackupTrigger
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        Azure Blob Trigger
                                    </p>

                                    <p className="mt-1 text-xs font-semibold text-violet-600">
                                        Event-driven execution
                                    </p>
                                </div>

                                <div className="text-center text-2xl font-semibold text-emerald-500">
                                    →
                                </div>

                                {/* Destination */}
                                <div className="min-w-0 rounded-xl border border-emerald-200 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                                        Backup Destination
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        backup-data
                                    </p>

                                    <p className="mt-1 break-words text-sm text-slate-600">
                                        task1-automated-backup-test.txt
                                    </p>

                                    <p className="mt-1 text-xs font-semibold text-emerald-600">
                                        383 B ✓
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-slate-600">
                                Verification object:{" "}
                                <strong>task1-automated-backup-test.txt</strong>. The same
                                383-byte blob was uploaded to the{" "}
                                <strong>assessment-data</strong> source container, detected
                                automatically by <strong>blobBackupTrigger</strong> and written
                                to the separate <strong>backup-data</strong> destination.
                            </p>
                        </div>

                        {/* =====================================================
    PROOF OF PROCESS
====================================================== */}

                        <ImplementationJourney
                            title="Building the Automated Blob Backup Workflow"
                            description="These stages document the progression from establishing the Azure backup resources and developing the Blob trigger Function to deploying and confirming the Function App as a running Azure resource. The separate primary evidence below then verifies the completed workflow using a fresh controlled end-to-end test."
                            items={[
                                {
                                    figure: 5,
                                    stage: "Stage 01",
                                    title: "Azure Backup Architecture Resources",
                                    description:
                                        "Established the Azure resources required for the automated backup architecture, including the primary storage account, separate backup storage account, Function App and supporting Application Insights resource within the assessment resource group.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/01-azure-backup-architecture-resources.png",
                                    alt:
                                        "Azure resource group showing the Function App, Application Insights, primary storage account and backup storage account used by the automated backup solution",
                                    caption:
                                        "Azure resource group containing the Function App, monitoring resource and separate primary and backup storage accounts used by the Blob backup architecture.",
                                },
                                {
                                    figure: 6,
                                    stage: "Stage 02",
                                    title: "Blob Trigger Function Developed",
                                    description:
                                        "Developed the blobBackupTrigger Function to monitor the assessment-data container and respond automatically when a new blob object was detected.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/02-blob-trigger-function-code.png",
                                    alt:
                                        "Visual Studio Code showing the blobBackupTrigger Azure Function code",
                                    caption:
                                        "Blob trigger Function configured to monitor assessment-data and execute the automated backup operation when new Blob Storage objects are detected.",
                                },
                                {
                                    figure: 7,
                                    stage: "Stage 03",
                                    title: "Azure Function App Deployed and Running",
                                    description:
                                        "Verified the deployed Azure Function App in the Azure portal and confirmed that func-270907283-blob-backup was running in Australia East as part of the assessment resource group.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/03-function-app-running.png",
                                    alt:
                                        "Azure portal showing func-270907283-blob-backup Function App with Running status",
                                    caption:
                                        "Azure Function App func-270907283-blob-backup deployed in Australia East and confirmed with a Running status.",
                                },
                            ]}
                        />

                        {/* =====================================================
    PRIMARY EVIDENCE & INTERPRETATION
====================================================== */}

                        <div className="mt-14">
                            <div className="mb-8">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                                    Primary Verification Evidence
                                </p>

                                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                                    Fresh End-to-End Automated Backup Verification
                                </h3>

                                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                    A fresh verification run was performed using{" "}
                                    <strong>task1-automated-backup-test.txt</strong>. The same
                                    383-byte object can be followed from the primary source
                                    container, through the Azure Function runtime, and into the
                                    separate backup destination. This provides a clear evidence
                                    chain for the completed event-driven architecture.
                                </p>
                            </div>

                            <div className="space-y-14">
                                <EvidenceCard
                                    figure={8}
                                    title="Verification Object Uploaded to Primary Storage"
                                    image="/evidence/task-1/02-function-automation/primary/01-source-blob-verification.png"
                                    alt="Azure Blob Storage assessment-data container showing task1-automated-backup-test.txt with a size of 383 bytes"
                                    caption="Fresh verification object task1-automated-backup-test.txt visible in the assessment-data source container with a size of 383 B."
                                    purpose="The purpose of this step was to establish a clear source object for the final end-to-end verification of the automated backup workflow."
                                    action="I uploaded task1-automated-backup-test.txt to the assessment-data container in the primary storage account while the blobBackupTrigger Function runtime was active."
                                    result="Azure Blob Storage displayed task1-automated-backup-test.txt in assessment-data as an available block blob with a size of 383 B."
                                    significance="This establishes the starting point of the verification chain. The object name and 383-byte size provide identifiable values that can be compared against the Function runtime output and the resulting object in the separate backup destination."
                                />

                                <EvidenceCard
                                    figure={9}
                                    title="Blob Trigger Automatically Executed the Backup"
                                    image="/evidence/task-1/02-function-automation/primary/02-function-runtime-verification.png"
                                    alt="Azure Functions runtime showing blobBackupTrigger detecting task1-automated-backup-test.txt and successfully backing up the 383-byte blob"
                                    caption="Azure Functions runtime detecting task1-automated-backup-test.txt, reporting a source size of 383 bytes and completing the automated backup successfully."
                                    purpose="The purpose of this test was to verify that creation of the new source blob automatically invoked the Blob-triggered Function and initiated the backup operation without requiring a manual copy."
                                    action="With the local Azure Functions runtime running, I uploaded task1-automated-backup-test.txt to assessment-data. The blobBackupTrigger Function detected the storage event, read the incoming blob and initiated the configured backup operation to backup-data."
                                    result="The runtime identified task1-automated-backup-test.txt, recorded the source blob size as 383 bytes, reported that the object was being backed up to backup-data, logged 'Backup completed successfully' and completed the blobBackupTrigger execution with a Succeeded status."
                                    significance="This is the strongest runtime evidence that the solution operates as an event-driven automation workflow. Blob creation acted as the event source, Azure Functions executed the application logic automatically and the backup operation was completed without manually copying the object between containers."
                                />

                                <EvidenceCard
                                    figure={10}
                                    title="Automated Backup Destination Verified"
                                    image="/evidence/task-1/02-function-automation/primary/03-backup-destination-verification.png"
                                    alt="Azure Blob Storage backup-data container showing task1-automated-backup-test.txt with a size of 383 bytes after automated backup"
                                    caption="Separate backup-data destination confirming task1-automated-backup-test.txt was written successfully with the same 383 B size as the source object."
                                    purpose="The purpose of the final verification step was to confirm that the automated Function execution produced the expected object in the separate backup storage destination."
                                    action="After the Function reported a successful backup, I inspected the backup-data container in the dedicated st270907283backup storage account and compared the resulting object with the original source blob."
                                    result="The backup-data container contained task1-automated-backup-test.txt as an available block blob with a size of 383 B, matching the object shown in the primary assessment-data source container."
                                    significance="This completes the end-to-end evidence chain. The matching object name and size across the source, Function runtime and destination demonstrate that the storage event was detected, processed automatically and resulted in a separate backup copy. Together, Figures 8–10 provide direct evidence of the complete Source → Trigger → Function → Backup workflow represented in Figure A3."
                                />
                            </div>

                            {/* End-to-End Verification Summary */}
                            <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                                    End-to-End Verification Result
                                </p>

                                <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                            Source
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-950">
                                            assessment-data
                                        </p>
                                        <p className="mt-1 break-words text-xs text-slate-600">
                                            task1-automated-backup-test.txt · 383 B
                                        </p>
                                    </div>

                                    <div className="text-center font-bold text-violet-500">
                                        →
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                                            Automation
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-950">
                                            blobBackupTrigger
                                        </p>
                                        <p className="mt-1 text-xs text-slate-600">
                                            Execution Succeeded
                                        </p>
                                    </div>

                                    <div className="text-center font-bold text-emerald-500">
                                        →
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                                            Destination
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-950">
                                            backup-data
                                        </p>
                                        <p className="mt-1 break-words text-xs text-slate-600">
                                            task1-automated-backup-test.txt · 383 B ✓
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 text-sm leading-6 text-slate-700">
                                    The same verification object was observed at the source,
                                    processed successfully by the Blob-triggered Function and
                                    confirmed in the separate backup destination. This validates
                                    the automated backup architecture implemented for Task 1.
                                </p>
                            </div>
                        </div>

                        {/* =====================================================
        FUNCTION AUTOMATION — LEARNING INTERPRETATION
    ====================================================== */}

                        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-7">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                Learning Interpretation
                            </p>

                            <h3 className="mt-3 text-xl font-bold text-slate-950">
                                From Storage Event to Automated Cloud Action
                            </h3>

                            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                This implementation demonstrated the relationship between cloud
                                storage events and serverless application logic. The Blob
                                container did not simply store the test object; the creation of
                                the object became the event that initiated further processing.
                                Azure Functions provided the application layer that responded to
                                that event and performed the backup operation.
                            </p>

                            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                The implementation also demonstrated the importance of
                                separating the source data from the backup destination. The{" "}
                                <strong>assessment-data</strong> container represented the
                                operational source, while <strong>backup-data</strong> provided
                                a distinct destination for the copied object. This made the
                                source-to-destination workflow easier to verify and demonstrated
                                how storage services and serverless compute can be combined to
                                automate repetitive cloud operations.
                            </p>
                        </div>
                    </div>

                    {/* =========================================================
    SECTION 03 — IDENTITY & ACCESS CONTROL
========================================================= */}

                    <section className="mt-24">
                        <div className="border-t border-slate-200 pt-12">
                            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                                03 · Identity & Access Control
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                                Microsoft Entra ID & Azure RBAC
                            </h2>

                            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                                Azure role-based access control was implemented to test how
                                permissions can be assigned according to the principle of least
                                privilege. A dedicated Microsoft Entra identity was created and
                                assigned the Storage Blob Data Reader role so that access to
                                Azure Blob Storage could be tested without granting unnecessary
                                write, modification or deletion permissions.
                            </p>

                            {/* =====================================================
    FIGURE A4 — IDENTITY & ACCESS CONTROL ARCHITECTURE
====================================================== */}

                            <div className="mt-10 rounded-3xl border border-indigo-200 bg-white p-7 shadow-sm">
                                <div className="mb-7">
                                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">
                                        Section Architecture
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                                        Identity & Least-Privilege Access Control
                                    </h3>

                                    <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                                        This diagram shows how Microsoft Entra ID authentication and
                                        Azure role-based access control were combined to provide a
                                        dedicated test identity with read-only access to Azure Blob
                                        Storage. The resulting permissions allowed the identity to
                                        read blob data while preventing destructive operations such
                                        as deletion.
                                    </p>
                                </div>

                                {/* Architecture */}
                                <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-slate-50">
                                    {/* Header */}
                                    <div className="border-b border-indigo-200 bg-indigo-50 px-6 py-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
                                            Azure Identity & Access Control
                                        </p>

                                        <h4 className="mt-1 text-xl font-bold text-slate-950">
                                            Least-Privilege Blob Storage Access
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-600">
                                            Identity → Authentication → RBAC Role → Storage Access →
                                            Permission Enforcement
                                        </p>
                                    </div>

                                    <div className="p-6">
                                        {/* Main flow */}
                                        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
                                            {/* Identity */}
                                            <div className="rounded-2xl border border-indigo-200 bg-white p-5">
                                                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                                                    01 · Identity
                                                </p>

                                                <h5 className="mt-2 font-bold text-slate-950">
                                                    Microsoft Entra ID
                                                </h5>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    A dedicated test identity was used to authenticate
                                                    independently from the privileged administrator
                                                    account.
                                                </p>

                                                <div className="mt-4 rounded-xl bg-indigo-50 px-4 py-3">
                                                    <p className="text-xs font-semibold text-indigo-700">
                                                        Authenticated identity
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center text-2xl font-bold text-indigo-400">
                                                →
                                            </div>

                                            {/* RBAC */}
                                            <div className="rounded-2xl border border-violet-200 bg-white p-5">
                                                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                                                    02 · Authorisation
                                                </p>

                                                <h5 className="mt-2 font-bold text-slate-950">
                                                    Azure RBAC
                                                </h5>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Access was restricted by assigning the built-in
                                                    Storage Blob Data Reader role according to the
                                                    principle of least privilege.
                                                </p>

                                                <div className="mt-4 rounded-xl bg-violet-50 px-4 py-3">
                                                    <p className="text-xs font-semibold text-violet-700">
                                                        Storage Blob Data Reader
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center text-2xl font-bold text-blue-400">
                                                →
                                            </div>

                                            {/* Resource */}
                                            <div className="rounded-2xl border border-blue-200 bg-white p-5">
                                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                                    03 · Protected Resource
                                                </p>

                                                <h5 className="mt-2 break-words font-bold text-slate-950">
                                                    st270907283assessment
                                                </h5>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    The assigned role governed the identity&apos;s data
                                                    access to Blob Storage within the assessment
                                                    storage environment.
                                                </p>

                                                <div className="mt-4 rounded-xl bg-blue-50 px-4 py-3">
                                                    <p className="text-xs font-semibold text-blue-700">
                                                        assessment-data
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Permission boundary */}
                                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                                            {/* Allowed */}
                                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                                                            Permission Test · Allowed
                                                        </p>

                                                        <h5 className="mt-2 text-lg font-bold text-slate-950">
                                                            Read Blob Data
                                                        </h5>
                                                    </div>

                                                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                                                        ✓ ALLOWED
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm leading-6 text-slate-700">
                                                    The test identity could authenticate and read Blob
                                                    Storage data because the assigned role includes
                                                    blob read permissions.
                                                </p>
                                            </div>

                                            {/* Denied */}
                                            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                                                            Permission Test · Denied
                                                        </p>

                                                        <h5 className="mt-2 text-lg font-bold text-slate-950">
                                                            Delete Blob Data
                                                        </h5>
                                                    </div>

                                                    <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-700">
                                                        ✕ DENIED
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm leading-6 text-slate-700">
                                                    A delete attempt was rejected because Storage Blob
                                                    Data Reader does not provide the permissions
                                                    required to remove Blob Storage objects.
                                                </p>

                                                <div className="mt-3 rounded-xl border border-red-200 bg-white px-4 py-3">
                                                    <p className="break-words font-mono text-xs font-semibold text-red-700">
                                                        403 · AuthorizationPermissionMismatch
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Security model */}
                                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                                Security Relationship
                                            </p>

                                            <p className="mt-3 text-sm leading-7 text-slate-700">
                                                Microsoft Entra ID establishes{" "}
                                                <strong>who the user is</strong>, while Azure RBAC
                                                determines <strong>what that identity can do</strong>.
                                                Assigning Storage Blob Data Reader provided only the
                                                permissions required for the test workload. Successful
                                                read access combined with a denied delete operation
                                                demonstrates that the least-privilege boundary was
                                                actively enforced.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Caption */}
                                <div className="mt-4 border-l-4 border-indigo-500 pl-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                                        Figure A4 · Identity & Access Control Architecture
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Least-privilege access-control architecture implemented for
                                        Azure Blob Storage. Microsoft Entra ID authenticates the
                                        dedicated test identity, Azure RBAC assigns the Storage Blob
                                        Data Reader role, and the resulting permission boundary allows
                                        blob read operations while denying unauthorised deletion.
                                    </p>
                                </div>
                            </div>

                            {/* =====================================================
            PROOF OF PROCESS
        ====================================================== */}

                            <ImplementationJourney
                                title="Implementing Least-Privilege Blob Access"
                                description="These stages document the progression from creating a dedicated Microsoft Entra test identity, through configuring Azure role-based access control, to confirming that the Storage Blob Data Reader role was assigned at the storage-account scope. The primary evidence below then tests whether that permission boundary was actively enforced."
                                items={[
                                    {
                                        figure: 11,
                                        stage: "Stage 01",
                                        title: "Dedicated Microsoft Entra Identity Created",
                                        description:
                                            "Created the Azure Assessment Blob Reader identity to provide a separate account for testing restricted access independently from the privileged administrator account.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/01-entra-blob-reader-user.png",
                                        alt: "Microsoft Entra ID showing the dedicated Azure Assessment Blob Reader test identity",
                                        caption:
                                            "Dedicated Microsoft Entra identity created for least-privilege Azure Blob Storage access testing.",
                                    },
                                    {
                                        figure: 12,
                                        stage: "Stage 02",
                                        title: "Azure RBAC Role Configuration",
                                        description:
                                            "Opened Access Control (IAM) on the assessment storage account and used the Azure role assignment workflow to configure a built-in data-plane role appropriate for read-only Blob Storage access.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/02-rbac-add-role-assignment.png",
                                        alt: "Azure portal showing the Add role assignment workflow in Access Control IAM",
                                        caption:
                                            "Azure RBAC role assignment workflow used to configure controlled access to Blob Storage.",
                                    },
                                    {
                                        figure: 13,
                                        stage: "Stage 03",
                                        title: "Storage Blob Data Reader Assigned",
                                        description:
                                            "Assigned the built-in Storage Blob Data Reader role to the Azure Assessment Blob Reader identity at the assessment storage account, providing blob data read access without granting unnecessary write or delete permissions.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/03-storage-blob-data-reader-role-assigned.png",
                                        alt: "Azure Access Control IAM showing Storage Blob Data Reader assigned to the Azure Assessment Blob Reader identity",
                                        caption:
                                            "Storage Blob Data Reader role assigned to the dedicated test identity for the assessment storage account.",
                                    },
                                ]}
                            />

                            {/* =====================================================
            PRIMARY EVIDENCE & INTERPRETATION
        ====================================================== */}

                            <div className="mt-14 space-y-14">
                                <EvidenceCard
                                    figure={14}
                                    title="Least-Privilege Blob Access Successfully Enforced"
                                    image="/evidence/task-1/03-access-control/primary/04-rbac-delete-denied-403.png"
                                    alt="Microsoft Azure Storage Explorer showing blob access and a failed deletion returning HTTP 403 AuthorizationPermissionMismatch"
                                    caption="Primary evidence confirming that the restricted Blob Reader identity could access the assessment-data container while an attempted deletion of azure-assessment-test.txt was denied with HTTP 403 AuthorizationPermissionMismatch."
                                    purpose="The purpose of this validation was to verify that the dedicated Microsoft Entra test identity could access Azure Blob Storage using the assigned Storage Blob Data Reader role while remaining unable to perform destructive operations. This tested whether the configured Azure RBAC permission boundary was actively enforced."
                                    action="I authenticated to the storage resource using the dedicated Azure Assessment Blob Reader identity and accessed the assessment-data container. I then attempted to delete azure-assessment-test.txt. The identity could access the blob data, but the delete operation required permissions that were not provided by the assigned Storage Blob Data Reader role."
                                    result="Azure Storage Explorer displayed the blob within the assessment-data container, demonstrating that the authenticated identity could access the required data. When deletion was attempted, Azure rejected the request with HTTP 403 and returned AuthorizationPermissionMismatch. The blob remained stored in the container."
                                    significance="This provides direct practical evidence that Azure RBAC enforced the principle of least privilege. Microsoft Entra ID established who the user was, while Azure RBAC determined what that authenticated identity was authorised to do. The combination of successful blob access and denied deletion demonstrates that the identity received the access required for its task without being granted unnecessary destructive permissions."
                                />
                            </div>

                            {/* =====================================================
            ACCESS CONTROL — LEARNING INTERPRETATION
        ====================================================== */}

                            <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-7">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                    Learning Interpretation
                                </p>

                                <h3 className="mt-3 text-xl font-bold text-slate-950">
                                    From Identity to Enforced Least Privilege
                                </h3>

                                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                    This implementation demonstrated that authentication and
                                    authorisation perform different roles within Azure security.
                                    Microsoft Entra ID established the identity of the test user,
                                    while Azure RBAC determined which operations that identity was
                                    permitted to perform against the storage resource.
                                </p>

                                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                    Assigning the Storage Blob Data Reader role provided the
                                    identity with the access required to work with blob data
                                    without granting broader modification or deletion permissions.
                                    The HTTP 403 AuthorizationPermissionMismatch response
                                    demonstrated that Azure enforced this restriction when an
                                    operation exceeded the permissions assigned to the identity.
                                </p>

                                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                    This showed me why least privilege is more than simply
                                    selecting a role in the Azure portal. The effectiveness of an
                                    access-control configuration should also be validated by
                                    testing both an authorised operation and an operation that the
                                    identity should not be permitted to perform.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* =========================================================
    SECTION 04 — AZURE FILES
========================================================= */}

                    <div className="mt-24 border-t border-slate-200 pt-16">
                        {/* Section heading */}
                        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                            04 · Azure File Share
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                            Azure Files — Managed File Sharing
                        </h2>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                            Azure Files was implemented to demonstrate managed cloud-based
                            file storage using the SMB protocol. A dedicated file share was
                            created within the Azure Storage account, configured for the
                            assessment workload and tested with a sample file. The connection
                            configuration was then reviewed to demonstrate how the share could
                            be mounted and accessed from a client operating system.
                        </p>

                        {/* =====================================================
    SECTION ARCHITECTURE — AZURE FILES
====================================================== */}

                        <div className="mt-12 rounded-3xl border border-cyan-200 bg-white p-5 shadow-sm md:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600">
                                Section Architecture
                            </p>

                            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                                Azure Files — Managed File Sharing Architecture
                            </h3>

                            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                This diagram shows how Azure Files provides managed cloud-based file
                                storage through a dedicated file share. The assessment-files share was
                                created inside the assessment storage account, used to store a test
                                file and reviewed through the client connection configuration to
                                demonstrate how the cloud resource can be accessed as a network file
                                share using SMB.
                            </p>

                            {/* Architecture diagram */}
                            <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-200 bg-slate-50">
                                {/* Header */}
                                <div className="border-b border-cyan-200 bg-cyan-50 px-5 py-5 md:px-6">
                                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-700">
                                        Azure Managed File Storage
                                    </p>

                                    <h4 className="mt-2 text-xl font-bold text-slate-950">
                                        Cloud File Share & Client Access
                                    </h4>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Storage Account → Azure Files → File Share → Stored File → SMB
                                        Client Access
                                    </p>
                                </div>

                                <div className="p-5 md:p-6">
                                    {/* Main architecture flow */}
                                    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
                                        {/* Storage account */}
                                        <div className="rounded-2xl border border-blue-200 bg-white p-5">
                                            <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">
                                                01 · Storage Platform
                                            </p>

                                            <h5 className="mt-3 font-bold text-slate-950">
                                                st270907283assessment
                                            </h5>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                The Azure Storage account provides the cloud platform
                                                containing the managed Azure Files service.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                                                Azure Storage Account
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden items-center justify-center px-1 text-2xl font-bold text-cyan-500 lg:flex">
                                            →
                                        </div>

                                        {/* File share */}
                                        <div className="rounded-2xl border border-cyan-300 bg-cyan-50 p-5">
                                            <p className="text-xs font-extrabold uppercase tracking-wide text-cyan-700">
                                                02 · Managed File Share
                                            </p>

                                            <h5 className="mt-3 font-bold text-slate-950">
                                                assessment-files
                                            </h5>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                Azure Files provides the managed file-sharing layer,
                                                allowing file-based data to be stored in a dedicated
                                                cloud file share.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-cyan-700">
                                                Azure Files · SMB
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden items-center justify-center px-1 text-2xl font-bold text-cyan-500 lg:flex">
                                            →
                                        </div>

                                        {/* Stored file */}
                                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                            <p className="text-xs font-extrabold uppercase tracking-wide text-emerald-700">
                                                03 · Stored Data
                                            </p>

                                            <h5 className="mt-3 font-bold text-slate-950">
                                                azure-files-test.txt
                                            </h5>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                A test file was uploaded successfully to verify that the
                                                managed share could store file-based assessment data.
                                            </p>

                                            <div className="mt-4 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-emerald-700">
                                                ✓ File Stored Successfully
                                            </div>
                                        </div>
                                    </div>

                                    {/* SMB connection layer */}
                                    <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
                                        <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
                                            <div>
                                                <p className="text-xs font-extrabold uppercase tracking-wide text-amber-700">
                                                    Client Connection
                                                </p>

                                                <h5 className="mt-2 font-bold text-slate-950">
                                                    SMB Network Access
                                                </h5>

                                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                                    Azure provides the configuration required for a
                                                    supported client to mount the assessment-files
                                                    share as a network-accessible file system.
                                                </p>
                                            </div>

                                            <div className="hidden text-2xl font-bold text-amber-500 md:block">
                                                →
                                            </div>

                                            <div className="rounded-xl border border-amber-200 bg-white p-4">
                                                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                                                    Supported Client
                                                </p>

                                                <p className="mt-2 font-bold text-slate-950">
                                                    Windows · Linux · macOS
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                                                        SMB
                                                    </span>

                                                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                                                        TCP 445
                                                    </span>

                                                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                                                        Network Mount
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Configuration summary */}
                                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Storage Type
                                            </p>
                                            <p className="mt-2 text-sm font-bold text-slate-900">
                                                Managed File Share
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Protocol
                                            </p>
                                            <p className="mt-2 text-sm font-bold text-slate-900">
                                                SMB
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Network
                                            </p>
                                            <p className="mt-2 text-sm font-bold text-slate-900">
                                                TCP Port 445
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-slate-200 bg-white p-4">
                                            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Data Protection
                                            </p>
                                            <p className="mt-2 text-sm font-bold text-slate-900">
                                                Soft Delete · 7 Days
                                            </p>
                                        </div>
                                    </div>

                                    {/* Architecture relationship */}
                                    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
                                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                            Architecture Relationship
                                        </p>

                                        <p className="mt-3 text-sm leading-7 text-slate-700">
                                            The Azure Storage account provides the underlying storage
                                            platform, while Azure Files exposes the
                                            <strong> assessment-files</strong> share as managed file
                                            storage. Files such as
                                            <strong> azure-files-test.txt</strong> are stored inside the
                                            share and can be presented to supported client operating
                                            systems through SMB. This differs from Blob Storage because
                                            the workload is accessed through familiar file-sharing
                                            behaviour rather than object-based container access.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Figure caption */}
                            <div className="mt-4 border-l-4 border-cyan-500 pl-4">
                                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-700">
                                    Figure A5 · Azure Files Managed File Sharing Architecture
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Logical architecture of the Azure Files implementation used for
                                    Task 1. The assessment storage account hosts the
                                    assessment-files managed file share, which stores the verified
                                    azure-files-test.txt object and provides SMB-based client
                                    connectivity for supported operating systems.
                                </p>
                            </div>
                        </div>

                        {/* =====================================================
        PROOF OF PROCESS
    ====================================================== */}

                        <ImplementationJourney
                            title="Building the Azure File Share"
                            description="These stages document the progression from creating the Azure file share through to configuring it, storing a test file and reviewing the client connection configuration."
                            items={[
                                {
                                    figure: 15,
                                    stage: "Stage 01",
                                    title: "Azure File Share Created",
                                    description:
                                        "Created the assessment-files Azure file share within the assessment storage account to provide managed shared file storage.",
                                    image:
                                        "/evidence/task-1/04-azure-file-share/journey/01-file-share-service-start.png",
                                    alt: "Azure Portal showing the Azure Files service used to begin creating the assessment file share",
                                    caption:
                                        "Azure Files service used to begin implementing the managed file share for the assessment.",
                                },
                                {
                                    figure: 16,
                                    stage: "Stage 02",
                                    title: "File Share Configuration",
                                    description:
                                        "Configured the assessment-files share with the storage settings required for the assessment workload.",
                                    image:
                                        "/evidence/task-1/04-azure-file-share/journey/02-file-share-configuration.png",
                                    alt: "Azure Portal showing configuration of the assessment-files Azure file share",
                                    caption:
                                        "Configuration of the assessment-files share within the Azure Storage account.",
                                },
                                {
                                    figure: 17,
                                    stage: "Stage 03",
                                    title: "Azure File Share Successfully Created",
                                    description:
                                        "Confirmed that the assessment-files share was successfully provisioned within the assessment storage account and available for managed file storage.",
                                    image:
                                        "/evidence/task-1/04-azure-file-share/journey/03-file-share-created.png",
                                    alt: "Azure Portal showing the successfully created assessment-files Azure file share",
                                    caption:
                                        "The assessment-files Azure file share successfully provisioned and ready to store assessment data.",
                                },
                                {
                                    figure: 18,
                                    stage: "Stage 04",
                                    title: "File Upload Verified",
                                    description:
                                        "Verified that the uploaded file was present and accessible within the managed Azure file share.",
                                    image:
                                        "/evidence/task-1/04-azure-file-share/journey/04-file-upload-verified.png",
                                    alt: "Azure Files showing the uploaded test file successfully stored in assessment-files",
                                    caption:
                                        "Uploaded test file verified within the assessment-files Azure file share.",
                                },
                            ]}
                        />

                        {/* =====================================================
        PRIMARY EVIDENCE & INTERPRETATION
    ====================================================== */}

                        <div className="mt-14 space-y-14">
                            <EvidenceCard
                                figure={19}
                                title="Azure File Share Connectivity Verified"
                                image="/evidence/task-1/04-azure-file-share/primary/01-file-share-cross-platform-connect.png"
                                alt="Azure Files Connect panel showing Windows connection configuration for the assessment-files share"
                                caption="Primary evidence showing the Azure Files connection configuration for the assessment-files share, including Windows SMB connectivity and storage authentication options."
                                purpose="The purpose of this validation was to confirm that the Azure file share was not only created successfully, but could also be presented to a client operating system as a managed network file share."
                                action="I opened the Connect configuration for the assessment-files share and reviewed the Windows connection settings. Azure provided the configuration required to mount the share using SMB, including a drive letter, authentication method and connection script."
                                result="Azure successfully presented the connection configuration for the assessment-files share. The configuration identified SMB connectivity requirements, including TCP port 445, and provided the information required to mount the Azure file share from a supported client."
                                significance="This demonstrates the practical purpose of Azure Files as a managed cloud file-sharing service. Unlike Blob Storage, which is primarily object storage, Azure Files can provide familiar file-system access through protocols such as SMB, allowing cloud-hosted files to be accessed in a similar way to a traditional network file share."
                            />
                        </div>

                        {/* =====================================================
        LEARNING INTERPRETATION
    ====================================================== */}

                        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                                Learning Interpretation
                            </p>

                            <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                                From Cloud Storage to Managed File Sharing
                            </h3>

                            <div className="mt-5 space-y-4 leading-7 text-slate-600">
                                <p>
                                    Implementing Azure Files helped me understand the difference
                                    between object storage and managed file storage. Azure Blob
                                    Storage stores data as objects inside containers, whereas
                                    Azure Files provides file shares that can be accessed using
                                    familiar file-sharing protocols such as SMB.
                                </p>

                                <p>
                                    Creating the <strong>assessment-files</strong> share and
                                    uploading a test file demonstrated the storage side of the
                                    service. Reviewing the Connect configuration then showed how
                                    Azure translates the cloud resource into something that can be
                                    mounted and accessed by a client operating system.
                                </p>

                                <p>
                                    The connection configuration also highlighted an important
                                    networking consideration. SMB commonly uses
                                    <strong> TCP port 445</strong>, meaning successful access
                                    depends not only on the Azure resource but also on network
                                    connectivity, authentication and the security configuration
                                    between the client and Azure.
                                </p>

                                <p>
                                    This demonstrated that selecting an Azure storage service
                                    depends on the workload. Blob Storage is appropriate for
                                    object-based data and application workloads, while Azure Files
                                    is useful when applications or users require traditional
                                    shared file-system behaviour without maintaining a dedicated
                                    file server.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
    SECTION 05 -- Life-cycle-management
========================================================= */}
            <section className="mt-24 border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        05 · Storage Lifecycle & Cost Optimisation
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                        Automated Blob Lifecycle Management
                    </h2>

                    <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                        Azure Blob Storage lifecycle management was configured to
                        automatically manage ageing data and reduce long-term storage costs.
                        A lifecycle rule named{" "}
                        <span className="font-semibold text-slate-800">
                            move-old-blobs-to-cool
                        </span>{" "}
                        was created to identify older block blobs within the assessment
                        workload and transition qualifying data from the Hot access tier to
                        the lower-cost Cool tier.
                    </p>
                    {/* =====================================================
    FIGURE A6 — LIFECYCLE MANAGEMENT ARCHITECTURE
===================================================== */}

                    <div className="mt-12 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
                        {/* Section heading */}
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-600">
                                Section Architecture
                            </p>

                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                                Automated Blob Lifecycle Management
                            </h3>

                            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                                This diagram visualises how the lifecycle management policy evaluates
                                ageing blob data within the assessment workload and automatically
                                transitions qualifying objects from the Hot access tier to the
                                lower-cost Cool tier without deleting the stored data.
                            </p>
                        </div>

                        {/* Architecture diagram */}
                        <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-slate-50">
                            {/* Diagram header */}
                            <div className="border-b border-amber-200 bg-amber-50 px-6 py-5">
                                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-700">
                                    Azure Storage Lifecycle Management
                                </p>

                                <h4 className="mt-1 text-xl font-bold text-slate-900">
                                    Hot → Policy Evaluation → Cool
                                </h4>

                                <p className="mt-2 text-sm text-slate-600">
                                    Blob Storage → Lifecycle Rule → Age Condition → Tier Transition
                                </p>
                            </div>

                            <div className="p-5 sm:p-6">
                                {/* Main flow */}
                                <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">

                                    {/* 01 SOURCE */}
                                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
                                            01 · Source Data
                                        </p>

                                        <h5 className="mt-2 text-lg font-bold text-slate-900">
                                            Hot Access Tier
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            Recently modified assessment blobs remain in the Hot tier
                                            where they are suitable for frequently accessed data.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-blue-100 px-3 py-2 text-xs font-bold text-blue-700">
                                            assessment-data/
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center text-2xl font-bold text-amber-500">
                                        <span className="hidden lg:inline">→</span>
                                        <span className="lg:hidden">↓</span>
                                    </div>

                                    {/* 02 POLICY */}
                                    <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-purple-600">
                                            02 · Automation Policy
                                        </p>

                                        <h5 className="mt-2 text-lg font-bold text-slate-900">
                                            Lifecycle Rule
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            Azure automatically evaluates eligible blobs using the
                                            configured lifecycle management rule.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-purple-100 px-3 py-2 text-xs font-bold text-purple-700">
                                            move-old-blobs-to-cool
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center text-2xl font-bold text-amber-500">
                                        <span className="hidden lg:inline">→</span>
                                        <span className="lg:hidden">↓</span>
                                    </div>

                                    {/* 03 CONDITION */}
                                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-amber-700">
                                            03 · Evaluation
                                        </p>

                                        <h5 className="mt-2 text-lg font-bold text-slate-900">
                                            Age Condition
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            The policy checks whether an eligible base block blob has
                                            remained unmodified for more than 30 days.
                                        </p>

                                        <div className="mt-4 space-y-2">
                                            <div className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                                                ✓ Base block blob
                                            </div>

                                            <div className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                                                ✓ Last modified &gt; 30 days
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center text-center">
                                        <div>
                                            <span className="mb-1 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                                                Qualifies
                                            </span>

                                            <span className="hidden text-2xl font-bold text-emerald-500 lg:inline">
                                                →
                                            </span>

                                            <span className="text-2xl font-bold text-emerald-500 lg:hidden">
                                                ↓
                                            </span>
                                        </div>
                                    </div>

                                    {/* 04 DESTINATION */}
                                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-emerald-700">
                                            04 · Tier Transition
                                        </p>

                                        <h5 className="mt-2 text-lg font-bold text-slate-900">
                                            Cool Access Tier
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            Qualifying ageing blobs are automatically transitioned to
                                            the Cool tier for less frequently accessed data.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700">
                                            Object retained · Not deleted
                                        </div>
                                    </div>
                                </div>

                                {/* Policy configuration summary */}
                                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                            Scope
                                        </p>
                                        <p className="mt-2 text-sm font-bold text-slate-900">
                                            assessment-data/
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                            Blob Type
                                        </p>
                                        <p className="mt-2 text-sm font-bold text-slate-900">
                                            Base block blobs
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                            Condition
                                        </p>
                                        <p className="mt-2 text-sm font-bold text-slate-900">
                                            Last modified &gt; 30 days
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                                        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                            Action
                                        </p>
                                        <p className="mt-2 text-sm font-bold text-slate-900">
                                            Hot → Cool
                                        </p>
                                    </div>
                                </div>

                                {/* Important behaviour */}
                                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-emerald-700">
                                                Lifecycle Outcome
                                            </p>

                                            <h5 className="mt-1 font-bold text-slate-900">
                                                Storage tier changes — the blob remains available
                                            </h5>
                                        </div>

                                        <div className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-extrabold text-emerald-700">
                                            NO DELETION
                                        </div>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        The lifecycle action changes the storage tier of qualifying
                                        objects rather than deleting them. This allows ageing data to
                                        remain available while using a tier intended for less
                                        frequently accessed information.
                                    </p>
                                </div>

                                {/* Architecture relationship */}
                                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
                                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                                        Architecture Relationship
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        The lifecycle policy acts as an automated cost-optimisation
                                        layer over Blob Storage. Objects within{" "}
                                        <span className="font-semibold text-slate-800">
                                            assessment-data/
                                        </span>{" "}
                                        are evaluated against the configured age condition. Eligible
                                        base block blobs that have remained unmodified for more than
                                        30 days can transition from the Hot tier to the Cool tier
                                        without requiring manual intervention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Figure caption */}
                        <div className="mt-4 border-l-4 border-amber-500 pl-4">
                            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-700">
                                Figure A6 · Lifecycle Management Architecture
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Policy-driven Azure Blob Storage lifecycle architecture implemented
                                for Task 1. The{" "}
                                <span className="font-semibold text-slate-800">
                                    move-old-blobs-to-cool
                                </span>{" "}
                                rule targets eligible base block blobs within{" "}
                                <span className="font-semibold text-slate-800">
                                    assessment-data/
                                </span>{" "}
                                and evaluates whether they have remained unmodified for more than 30
                                days. Qualifying objects can then transition from the Hot access tier
                                to the Cool tier while remaining stored and available.
                            </p>
                        </div>
                    </div>


                    {/* Implementation Journey */}

                    <ImplementationJourney
                        title="Building the Lifecycle Management Policy"
                        description="These stages document the progression from defining the lifecycle rule and age-based condition to restricting the policy to the intended assessment data."
                        items={[
                            {
                                figure: 20,

                                stage: "Stage 01",

                                title: "Define Lifecycle Rule",

                                description:
                                    "Created the move-old-blobs-to-cool lifecycle rule and limited its scope to base block blobs using filters.",

                                image:
                                    "/evidence/task-1/05-lifecycle-management/journey/01-lifecycle-rule-scope.png",

                                alt: "Azure Storage lifecycle management rule showing the move-old-blobs-to-cool rule with filtered scope, block blobs and base blobs selected",

                                caption:
                                    "Lifecycle rule configured for filtered base block blobs within the Azure Storage account.",
                            },

                            {
                                figure: 21,

                                stage: "Stage 02",

                                title: "Configure Age-Based Transition",

                                description:
                                    "Configured qualifying base blobs to transition from the Hot access tier to Cool storage after more than 30 days without modification.",

                                image:
                                    "/evidence/task-1/05-lifecycle-management/journey/02-lifecycle-age-condition.png",

                                alt: "Azure Storage lifecycle rule showing a 30-day last-modified condition and move to Cool storage action",

                                caption:
                                    "Age-based lifecycle condition configured to move qualifying blobs to the Cool access tier after 30 days.",
                            },

                            {
                                figure: 22,

                                stage: "Stage 03",

                                title: "Restrict Policy to Assessment Data",

                                description:
                                    "Applied the assessment-data/ blob prefix so the lifecycle rule targeted the intended assessment container rather than unrelated storage data.",

                                image:
                                    "/evidence/task-1/05-lifecycle-management/journey/03-lifecycle-container-prefix.png",

                                alt: "Azure Storage lifecycle management filter showing assessment-data as the configured blob prefix",

                                caption:
                                    "Blob prefix filter assessment-data/ restricting lifecycle management to the intended assessment workload.",
                            },
                        ]}
                    />

                    {/* =====================================================
    PRIMARY EVIDENCE & INTERPRETATION
===================================================== */}

                    <div className="mt-14 space-y-14">
                        <EvidenceCard
                            figure={23}
                            title="Lifecycle Management Policy Successfully Enabled"
                            image="/evidence/task-1/05-lifecycle-management/primary/01-lifecycle-policy-enabled.png"
                            alt="Azure Storage lifecycle management page showing the move-old-blobs-to-cool policy enabled"
                            caption="Primary evidence confirming that the move-old-blobs-to-cool lifecycle management policy was successfully created and enabled on the Azure Storage account."
                            purpose="The purpose of this final validation was to confirm that the lifecycle management policy had been successfully saved and enabled on the Azure Storage account."
                            action="I completed the lifecycle rule configuration by defining the blob scope, the 30-day age condition, the Cool tier transition and the assessment-data/ prefix filter. I then added the completed policy to the storage account."
                            result="Azure successfully updated the lifecycle management policy and displayed the move-old-blobs-to-cool rule with an Enabled status. The Azure notification also confirmed that the lifecycle management policy had been successfully updated."
                            significance="This demonstrates that lifecycle management was not only designed but successfully implemented. Azure can now evaluate eligible base block blobs against the configured lifecycle conditions and automatically transition qualifying ageing data to the lower-cost Cool access tier."
                        />
                    </div>

                    {/* =====================================================
    LEARNING INTERPRETATION
===================================================== */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Learning Interpretation
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                            What I Learned About Storage Lifecycle Management
                        </h3>

                        <div className="mt-6 space-y-5 leading-7 text-slate-600">
                            <p>
                                This implementation helped me understand that Azure lifecycle
                                management is a policy-driven method of managing data as its
                                usage pattern changes. Rather than manually reviewing older
                                blobs and changing their access tiers, Azure can evaluate
                                defined conditions and perform the transition automatically.
                            </p>

                            <p>
                                In this assessment, recently modified data could remain in the
                                Hot tier, while base block blobs that had not been modified for
                                more than 30 days were configured to transition to the Cool
                                tier. The data was not deleted; only its storage tier was
                                changed. This means the objects remain available while using a
                                tier designed for less frequently accessed data.
                            </p>

                            <p>
                                I also learned the importance of controlling the scope of an
                                automated policy. Using the{" "}
                                <span className="font-semibold text-slate-800">
                                    assessment-data/
                                </span>{" "}
                                prefix ensured that the lifecycle rule targeted the intended
                                assessment workload instead of applying automatically to every
                                blob in the storage account.
                            </p>

                            <p>
                                From a cloud engineering perspective, lifecycle management
                                demonstrates how automation and cost optimisation can work
                                together. Storage architecture is therefore not only about
                                keeping data available; it also involves selecting appropriate
                                storage tiers and automating how data moves between them as
                                business requirements and access patterns change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
    SECTION 06 — SOFT DELETE & RECOVERY
===================================================== */}

            <section className="mt-24 border-t border-slate-200 pt-16">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
                    {/* =====================================================
            SECTION INTRODUCTION
        ===================================================== */}

                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        06 · Blob Data Protection & Recovery
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Soft Delete, Versioning & Blob Recovery
                    </h2>

                    <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                        This section demonstrates how Azure Storage data protection features
                        can reduce the risk of permanent data loss caused by accidental
                        deletion. I tested the recovery process using a dedicated blob named{" "}
                        <span className="font-semibold text-slate-800">
                            soft-delete-test.txt
                        </span>
                        , observed how Azure retained the deleted data through versioning
                        and soft-delete behaviour, and restored the protected blob to an
                        active current version.
                    </p>

                    {/* =====================================================
            CONCEPT SUMMARY
        ===================================================== */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Protection
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">Soft Delete</h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Soft delete provides a recovery window after deletion, reducing
                                the risk that an accidentally deleted blob is immediately and
                                permanently lost.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                History
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">Blob Versioning</h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Blob versioning preserves earlier versions of an object,
                                allowing previous data states to remain available for recovery
                                instead of being overwritten permanently.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Recovery
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                Restore Current Version
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                The recovery test verified that protected blob data could be
                                recovered and returned to an active current state after
                                deletion.
                            </p>
                        </div>
                    </div>
                    {/* =====================================================
    FIGURE A7 — BLOB DATA PROTECTION & RECOVERY ARCHITECTURE
===================================================== */}

                    <div className="mt-12 rounded-2xl border border-rose-300 bg-white p-6 shadow-sm">
                        {/* Section heading */}
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                                Section Architecture
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-slate-950">
                                Blob Data Protection & Recovery Architecture
                            </h3>

                            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
                                This diagram visualises the recovery workflow tested with{" "}
                                <span className="font-semibold text-slate-900">
                                    soft-delete-test.txt
                                </span>
                                , showing how Azure soft delete and blob versioning retained
                                recoverable data after deletion and allowed the required blob version
                                to be restored to an active current state.
                            </p>
                        </div>

                        {/* Architecture diagram */}
                        <div className="overflow-hidden rounded-2xl border border-rose-200 bg-slate-50">
                            {/* Diagram header */}
                            <div className="border-b border-rose-200 bg-rose-50 px-5 py-4">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">
                                    Azure Blob Data Protection
                                </p>

                                <h4 className="mt-1 text-lg font-bold text-slate-950">
                                    Active Blob → Delete → Protect → Recover → Restore
                                </h4>

                                <p className="mt-1 text-sm text-slate-600">
                                    Blob Storage → Soft Delete → Version History → Recovery → Current
                                    Version
                                </p>
                            </div>

                            {/* Main recovery flow */}
                            <div className="p-5">
                                <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
                                    {/* 01 Active blob */}
                                    <div className="h-full rounded-xl border border-blue-200 bg-blue-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                                            01 · Active Data
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Current Blob
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            The test object existed normally inside the{" "}
                                            <span className="font-semibold text-slate-900">
                                                assessment-data
                                            </span>{" "}
                                            container before the recovery test began.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-800">
                                            soft-delete-test.txt
                                        </div>

                                        <div className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                                            485 B · Block blob
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden text-center lg:block">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-rose-600">
                                            Delete
                                        </p>
                                        <p className="mt-1 text-xl text-rose-500">→</p>
                                    </div>

                                    {/* 02 Delete */}
                                    <div className="h-full rounded-xl border border-rose-200 bg-rose-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700">
                                            02 · Risk Event
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Blob Deleted
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            The blob was deliberately deleted to simulate an
                                            accidental data-loss event and test the configured Azure
                                            protection controls.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-800">
                                            Deletion initiated
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden text-center lg:block">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-amber-600">
                                            Protected
                                        </p>
                                        <p className="mt-1 text-xl text-amber-500">→</p>
                                    </div>

                                    {/* 03 Protection */}
                                    <div className="h-full rounded-xl border border-amber-200 bg-amber-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-700">
                                            03 · Protection
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Soft Delete
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            Azure retained recoverable blob data instead of allowing
                                            the deletion to immediately become permanent data loss.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-800">
                                            7-day retention policy
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden text-center lg:block">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-purple-600">
                                            Retained
                                        </p>
                                        <p className="mt-1 text-xl text-purple-500">→</p>
                                    </div>

                                    {/* 04 Versioning / recovery */}
                                    <div className="h-full rounded-xl border border-purple-200 bg-purple-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700">
                                            04 · Recovery
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Previous Version
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            Blob versioning preserved historical state, allowing the
                                            protected object to remain available as a recoverable
                                            previous version.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-purple-100 px-3 py-2 text-xs font-semibold text-purple-800">
                                            Undelete protected data
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden text-center lg:block">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                                            Restore
                                        </p>
                                        <p className="mt-1 text-xl text-emerald-500">→</p>
                                    </div>

                                    {/* 05 Restored */}
                                    <div className="h-full rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                                            05 · Restored State
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Current Version
                                        </h5>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            The required recovered version was made current,
                                            returning the protected blob to an active usable state.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
                                            ✓ soft-delete-test.txt
                                        </div>

                                        <div className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                                            485 B · Current version
                                        </div>
                                    </div>
                                </div>

                                {/* Protection mechanisms */}
                                <div className="mt-5 grid gap-3 md:grid-cols-2">
                                    <div className="rounded-xl border border-amber-200 bg-white p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
                                            Soft Delete
                                        </p>

                                        <p className="mt-2 font-bold text-slate-900">
                                            Provides a recovery window after deletion
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Deleted blob data is retained for the configured recovery
                                            period, reducing the risk that an accidental deletion
                                            immediately becomes permanent.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-purple-200 bg-white p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-700">
                                            Blob Versioning
                                        </p>

                                        <p className="mt-2 font-bold text-slate-900">
                                            Preserves historical states of the blob
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Previous versions remain available so that an earlier
                                            state can be recovered and, when required, restored as
                                            the current version.
                                        </p>
                                    </div>
                                </div>

                                {/* Key recovery outcome */}
                                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                                                Recovery Outcome
                                            </p>

                                            <p className="mt-1 font-bold text-slate-950">
                                                Deletion did not become permanent data loss
                                            </p>

                                            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                                                Azure retained recoverable blob data after deletion.
                                                The protected object was recovered and the required
                                                version was then restored as the current version,
                                                returning the blob to an active state.
                                            </p>
                                        </div>

                                        <span className="shrink-0 rounded-full border border-emerald-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                                            Recovery Verified
                                        </span>
                                    </div>
                                </div>

                                {/* Important distinction */}
                                <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700">
                                        Important Recovery Distinction
                                    </p>

                                    <p className="mt-2 font-bold text-slate-950">
                                        Undelete and Make Current Version are not necessarily the same
                                        operation
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        During this practical test, Azure successfully undeleted the
                                        protected snapshots and previous versions, but the recovered
                                        blob could still appear as a previous version. I therefore
                                        verified the version state and explicitly restored the
                                        required version as the current version.
                                    </p>
                                </div>

                                {/* Architecture relationship */}
                                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                        Architecture Relationship
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Soft delete and blob versioning provide complementary data
                                        protection layers within Azure Blob Storage. Soft delete
                                        provides a recovery opportunity following deletion, while
                                        versioning maintains historical blob states. Together, these
                                        controls allowed{" "}
                                        <span className="font-semibold text-slate-900">
                                            soft-delete-test.txt
                                        </span>{" "}
                                        to move from an active state, through deletion and recovery,
                                        and finally back to a verified current state.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Figure caption */}
                        <div className="mt-4 border-l-2 border-rose-500 pl-4">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-700">
                                Figure A7 · Blob Data Protection & Recovery Architecture
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Recovery architecture demonstrated during Task 1 using{" "}
                                <span className="font-semibold text-slate-900">
                                    soft-delete-test.txt
                                </span>
                                . The test shows how soft delete and blob versioning prevented the
                                deletion from immediately becoming permanent data loss. Azure retained
                                recoverable data, the protected versions were undeleted, and the
                                required 485-byte blob version was subsequently restored as the
                                current version.
                            </p>
                        </div>
                    </div>

                    {/* =====================================================
            IMPLEMENTATION JOURNEY
        ===================================================== */}

                    <ImplementationJourney
                        title="Testing Blob Protection and Recovery"
                        description="These screenshots document the recovery workflow from establishing the test blob, through observing its retained version after deletion, to successfully recovering the protected data."
                        items={[
                            {
                                figure: 24,
                                stage: "Stage 01",
                                title: "Establish Recovery Test Blob",
                                description:
                                    "The soft-delete-test.txt blob was present in the assessment-data container before the recovery test, providing a known object that could be deliberately deleted and recovered.",
                                image:
                                    "/evidence/task-1/06-soft-delete-and-recovery/journey/01-blob-delete-confirmation.png",
                                alt: "Azure Blob Storage assessment-data container showing soft-delete-test.txt before the recovery test",
                                caption:
                                    "The assessment-data container showing soft-delete-test.txt as an active block blob before the deletion and recovery test.",
                            },
                            {
                                figure: 25,
                                stage: "Stage 02",
                                title: "Verify Retained Blob Version",
                                description:
                                    "After the deletion test, Azure retained the protected data as a previous version. This demonstrated that the deleted object had not immediately disappeared permanently and that recoverable blob history remained available.",
                                image:
                                    "/evidence/task-1/06-soft-delete-and-recovery/journey/02-blob-version-history.png",
                                alt: "Azure Blob Storage showing soft-delete-test.txt as a previous version after deletion",
                                caption:
                                    "The assessment-data container displaying soft-delete-test.txt as a previous version during the recovery workflow.",
                            },
                            {
                                figure: 26,
                                stage: "Stage 03",
                                title: "Recover Protected Blob Data",
                                description:
                                    "I used the Azure recovery controls to undelete the protected blob data. Azure confirmed that the snapshots and previous versions associated with soft-delete-test.txt were successfully undeleted.",
                                image:
                                    "/evidence/task-1/06-soft-delete-and-recovery/journey/05-soft-delete-recovery-success.png",
                                alt: "Azure notification confirming successful undelete of snapshots and previous versions for soft-delete-test.txt",
                                caption:
                                    "Azure confirming that snapshots and previous versions for soft-delete-test.txt were successfully undeleted.",
                            },
                        ]}
                    />

                    {/* =====================================================
            PRIMARY EVIDENCE & INTERPRETATION
        ===================================================== */}

                    <div className="mt-14 space-y-14">
                        <EvidenceCard
                            figure={27}
                            title="Blob Successfully Restored as Current Version"
                            image="/evidence/task-1/06-soft-delete-and-recovery/primary/04-restored-blob-current-version.png"
                            alt="Azure Blob Storage showing soft-delete-test.txt restored as the current version"
                            caption="Primary evidence showing soft-delete-test.txt restored to the assessment-data container as the current version after the deletion and recovery test."
                            purpose="The purpose of this validation was to confirm that Azure Storage data protection could recover a deleted blob and return the protected data to an active usable state."
                            action="I deliberately tested the recovery workflow using soft-delete-test.txt. After the blob entered a protected historical state, I used the Azure recovery controls to undelete the retained data and then restored the appropriate version as the current version."
                            result="The assessment-data container displayed soft-delete-test.txt as the Current version with its 485-byte size, Hot access tier and Block blob type visible. This confirmed that the protected object had been successfully returned to an active state."
                            significance="This demonstrates the practical value of combining soft delete and blob versioning. Instead of an accidental deletion immediately resulting in permanent data loss, Azure retained recoverable data that could be restored. For an organisation, this provides an additional resilience layer against user error and unintended changes."
                        />
                    </div>

                    {/* =====================================================
            LEARNING INTERPRETATION
        ===================================================== */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Learning Interpretation
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                            What I Learned About Azure Blob Recovery
                        </h3>

                        <div className="mt-6 space-y-5 leading-7 text-slate-600">
                            <p>
                                This recovery test helped me understand the difference between
                                simply storing data and designing storage that can recover from
                                mistakes. A deletion does not necessarily need to become an
                                immediate permanent loss when appropriate Azure Storage
                                protection features are enabled.
                            </p>

                            <p>
                                I also learned that soft delete and blob versioning perform
                                related but different roles. Soft delete provides a recovery
                                opportunity after deletion, while versioning preserves
                                historical states of blob data. Together they provide stronger
                                protection than relying on a single current copy of an object.
                            </p>

                            <p>
                                An important part of the practical test was understanding that
                                recovering protected data and making a version current are not
                                necessarily the same operation. During the test, the recovered
                                data could still appear as a previous version. I therefore
                                verified the version state and restored the required version as
                                the current version.
                            </p>

                            <p>
                                From a cloud engineering perspective, this demonstrated the
                                importance of testing recovery rather than assuming that
                                enabling a protection setting was sufficient. A useful data
                                protection design should be validated by deliberately testing
                                deletion, recovery and the final state of the restored object.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* =====================================================
    SECTION 07 — AZURE TABLE STORAGE
===================================================== */}

            <section className="mt-24 border-t border-slate-200 pt-16">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
                    {/* =====================================================
            SECTION INTRODUCTION
        ===================================================== */}

                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        07 · NoSQL Data Storage
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Azure Table Storage & Structured NoSQL Data
                    </h2>

                    <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                        This section demonstrates the implementation of Azure Table Storage
                        as a lightweight NoSQL data service. I created a table named{" "}
                        <span className="font-semibold text-slate-800">
                            AssessmentRecords
                        </span>{" "}
                        and added a structured entity containing assessment information.
                        The implementation demonstrates how Azure Table Storage organises
                        data using entities, properties, a PartitionKey and a RowKey rather
                        than a traditional relational table structure.
                    </p>

                    {/* =====================================================
            CONCEPT SUMMARY
        ===================================================== */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Data Model
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                NoSQL Entity Storage
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Azure Table Storage stores data as entities containing
                                properties rather than using the fixed relational schema
                                associated with a traditional SQL database.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Partitioning
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                PartitionKey
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                The PartitionKey groups related entities together. For the
                                assessment entity, I used{" "}
                                <span className="font-semibold text-slate-800">
                                    Assessment
                                </span>{" "}
                                as the partition value.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Identification
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                RowKey
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                The RowKey identifies an individual entity within its
                                partition. I used{" "}
                                <span className="font-semibold text-slate-800">
                                    001
                                </span>{" "}
                                to uniquely identify the assessment record within the
                                Assessment partition.
                            </p>
                        </div>
                    </div>
                    {/* Figure A8 — Azure Table Storage Architecture */}
                    <div className="mt-10 rounded-2xl border border-cyan-300 bg-white p-6 shadow-sm">
                        {/* Section heading */}
                        <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                                Section Architecture
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-slate-950">
                                Azure Table Storage & NoSQL Entity Architecture
                            </h3>

                            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
                                This diagram visualises how the{" "}
                                <strong>AssessmentRecords</strong> table stores structured assessment
                                information using Azure Table Storage. Rather than using a traditional
                                relational schema, the implementation organises data as entities
                                identified by a <strong>PartitionKey</strong> and{" "}
                                <strong>RowKey</strong>, with additional properties describing the
                                assessment record.
                            </p>
                        </div>

                        {/* Architecture panel */}
                        <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-slate-50">
                            {/* Architecture header */}
                            <div className="border-b border-cyan-200 bg-cyan-50 px-6 py-5">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                                    Azure Table Storage
                                </p>

                                <h4 className="mt-1 text-lg font-bold text-slate-950">
                                    Storage Account → Table Service → Table → Entity → Properties
                                </h4>

                                <p className="mt-1 text-sm text-slate-600">
                                    NoSQL Service → AssessmentRecords → PartitionKey + RowKey → Structured
                                    Assessment Data
                                </p>
                            </div>

                            {/* Main architecture flow */}
                            <div className="p-6">
                                <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
                                    {/* Storage account */}
                                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                                            01 · Storage Layer
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">Storage Account</h5>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            The Azure Storage account provides the cloud storage environment
                                            containing the Table Storage service used by the assessment.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-800">
                                            st270907283assessment
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-cyan-700">
                                                Provides
                                            </p>
                                            <span className="text-2xl text-cyan-600">→</span>
                                        </div>
                                    </div>

                                    {/* Table service */}
                                    <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-700">
                                            02 · NoSQL Service
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Azure Table Storage
                                        </h5>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Table Storage provides a lightweight NoSQL data service for storing
                                            structured information as entities and properties.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-cyan-100 px-3 py-2 text-xs font-semibold text-cyan-800">
                                            Key-value / NoSQL model
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-cyan-700">
                                                Contains
                                            </p>
                                            <span className="text-2xl text-cyan-600">→</span>
                                        </div>
                                    </div>

                                    {/* Table */}
                                    <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-violet-700">
                                            03 · Table
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            AssessmentRecords
                                        </h5>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            The table provides the logical container for structured assessment
                                            records stored during the implementation.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-violet-100 px-3 py-2 text-xs font-semibold text-violet-800">
                                            AssessmentRecords
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="mb-1 text-[9px] font-bold uppercase tracking-wider text-cyan-700">
                                                Stores
                                            </p>
                                            <span className="text-2xl text-cyan-600">→</span>
                                        </div>
                                    </div>

                                    {/* Entity */}
                                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                                            04 · Entity
                                        </p>

                                        <h5 className="mt-2 font-bold text-slate-950">
                                            Assessment Entity
                                        </h5>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            A single entity represents the assessment record and contains its
                                            identity keys together with custom application properties.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
                                            Entity successfully stored ✓
                                        </div>
                                    </div>
                                </div>

                                {/* Entity identity */}
                                <div className="mt-6">
                                    <div className="mb-3">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                            Entity Identity
                                        </p>

                                        <h5 className="mt-1 font-bold text-slate-950">
                                            PartitionKey + RowKey uniquely identify the record
                                        </h5>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        {/* Partition key */}
                                        <div className="rounded-xl border border-cyan-200 bg-white p-5">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                                        Partitioning
                                                    </p>

                                                    <h6 className="mt-1 font-bold text-slate-950">
                                                        PartitionKey
                                                    </h6>
                                                </div>

                                                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800">
                                                    Assessment
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                The PartitionKey groups related entities together. In this
                                                implementation, <strong>Assessment</strong> represents the logical
                                                partition for the assessment record.
                                            </p>
                                        </div>

                                        {/* Row key */}
                                        <div className="rounded-xl border border-indigo-200 bg-white p-5">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                                                        Identification
                                                    </p>

                                                    <h6 className="mt-1 font-bold text-slate-950">RowKey</h6>
                                                </div>

                                                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                                                    001
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                                The RowKey identifies the individual entity within its partition.
                                                The value <strong>001</strong> uniquely identifies this assessment
                                                record inside the Assessment partition.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Formula */}
                                    <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-4 text-center">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                            Unique Entity Address
                                        </p>

                                        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm font-bold">
                                            <span className="rounded-lg bg-white px-4 py-2 text-cyan-800 shadow-sm">
                                                PartitionKey: Assessment
                                            </span>

                                            <span className="text-lg text-cyan-600">+</span>

                                            <span className="rounded-lg bg-white px-4 py-2 text-indigo-800 shadow-sm">
                                                RowKey: 001
                                            </span>

                                            <span className="text-lg text-cyan-600">=</span>

                                            <span className="rounded-lg bg-emerald-100 px-4 py-2 text-emerald-800">
                                                Unique Entity ✓
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Properties */}
                                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                        Entity Properties
                                    </p>

                                    <h5 className="mt-1 font-bold text-slate-950">
                                        Structured Assessment Information
                                    </h5>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Additional properties describe the assessment record without
                                        requiring a fixed relational table schema.
                                    </p>

                                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                                Task
                                            </p>
                                            <p className="mt-1 text-sm font-bold text-slate-900">
                                                Azure Storage Assessment
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                                Status
                                            </p>
                                            <p className="mt-1 text-sm font-bold text-emerald-700">
                                                Completed
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                                Service
                                            </p>
                                            <p className="mt-1 text-sm font-bold text-slate-900">
                                                Azure Table Storage
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Relational vs NoSQL */}
                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border border-slate-200 bg-white p-5">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                            Traditional Relational Model
                                        </p>

                                        <h6 className="mt-1 font-bold text-slate-950">
                                            Tables, Columns & Relationships
                                        </h6>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Relational databases generally organise information around defined
                                            tables, columns, relationships and a structured schema.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-5">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                                            Azure Table Storage Model
                                        </p>

                                        <h6 className="mt-1 font-bold text-slate-950">
                                            Entities, Keys & Properties
                                        </h6>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            Azure Table Storage uses entities identified by keys, with
                                            properties attached to each record. This provides a lightweight and
                                            flexible NoSQL model.
                                        </p>
                                    </div>
                                </div>

                                {/* Outcome */}
                                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                                                Storage Outcome
                                            </p>

                                            <h6 className="mt-1 font-bold text-slate-950">
                                                Structured NoSQL entity successfully stored
                                            </h6>
                                        </div>

                                        <span className="rounded-full border border-emerald-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                                            Entity Verified
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        The completed implementation stored the assessment entity in{" "}
                                        <strong>AssessmentRecords</strong> using PartitionKey{" "}
                                        <strong>Assessment</strong>, RowKey <strong>001</strong> and the Task,
                                        Status and Service properties.
                                    </p>
                                </div>

                                {/* Architecture relationship */}
                                <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                        Architecture Relationship
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Azure Table Storage operates as the structured NoSQL data component
                                        within the Task 1 storage architecture. The storage account provides
                                        the Table service, the <strong>AssessmentRecords</strong> table groups
                                        the assessment entities, and the combination of{" "}
                                        <strong>PartitionKey</strong> and <strong>RowKey</strong> uniquely
                                        identifies each record while additional properties store
                                        application-specific information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Figure caption */}
                        <div className="mt-5 border-l-2 border-cyan-500 pl-4">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                                Figure A8 · Azure Table Storage & NoSQL Entity Architecture
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Logical architecture of the Azure Table Storage implementation completed
                                during Task 1. The <strong>AssessmentRecords</strong> table stores the
                                assessment entity using PartitionKey <strong>Assessment</strong> and
                                RowKey <strong>001</strong> as its unique identity, while the Task, Status
                                and Service properties provide the structured assessment information.
                            </p>
                        </div>
                    </div>

                    {/* =====================================================
            IMPLEMENTATION JOURNEY
        ===================================================== */}

                    <ImplementationJourney
                        title="Building the Azure Table Storage Record"
                        description="These stages document the creation of the AssessmentRecords table and the configuration of a structured NoSQL entity before validating that the entity was successfully stored."
                        items={[
                            {
                                figure: 28,
                                stage: "Stage 01",
                                title: "Create AssessmentRecords Table",
                                description:
                                    "I created a new Azure Table Storage table named AssessmentRecords to provide a lightweight NoSQL data store for structured assessment information. Azure confirmed that the storage table was created successfully.",
                                image:
                                    "/evidence/task-1/07-table-storage/journey/01-table-created.png",
                                alt: "Azure Storage showing the AssessmentRecords table successfully created",
                                caption:
                                    "Azure Storage confirming successful creation of the AssessmentRecords Table Storage table.",
                            },
                            {
                                figure: 29,
                                stage: "Stage 02",
                                title: "Configure Assessment Entity",
                                description:
                                    "I configured an entity using PartitionKey Assessment and RowKey 001, then added Task, Status and Service properties to represent the assessment record.",
                                image:
                                    "/evidence/task-1/07-table-storage/journey/02-table-entity-configured.png",
                                alt: "Azure Table Storage Add Entity panel showing PartitionKey, RowKey and assessment properties",
                                caption:
                                    "The AssessmentRecords entity configured with PartitionKey Assessment, RowKey 001 and custom Task, Status and Service properties.",
                            },
                        ]}
                    />

                    {/* =====================================================
            PRIMARY EVIDENCE & INTERPRETATION
        ===================================================== */}

                    <div className="mt-14 space-y-14">
                        <EvidenceCard
                            figure={30}
                            title="Assessment Entity Successfully Stored"
                            image="/evidence/task-1/07-table-storage/primary/03-table-entity-success.png"
                            alt="Azure Table Storage showing the successfully stored AssessmentRecords entity"
                            caption="Primary evidence showing the completed AssessmentRecords entity stored in Azure Table Storage with PartitionKey, RowKey and assessment properties visible."
                            purpose="The purpose of this validation was to confirm that Azure Table Storage could store structured assessment information using a NoSQL entity model."
                            action="I created an entity in the AssessmentRecords table using Assessment as the PartitionKey and 001 as the RowKey. I then added the Task, Status and Service properties to describe the assessment record and submitted the entity to Azure Table Storage."
                            result="Azure successfully added the entity and displayed the stored record in the AssessmentRecords table. The completed entity contained PartitionKey Assessment, RowKey 001, Task Azure Storage Assessment, Status Completed and Service Azure Table Storage."
                            significance="This demonstrates how Azure Table Storage can provide a lightweight and scalable NoSQL data store for structured application information without requiring a traditional relational database. The PartitionKey and RowKey provide the entity's addressing structure, while additional properties allow application-specific information to be stored with the record."
                        />
                    </div>

                    {/* =====================================================
            LEARNING INTERPRETATION
        ===================================================== */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            Learning Interpretation
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                            What I Learned About Azure Table Storage
                        </h3>

                        <div className="mt-6 space-y-5 leading-7 text-slate-600">
                            <p>
                                Implementing Azure Table Storage helped me understand how a
                                NoSQL storage model differs from the relational databases I
                                have worked with previously. Instead of designing a table
                                around fixed columns and relationships, I created an entity
                                containing properties that represented the information
                                required by the workload.
                            </p>

                            <p>
                                I also learned that the{" "}
                                <span className="font-semibold text-slate-800">
                                    PartitionKey
                                </span>{" "}
                                and{" "}
                                <span className="font-semibold text-slate-800">
                                    RowKey
                                </span>{" "}
                                are important parts of the Table Storage data model. The
                                PartitionKey groups related entities, while the RowKey
                                identifies a specific entity within that partition. Their
                                combination provides a way to uniquely address an entity.
                            </p>

                            <p>
                                In this implementation, the PartitionKey value{" "}
                                <span className="font-semibold text-slate-800">
                                    Assessment
                                </span>{" "}
                                represented the logical grouping of the record, while
                                RowKey{" "}
                                <span className="font-semibold text-slate-800">
                                    001
                                </span>{" "}
                                identified the individual assessment entity. Additional
                                properties such as Task, Status and Service were then used
                                to describe the record.
                            </p>

                            <p>
                                From a cloud engineering perspective, this demonstrated
                                that the appropriate storage service depends on the type of
                                data and the application's access requirements. Blob
                                Storage was suitable for object-based files in the earlier
                                implementation, Azure Files provided managed file sharing,
                                while Table Storage provided a simple NoSQL option for
                                structured application data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
    SECTION 08 — BUSINESS RECOMMENDATIONS & STORAGE STRATEGY
===================================================== */}

            <section className="mt-24 border-t border-slate-200 pt-16">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">

                    {/* ============================================================
            SECTION INTRODUCTION
        ============================================================ */}

                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        08 · Business Recommendations & Storage Strategy
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Translating Azure Storage Features into Business Value
                    </h2>

                    <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
                        The practical implementation completed throughout Task 1 demonstrates
                        that Azure Storage is not simply a location for storing organisational
                        data. When automation, access control, recovery, lifecycle management
                        and structured storage services are combined, the platform can support
                        stronger data protection, operational efficiency, cost optimisation and
                        business continuity.
                    </p>

                    <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                        Based on the testing performed during this assessment, I would recommend
                        that the organisation adopt a layered storage strategy rather than
                        relying on a single storage feature. Each Azure service addresses a
                        different operational or security requirement, and together they provide
                        a more resilient approach to managing business data.
                    </p>


                    {/* ============================================================
            STRATEGIC PRIORITIES
        ============================================================ */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Priority 01
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                Protect Business Data
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Use automated backup, least-privilege access, versioning and soft
                                delete to reduce the risk of permanent data loss or unauthorised
                                modification.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Priority 02
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                Optimise Storage Cost
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Apply lifecycle policies so that data can automatically move to
                                more appropriate storage tiers as its access pattern changes.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                Priority 03
                            </p>

                            <h3 className="mt-3 font-bold text-slate-950">
                                Improve Operational Efficiency
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Use managed Azure services and automation to reduce repetitive
                                administrative tasks while maintaining reliable access to
                                organisational data.
                            </p>
                        </div>

                    </div>
                    {/* Figure A9 — Layered Azure Storage Business Strategy */}
                    <div className="mt-12 rounded-2xl border border-slate-800 bg-white p-5 sm:p-6">
                        {/* Section heading */}
                        <div className="mb-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-600">
                                Section Architecture
                            </p>

                            <h3 className="mt-2 text-xl font-bold text-slate-950">
                                Layered Azure Storage Business Strategy
                            </h3>

                            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
                                This diagram translates the technical controls implemented and tested
                                throughout Task 1 into a layered organisational storage strategy. Rather
                                than relying on a single Azure service, the recommended approach combines
                                preventative access controls, automated protection, recovery mechanisms,
                                cost optimisation and workload-appropriate storage services.
                            </p>
                        </div>

                        {/* Main architecture */}
                        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                            {/* Header */}
                            <div className="border-b border-slate-700 bg-slate-900 px-5 py-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                                    Recommended Azure Storage Strategy
                                </p>

                                <h4 className="mt-1 text-lg font-bold text-white">
                                    Prevent → Protect → Optimise → Support → Business Value
                                </h4>

                                <p className="mt-1 text-xs text-slate-400">
                                    Technical controls validated during Task 1 translated into
                                    organisational outcomes
                                </p>
                            </div>

                            <div className="p-4 sm:p-5">
                                {/* Business data */}
                                <div className="mb-5 rounded-xl border border-sky-500/40 bg-sky-500/10 p-4 text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                                        Organisational Data
                                    </p>

                                    <p className="mt-1 text-base font-bold text-white">
                                        Business Storage Workloads
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-slate-300">
                                        Uploaded objects, shared files and structured application records
                                        require different combinations of security, protection, recovery and
                                        storage management.
                                    </p>
                                </div>

                                {/* Strategy layers */}
                                <div className="grid gap-3 lg:grid-cols-4">
                                    {/* Prevent */}
                                    <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                                            01 · Prevent
                                        </p>

                                        <h5 className="mt-2 font-bold text-white">
                                            Control Access
                                        </h5>

                                        <p className="mt-2 text-xs leading-5 text-slate-300">
                                            Restrict unnecessary permissions before they become a security
                                            risk.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-blue-500/15 p-3">
                                            <p className="text-xs font-semibold text-blue-200">
                                                Azure RBAC
                                            </p>
                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Least-privilege access using Storage Blob Data Reader.
                                            </p>
                                        </div>

                                        <div className="mt-3 rounded-md bg-blue-400/10 px-3 py-2 text-[11px] font-semibold text-blue-300">
                                            ✓ Read allowed · Delete denied
                                        </div>
                                    </div>

                                    {/* Protect */}
                                    <div className="rounded-xl border border-purple-500/40 bg-purple-500/10 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-400">
                                            02 · Protect
                                        </p>

                                        <h5 className="mt-2 font-bold text-white">
                                            Preserve Recoverable Data
                                        </h5>

                                        <p className="mt-2 text-xs leading-5 text-slate-300">
                                            Reduce the impact of deletion, modification and operational
                                            mistakes.
                                        </p>

                                        <div className="mt-4 space-y-2">
                                            <div className="rounded-md bg-purple-500/15 px-3 py-2 text-[11px] font-semibold text-purple-200">
                                                Automated Blob Backup
                                            </div>

                                            <div className="rounded-md bg-purple-500/15 px-3 py-2 text-[11px] font-semibold text-purple-200">
                                                Blob Versioning
                                            </div>

                                            <div className="rounded-md bg-purple-500/15 px-3 py-2 text-[11px] font-semibold text-purple-200">
                                                Soft Delete
                                            </div>
                                        </div>

                                        <div className="mt-3 rounded-md bg-green-400/10 px-3 py-2 text-[11px] font-semibold text-green-300">
                                            ✓ Backup & recovery verified
                                        </div>
                                    </div>

                                    {/* Optimise */}
                                    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
                                            03 · Optimise
                                        </p>

                                        <h5 className="mt-2 font-bold text-white">
                                            Manage Storage Cost
                                        </h5>

                                        <p className="mt-2 text-xs leading-5 text-slate-300">
                                            Align the storage tier with changing data-access patterns over
                                            time.
                                        </p>

                                        <div className="mt-4 rounded-lg bg-amber-500/15 p-3">
                                            <p className="text-xs font-semibold text-amber-200">
                                                Lifecycle Management
                                            </p>

                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Automatically transition qualifying older block blobs from Hot
                                                storage to Cool storage.
                                            </p>
                                        </div>

                                        <div className="mt-3 rounded-md bg-amber-400/10 px-3 py-2 text-[11px] font-semibold text-amber-300">
                                            Hot → 30 days → Cool
                                        </div>
                                    </div>

                                    {/* Support */}
                                    <div className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            04 · Support
                                        </p>

                                        <h5 className="mt-2 font-bold text-white">
                                            Match Service to Workload
                                        </h5>

                                        <p className="mt-2 text-xs leading-5 text-slate-300">
                                            Select Azure storage services according to the type of data and
                                            access requirement.
                                        </p>

                                        <div className="mt-4 space-y-2">
                                            <div className="rounded-md bg-cyan-500/15 px-3 py-2">
                                                <p className="text-xs font-semibold text-cyan-200">
                                                    Azure Files
                                                </p>
                                                <p className="mt-1 text-[11px] text-slate-300">
                                                    Managed file sharing
                                                </p>
                                            </div>

                                            <div className="rounded-md bg-cyan-500/15 px-3 py-2">
                                                <p className="text-xs font-semibold text-cyan-200">
                                                    Azure Table Storage
                                                </p>
                                                <p className="mt-1 text-[11px] text-slate-300">
                                                    Lightweight structured NoSQL data
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* arrows / progression */}
                                <div className="my-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                                    <span>Prevent Risk</span>
                                    <span className="text-blue-400">→</span>
                                    <span>Preserve Data</span>
                                    <span className="text-purple-400">→</span>
                                    <span>Optimise Cost</span>
                                    <span className="text-amber-400">→</span>
                                    <span>Support Workloads</span>
                                </div>

                                {/* Business value */}
                                <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                                                Business Value
                                            </p>

                                            <h5 className="mt-1 font-bold text-white">
                                                A More Resilient and Manageable Storage Environment
                                            </h5>
                                        </div>

                                        <span className="rounded-full border border-emerald-400/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                                            Layered Strategy
                                        </span>
                                    </div>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-lg bg-slate-950/50 p-3">
                                            <p className="text-xs font-bold text-white">Security</p>
                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Reduce unnecessary access and permissions.
                                            </p>
                                        </div>

                                        <div className="rounded-lg bg-slate-950/50 p-3">
                                            <p className="text-xs font-bold text-white">Resilience</p>
                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Preserve recoverable copies and historical states.
                                            </p>
                                        </div>

                                        <div className="rounded-lg bg-slate-950/50 p-3">
                                            <p className="text-xs font-bold text-white">
                                                Operational Efficiency
                                            </p>
                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Automate backup and storage-management operations.
                                            </p>
                                        </div>

                                        <div className="rounded-lg bg-slate-950/50 p-3">
                                            <p className="text-xs font-bold text-white">Cost Awareness</p>
                                            <p className="mt-1 text-[11px] leading-4 text-slate-300">
                                                Align storage tiers with changing access patterns.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Evidence connection */}
                                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                                        Tested During Task 1
                                    </p>

                                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                                            <p className="text-xs font-semibold text-white">
                                                Access Control
                                            </p>
                                            <p className="mt-1 text-[11px] text-slate-400">
                                                RBAC read access and denied deletion
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                                            <p className="text-xs font-semibold text-white">
                                                Data Protection
                                            </p>
                                            <p className="mt-1 text-[11px] text-slate-400">
                                                Backup, versioning and recovery
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                                            <p className="text-xs font-semibold text-white">
                                                Cost Management
                                            </p>
                                            <p className="mt-1 text-[11px] text-slate-400">
                                                Lifecycle transition policy
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                                            <p className="text-xs font-semibold text-white">
                                                Storage Models
                                            </p>
                                            <p className="mt-1 text-[11px] text-slate-400">
                                                Blob, Files and Table Storage
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Recommendation */}
                                <div className="mt-4 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                                        Recommended Strategy
                                    </p>

                                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                                        No single Azure Storage feature provides the complete solution.
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-slate-300">
                                        A stronger organisational design combines preventative controls,
                                        automated protection, recovery mechanisms, cost optimisation and
                                        workload-appropriate storage services as complementary layers of the
                                        overall storage architecture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Figure caption */}
                        <div className="mt-4 border-l-2 border-slate-800 pl-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">
                                Figure A9 · Layered Azure Storage Business Strategy
                            </p>

                            <p className="mt-2 text-xs leading-5 text-slate-600">
                                Recommended organisational storage strategy derived from the practical
                                implementation and testing completed during Task 1. The architecture
                                combines least-privilege access, automated backup, versioning, soft
                                delete, lifecycle management and workload-appropriate Azure storage
                                services to support security, resilience, operational efficiency and
                                cost-aware storage management.
                            </p>
                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 01
        ============================================================ */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 01 · Automated Backup
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Automate the Protection of Stakeholder Uploads
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                The organisation should use event-driven automation to protect
                                files uploaded by external stakeholders. During this assessment,
                                a Blob Trigger detected a new object and initiated the backup
                                workflow without requiring a manual copy operation.
                            </p>

                            <p>
                                This approach reduces dependence on users or administrators
                                remembering to create backups. For important organisational data,
                                automation can improve consistency and reduce the time between
                                data creation and the creation of a protected replica.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Maintain automated replication of important stakeholder uploads
                                into a dedicated backup destination and monitor the Function
                                execution logs so that failed backup operations can be
                                identified and investigated.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 02
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 02 · Access Control
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Apply Least-Privilege Access with Azure RBAC
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Access to organisational storage should be granted according to
                                the responsibilities of each user rather than providing broad
                                permissions by default. The RBAC testing performed during this
                                assessment demonstrated this principle by allowing blob data to
                                be read while a delete operation was denied.
                            </p>

                            <p>
                                Restricting permissions reduces the impact of accidental actions
                                and limits what an account can perform if its credentials are
                                compromised.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Assign Azure roles according to job responsibilities, regularly
                                review role assignments and avoid granting write, delete or
                                administrative permissions where read-only access is sufficient.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 03
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 03 · Azure File Share
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Use Azure Files for Managed Shared File Storage
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Azure Files can provide managed file shares for workloads that
                                still require traditional file-system access. This is useful for
                                organisations that need centralised shared files while gradually
                                adopting cloud-based infrastructure.
                            </p>

                            <p>
                                Azure file shares can support cross-platform environments through
                                supported file-sharing protocols, allowing suitable Windows,
                                Linux and macOS clients to access shared storage when the required
                                connectivity and authentication configuration is available.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Use Azure Files where applications or users require familiar
                                shared-file access, while controlling authentication,
                                permissions and network connectivity according to organisational
                                security requirements.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 04
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 04 · Versioning
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Preserve Historical Versions of Important Blob Data
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Blob versioning should be enabled for important business data
                                where accidental overwrites or modifications could affect
                                operations. Versioning preserves previous states of a blob when
                                changes occur.
                            </p>

                            <p>
                                The recovery test performed in this assessment demonstrated that
                                retained versions can form an important part of a recovery
                                workflow. This provides additional protection beyond maintaining
                                only the latest copy of an object.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Enable versioning for business-critical containers and combine it
                                with appropriate lifecycle policies so that historical versions
                                provide recovery value without being retained indefinitely when
                                they are no longer required.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 05
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 05 · Soft Delete
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Maintain a Recovery Window for Accidental Deletion
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Soft delete should be used to reduce the risk that an accidental
                                deletion immediately becomes permanent data loss. Instead, Azure
                                can retain protected data for a defined recovery period.
                            </p>

                            <p>
                                During the practical recovery test, the deleted assessment blob
                                remained recoverable. The retained data was undeleted and the
                                required version was subsequently restored as the current
                                version. This demonstrated that enabling protection should be
                                supported by a tested recovery procedure.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Enable soft delete on containers containing important business
                                information, select a retention period that reflects recovery and
                                compliance requirements, and periodically test the recovery
                                process.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 06
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 06 · Lifecycle Management
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Automate Storage Cost Optimisation
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Lifecycle management should be applied where the value of data
                                remains important but its access frequency decreases over time.
                                This allows storage management decisions to be automated rather
                                than requiring administrators to continually review older
                                objects.
                            </p>

                            <p>
                                In this assessment, the lifecycle policy targeted assessment data
                                and configured qualifying block blobs to transition to the Cool
                                tier after 30 days without modification. The data was retained;
                                only its storage tier was changed.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Define lifecycle rules according to real organisational access
                                patterns and retention requirements. Frequently accessed data can
                                remain in Hot storage while suitable older data can transition
                                automatically to lower-cost tiers.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            RECOMMENDATION 07
        ============================================================ */}

                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Recommendation 07 · Table Storage
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            Use Table Storage for Suitable Lightweight Structured Data
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                Azure Table Storage provides a lightweight NoSQL option for
                                storing structured entities where a traditional relational
                                database and complex relationships are not required.
                            </p>

                            <p>
                                The AssessmentRecords implementation demonstrated how an entity
                                can be organised using a PartitionKey, RowKey and additional
                                properties. This model can be useful for simple application
                                records, status information, metadata and other structured
                                datasets.
                            </p>

                            <p>
                                <span className="font-semibold text-slate-900">
                                    Business recommendation:
                                </span>{" "}
                                Consider Azure Table Storage for simple structured workloads that
                                fit its key-based NoSQL model. Relational or more specialised
                                database services should be selected where workloads require
                                complex relationships, joins or other capabilities beyond the
                                Table Storage model.
                            </p>

                        </div>
                    </div>


                    {/* ============================================================
            COMBINED STORAGE STRATEGY
        ============================================================ */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                            Final Business Recommendation
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight">
                            A Layered Approach to Azure Storage
                        </h3>

                        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">
                            I would not recommend that the organisation rely on any one of these
                            services as its complete data protection strategy. A stronger design
                            combines preventative controls, automated protection, recovery
                            mechanisms and cost-management policies.
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                            <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Prevent
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    RBAC and least-privilege access reduce unnecessary
                                    permissions.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Protect
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Automated backup, versioning and soft delete preserve
                                    recoverable data.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Optimise
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Lifecycle management aligns storage tier with changing
                                    access patterns.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Support
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Azure Files and Table Storage provide storage models for
                                    different business workloads.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* ============================================================
            FINAL BUSINESS INTERPRETATION
        ============================================================ */}

                    <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Business Interpretation
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                            What This Means for a Modern Organisation
                        </h3>

                        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">

                            <p>
                                The main lesson from this implementation is that effective cloud
                                storage architecture involves more than selecting where data is
                                stored. The organisation must also consider who can access the
                                data, how it is protected, how it can be recovered, how long it
                                should remain available and how its cost changes throughout its
                                lifecycle.
                            </p>

                            <p>
                                Azure provides separate services and controls for these
                                requirements. Combining them allows the organisation to build a
                                storage environment that is more secure, recoverable,
                                manageable and cost-aware.
                            </p>

                            <p>
                                From a cloud engineering perspective, I would therefore
                                recommend treating storage protection as a layered architecture:
                                restrict access through RBAC, automate important backup
                                operations, preserve recoverable states with versioning and soft
                                delete, optimise older data through lifecycle management, and
                                select the appropriate Azure storage service according to the
                                workload.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
            {/* ============================================================
    SECTION 09 — TASK 1 CONCLUSION & ASSESSMENT ALIGNMENT
============================================================ */}

            <section className="mt-24 border-t border-slate-200 pt-16">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">

                    {/* =====================================================
            SECTION INTRODUCTION
        ====================================================== */}

                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        09 · Task 1 Conclusion & Assessment Alignment
                    </p>

                    <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Bringing the Azure Storage Solution Together
                    </h2>

                    <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            Task 1 provided an opportunity to design, implement and test
                            several Azure Storage capabilities as parts of a wider cloud
                            storage solution. Rather than treating each service as an
                            isolated exercise, I used the practical implementation to
                            understand how storage, automation, access control, recovery,
                            lifecycle management and structured data services can work
                            together.<br />

                            The architecture diagrams presented throughout the report
                            also helped me visualise these relationships as parts of one connected
                            Azure solution rather than viewing each service as an isolated
                            configuration task.
                        </p>

                        <p>
                            The completed solution demonstrates that effective cloud
                            storage architecture involves more than simply creating a
                            storage account. Organisational data must also be protected,
                            controlled, recoverable, cost-aware and matched to an
                            appropriate storage model.
                        </p>
                    </div>

                    {/* =====================================================
            TASK 1 OUTCOMES
        ====================================================== */}

                    <div className="mt-12">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Task 1 Outcomes
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                            What the Implementation Demonstrated
                        </h3>

                        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Storage
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Cloud Storage Infrastructure
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I created and configured Azure Storage resources to
                                    support object storage, managed file storage and
                                    structured NoSQL data.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Automation
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Event-Driven Backup
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I implemented and tested an Azure Function that
                                    responded to blob activity and automated the creation
                                    of a backup copy.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Security
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Least-Privilege Access
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I applied Azure RBAC and validated the permissions
                                    through practical testing, including a denied delete
                                    operation that demonstrated least-privilege access.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Recovery
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Blob Data Protection
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I tested soft delete and blob versioning by
                                    deliberately deleting protected data, recovering it
                                    and restoring the required version as the current
                                    version.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Optimisation
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Lifecycle Management
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I configured lifecycle management to automatically
                                    transition qualifying assessment blobs from the Hot
                                    tier to Cool storage after 30 days.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Data Services
                                </p>
                                <h4 className="mt-3 font-bold text-slate-950">
                                    Files & Structured NoSQL Data
                                </h4>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    I implemented Azure Files for managed file sharing and
                                    Azure Table Storage for lightweight structured data
                                    using PartitionKey and RowKey values.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* =====================================================
            ASSESSMENT ALIGNMENT
        ====================================================== */}

                    <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Assessment Alignment
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                            Evidence-Based Validation
                        </h3>

                        <p className="mt-5 max-w-4xl leading-7 text-slate-600">
                            Throughout Task 1, I used practical evidence to demonstrate
                            both implementation and validation. Screenshots were selected
                            to show important configuration stages, successful outcomes
                            and testing results rather than relying only on descriptions
                            of the Azure services.
                        </p>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-slate-50 p-5">
                                <p className="font-bold text-slate-950">
                                    Implementation Evidence
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    The report records the configuration and implementation
                                    of Azure Storage, automation, RBAC, Azure Files,
                                    lifecycle management, recovery controls and Table
                                    Storage.
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5">
                                <p className="font-bold text-slate-950">
                                    Validation Evidence
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Where appropriate, the implementation was tested using
                                    observable outcomes such as successful Function
                                    execution, restricted permissions, recovered blob data
                                    and successfully stored entities.
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5">
                                <p className="font-bold text-slate-950">
                                    Technical Interpretation
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Each major implementation was interpreted using its
                                    purpose, action, result and technical significance so
                                    that the evidence demonstrates understanding rather
                                    than simply completion of configuration steps.
                                </p>
                            </div>

                            <div className="rounded-xl bg-slate-50 p-5">
                                <p className="font-bold text-slate-950">
                                    Business Application
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    The technical findings were translated into business
                                    recommendations covering data protection, access
                                    control, automation, cost optimisation and selection
                                    of appropriate Azure Storage services.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* =====================================================
            FINAL REFLECTION
        ====================================================== */}

                    <div className="mt-14 rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                            Final Reflection
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                            What I Learned from Task 1
                        </h3>

                        <div className="mt-6 max-w-4xl space-y-5 leading-7 text-slate-300">
                            <p>
                                The most important lesson I gained from Task 1 is that
                                cloud storage engineering is not simply about deciding
                                where data should be stored. A complete solution must
                                consider how data enters the environment, who is permitted
                                to access it, how it is protected, how it can be recovered
                                and how its storage requirements may change over time.
                            </p>

                            <p>
                                The practical testing was particularly valuable because it
                                allowed me to observe Azure behaviour rather than only
                                reading about the services. Testing RBAC restrictions,
                                triggering automated backup, recovering deleted blob data
                                and working with different Azure Storage models helped
                                connect the individual concepts into a broader cloud
                                architecture.
                            </p>

                            <p>
                                Task 1 has strengthened my understanding of how Azure
                                Storage services and supporting controls can be combined
                                to build storage environments that are more secure,
                                automated, recoverable and cost-aware. These are principles
                                that I can carry forward into larger cloud and DevOps
                                solutions.
                            </p>
                        </div>
                    </div>

                    {/* =====================================================
            TASK 1 COMPLETE
        ====================================================== */}

                    <div className="mt-12 border-t border-slate-200 pt-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                                    Task 1 Complete
                                </p>

                                <p className="mt-2 text-xl font-bold text-slate-950">
                                    Azure Storage Implementation & Analysis
                                </p>
                            </div>

                            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-right">
                                Practical implementation supported by technical evidence,
                                interpretation, validation and business recommendations.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

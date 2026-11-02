import EvidenceCard from "./EvidenceCard";

import ImplementationJourney from "./ImplementationJourney";

export default function TaskOnePage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
            {/* =========================================================
    SECTION 01 — STORAGE INFRASTRUCTURE
========================================================= */}

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
                    {/* Section heading */}
                    <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600 sm:text-base">
                        01 · Storage Infrastructure
                    </p>

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

                        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                                Automated Backup Workflow
                            </p>

                            <div className="mt-5 grid gap-4 md:grid-cols-5 md:items-center">
                                {/* Source */}
                                <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        Primary Source
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        assessment-data
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        backup-text-01.txt · 74 B
                                    </p>
                                </div>

                                <div className="text-center text-2xl font-semibold text-blue-600">
                                    →
                                </div>

                                {/* Function */}
                                <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        Automation
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        blobBackupTrigger
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        Azure Blob Trigger
                                    </p>
                                </div>

                                <div className="text-center text-2xl font-semibold text-blue-600">
                                    →
                                </div>

                                {/* Destination */}
                                <div className="min-w-0 rounded-xl border border-blue-100 bg-white p-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        Backup Destination
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-slate-950">
                                        backup-data
                                    </p>

                                    <p className="mt-1 text-sm text-slate-600">
                                        backup-text-01.txt · 74 B
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-slate-600">
                                Test object: <strong>backup-text-01.txt</strong>. The same
                                74-byte blob was detected in the source container, processed
                                automatically by the Azure Function and written to the
                                designated backup destination.
                            </p>
                        </div>

                        {/* =====================================================
        PROOF OF PROCESS
    ====================================================== */}

                        <ImplementationJourney
                            title="Building the Automated Blob Backup Workflow"
                            description="These stages document the progression from creating the Azure Functions project and configuring the Blob trigger to testing the Function runtime, 
                            successfully processing a storage event and verifying the resulting backup in Azure Storage."
                            items={[
                                {
                                    figure: 5,
                                    stage: "Stage 01",
                                    title: "Azure Functions Project Setup",
                                    description:
                                        "Created the Azure Functions project and established the local development environment required to build and test the event-driven Blob Storage automation.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/01-azure-functions-project-setup.png",
                                    alt: "Visual Studio Code showing the Azure Functions project setup",
                                    caption:
                                        "Azure Functions project established in Visual Studio Code to develop and test the event-driven Blob Storage automation.",
                                },
                                {
                                    figure: 6,
                                    stage: "Stage 02",
                                    title: "Blob Trigger Function Developed",
                                    description:
                                        "Configured the blobBackupTrigger Function to monitor the assessment-data container and respond automatically when a new blob object was detected.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/02-blob-trigger-function-code.png",
                                    alt: "Visual Studio Code showing the blobBackupTrigger Azure Function code",
                                    caption:
                                        "Blob trigger Function configured to monitor the assessment-data container and respond automatically to new blob events.",
                                },
                                {
                                    figure: 7,
                                    stage: "Stage 03",
                                    title: "Function Runtime Testing",
                                    description:
                                        "Started the Azure Functions runtime locally to verify that the blobBackupTrigger Function loaded successfully and was listening for Blob Storage events.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/03-function-runtime-testing.png",
                                    alt: "Visual Studio Code showing the Azure Functions local runtime during Blob trigger testing",
                                    caption:
                                        "Local Azure Functions runtime used to verify that the blob-triggered automation was active and listening for storage events.",
                                },
                                {
                                    figure: 8,
                                    stage: "Stage 04",
                                    title: "Automated Backup Successfully Executed",
                                    description:
                                        "Uploaded a test blob to the assessment-data source container and verified through the Function runtime logs that the storage event was detected and the automated backup process completed successfully.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/04-automated-backup-success.png",
                                    alt: "Azure Functions runtime showing successful automated Blob Storage backup execution",
                                    caption:
                                        "Azure Function runtime showing the detected Blob Storage event and successful execution of the automated backup process.",
                                },
                                {
                                    figure: 9,
                                    stage: "Stage 05",
                                    title: "Backup Destination Verified",
                                    description:
                                        "Inspected the backup storage destination after execution and confirmed that the expected object had been written to the backup-data container.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/05-backup-destination-verified.png",
                                    alt: "Azure Storage showing the backed-up blob in the backup-data container",
                                    caption:
                                        "Azure Storage backup-data container confirming that the expected blob was successfully written to the backup destination.",
                                },
                            ]}
                        />

                        {/* =====================================================
        PRIMARY EVIDENCE & INTERPRETATION
    ====================================================== */}

                        <div className="mt-14 space-y-14">
                            <EvidenceCard
                                figure={10}
                                title="Automated Blob Backup Successfully Executed"
                                image="/evidence/task-1/02-function-automation/primary/01-function-automation-verified.png"
                                alt="Azure Functions runtime showing blobBackupTrigger successfully detecting and backing up backup-text-01.txt"
                                caption="Primary evidence confirming that blobBackupTrigger detected backup-text-01.txt, processed the Blob 
                                Storage event and completed the automated backup operation successfully."
                                purpose="The purpose of this test was to verify the complete event-driven backup workflow. Rather than only 
                                confirming that the Blob trigger could execute, the test was designed to demonstrate that a newly detected 
                                source object could automatically initiate the backup process and be transferred to the designated backup storage destination."
                                action="I ran the blobBackupTrigger Function locally using Azure Functions Core Tools and uploaded backup-text-01.txt to 
                                the assessment-data source container. The Function detected the new 74-byte blob, processed the storage event and used the 
                                configured backup storage connection to write the object to the backup-data destination."
                                result="The Function runtime identified backup-text-01.txt, recorded the source blob size as 74 bytes, reported that
                                 the object was being backed up to backup-data, confirmed that the backup completed successfully and finished the Function 
                                 execution with a Succeeded status."
                                significance="This provides the primary runtime evidence that the solution operated as an event-driven automated
                                 backup workflow rather than as a manually initiated file copy. A Blob Storage event invoked application code 
                                 automatically, the Function processed the incoming object and the workflow produced a separate backup copy 
                                 in the designated destination. The earlier proof-of-process screenshots document how the Function was 
                                 developed and tested, while this evidence demonstrates the successful end-to-end outcome."
                            />
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
            PROOF OF PROCESS
        ====================================================== */}

                            <ImplementationJourney
                                title="Implementing Least-Privilege Blob Access"
                                description="These stages document the progression from creating a dedicated Microsoft Entra test identity to assigning a restricted Azure RBAC role and verifying the resulting access configuration."
                                items={[
                                    {
                                        figure: 11,
                                        stage: "Stage 01",
                                        title: "Dedicated Microsoft Entra Identity Created",
                                        description:
                                            "Created the Azure Assessment Blob Reader identity to provide a separate account for testing restricted access to Azure Blob Storage.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/01-entra-blob-reader-user.png",
                                        alt: "Microsoft Entra ID showing the Azure Assessment Blob Reader test identity",
                                        caption:
                                            "Dedicated Microsoft Entra identity created to test least-privilege access to Azure Blob Storage.",
                                    },
                                    {
                                        figure: 12,
                                        stage: "Stage 02",
                                        title: "Azure RBAC Role Configuration",
                                        description:
                                            "Opened Access Control (IAM) on the storage account and used the role assignment workflow to configure an appropriate data-plane permission for the test identity.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/02-rbac-add-role-assignment.png",
                                        alt: "Azure Portal showing the Add role assignment workflow in Access Control IAM",
                                        caption:
                                            "Azure RBAC role assignment workflow used to configure controlled Blob Storage access.",
                                    },
                                    {
                                        figure: 13,
                                        stage: "Stage 03",
                                        title: "Storage Blob Data Reader Assigned",
                                        description:
                                            "Assigned the built-in Storage Blob Data Reader role to the test identity, providing read access to blob data without granting modification or deletion permissions.",
                                        image:
                                            "/evidence/task-1/03-access-control/journey/03-storage-blob-data-reader-role-assigned.png",
                                        alt: "Azure Access Control IAM showing Storage Blob Data Reader assigned to the test identity",
                                        caption:
                                            "Storage Blob Data Reader role successfully assigned to the Azure Assessment Blob Reader identity.",
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
                                    alt="Microsoft Azure Storage Explorer showing a failed blob deletion with HTTP 403 AuthorizationPermissionMismatch"
                                    caption="Primary evidence confirming that Azure RBAC prevented the restricted Blob Reader identity from deleting azure-assessment-test.txt and returned HTTP 403 AuthorizationPermissionMismatch."
                                    purpose="The purpose of this validation was to prove that the Storage Blob Data Reader role was actively enforcing least-privilege access rather than relying only on the role assignment displayed in the Azure portal."
                                    action="I connected to the assessment-data container using the restricted Blob Reader identity and attempted to delete azure-assessment-test.txt. The identity could access the stored blob, but the delete operation required permissions that were not included in the assigned reader role."
                                    result="Azure rejected the delete request with HTTP 403 and returned the AuthorizationPermissionMismatch error. The blob remained stored in the assessment-data container, confirming that the restricted identity could not perform the unauthorised destructive operation."
                                    significance="This provides direct practical evidence that Azure RBAC enforced the principle of least privilege. Microsoft Entra ID established the identity, while Azure RBAC controlled what that identity was authorised to do with the storage resource. The successful denial demonstrates that read access can be provided without exposing stored data to unnecessary modification or deletion permissions."
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
                                    title: "Test File Stored",
                                    description:
                                        "Uploaded a test file to assessment-files to verify that the Azure file share could successfully store file-based data.",
                                    image:
                                        "/evidence/task-1/04-azure-file-share/journey/03-file-share-created.png",
                                    alt: "Azure Portal showing the assessment-files file share and stored test file",
                                    caption:
                                        "Azure file share successfully created and used to store assessment test data.",
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
                            Recommended Storage Strategy
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
                            together.
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

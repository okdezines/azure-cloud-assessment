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
                        configured to provide a central cloud storage platform for blob data,
                        security controls, versioning, recovery and lifecycle management.
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

                            <p className="mt-3 break-words font-semibold">
                                assessment-data
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Container used to store and test assessment blob objects.
                            </p>
                        </div>

                        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6">
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                Primary Region
                            </p>

                            <p className="mt-3 font-semibold">
                                Australia East
                            </p>

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
                                alt:
                                    "Azure Portal showing the primary storage account configuration before deployment",
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
                                alt:
                                    "Azure Portal showing the implemented storage services",
                                caption:
                                    "Azure Storage environment showing the storage services implemented to support the Task 1 workloads.",
                            },
                            {
                                figure: 3,
                                stage: "Stage 03",
                                title: "Storage Services Deployed",
                                description:
                                    "Deployment is complete with verified details.",
                                image:
                                    "/evidence/task-1/01-storage-infrastructure/journey/03-storage-services-implemented.png",
                                alt:
                                    "Azure Portal showing the completed storage deployment",
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
                            An event-driven backup workflow was implemented using Azure Functions
                            and Azure Blob Storage. The <strong>assessment-data</strong> container
                            acted as the primary source, while the{" "}
                            <strong>blobBackupTrigger</strong> Function monitored the container
                            for newly created blob objects.
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
                            description="These stages document the progression from creating the Azure Functions project and configuring the Blob trigger to testing the Function runtime, successfully processing a storage event and verifying the resulting backup in Azure Storage."
                            items={[
                                {
                                    figure: 5,
                                    stage: "Stage 01",
                                    title: "Azure Functions Project Setup",
                                    description:
                                        "Created the Azure Functions project and established the local development environment required to build and test the event-driven Blob Storage automation.",
                                    image:
                                        "/evidence/task-1/02-function-automation/journey/01-azure-functions-project-setup.png",
                                    alt:
                                        "Visual Studio Code showing the Azure Functions project setup",
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
                                    alt:
                                        "Visual Studio Code showing the blobBackupTrigger Azure Function code",
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
                                    alt:
                                        "Visual Studio Code showing the Azure Functions local runtime during Blob trigger testing",
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
                                    alt:
                                        "Azure Functions runtime showing successful automated Blob Storage backup execution",
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
                                    alt:
                                        "Azure Storage showing the backed-up blob in the backup-data container",
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
                                caption="Primary evidence confirming that blobBackupTrigger detected backup-text-01.txt, processed the Blob Storage event and completed the automated backup operation successfully."
                                purpose="The purpose of this test was to verify the complete event-driven backup workflow. Rather than only confirming that the Blob trigger could execute, the test was designed to demonstrate that a newly detected source object could automatically initiate the backup process and be transferred to the designated backup storage destination."
                                action="I ran the blobBackupTrigger Function locally using Azure Functions Core Tools and uploaded backup-text-01.txt to the assessment-data source container. The Function detected the new 74-byte blob, processed the storage event and used the configured backup storage connection to write the object to the backup-data destination."
                                result="The Function runtime identified backup-text-01.txt, recorded the source blob size as 74 bytes, reported that the object was being backed up to backup-data, confirmed that the backup completed successfully and finished the Function execution with a Succeeded status."
                                significance="This provides the primary runtime evidence that the solution operated as an event-driven automated backup workflow rather than as a manually initiated file copy. A Blob Storage event invoked application code automatically, the Function processed the incoming object and the workflow produced a separate backup copy in the designated destination. The earlier proof-of-process screenshots document how the Function was developed and tested, while this evidence demonstrates the successful end-to-end outcome."
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
                                The implementation also demonstrated the importance of separating
                                the source data from the backup destination. The{" "}
                                <strong>assessment-data</strong> container represented the
                                operational source, while <strong>backup-data</strong> provided a
                                distinct destination for the copied object. This made the
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
                                assigned the Storage Blob Data Reader role so that access to Azure
                                Blob Storage could be tested without granting unnecessary write,
                                modification or deletion permissions.
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
                                        alt:
                                            "Microsoft Entra ID showing the Azure Assessment Blob Reader test identity",
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
                                        alt:
                                            "Azure Portal showing the Add role assignment workflow in Access Control IAM",
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
                                        alt:
                                            "Azure Access Control IAM showing Storage Blob Data Reader assigned to the test identity",
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
                                    identity with the access required to work with blob data without
                                    granting broader modification or deletion permissions. The HTTP
                                    403 AuthorizationPermissionMismatch response demonstrated that
                                    Azure enforced this restriction when an operation exceeded the
                                    permissions assigned to the identity.
                                </p>

                                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                                    This showed me why least privilege is more than simply selecting
                                    a role in the Azure portal. The effectiveness of an access-control
                                    configuration should also be validated by testing both an
                                    authorised operation and an operation that the identity should
                                    not be permitted to perform.
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
                            Azure Files was implemented to demonstrate managed cloud-based file
                            storage using the SMB protocol. A dedicated file share was created
                            within the Azure Storage account, configured for the assessment
                            workload and tested with a sample file. The connection configuration
                            was then reviewed to demonstrate how the share could be mounted and
                            accessed from a client operating system.
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
                                    alt:
                                        "Azure Portal showing the Azure Files service used to begin creating the assessment file share",
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
                                    alt:
                                        "Azure Portal showing configuration of the assessment-files Azure file share",
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
                                    alt:
                                        "Azure Portal showing the assessment-files file share and stored test file",
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
                                    alt:
                                        "Azure Files showing the uploaded test file successfully stored in assessment-files",
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
                                    Azure translates the cloud resource into something that can
                                    be mounted and accessed by a client operating system.
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
                                    object-based data and application workloads, while Azure
                                    Files is useful when applications or users require traditional
                                    shared file-system behaviour without maintaining a dedicated
                                    file server.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>


            </section>

            {/* Section 5 */}

            <section className="mt-24 border-t border-slate-200 bg-slate-50">

                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">



                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">

                        05 · Storage Lifecycle & Cost Optimisation

                    </p>



                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">

                        Automated Blob Lifecycle Management

                    </h2>



                    <p className="mt-5 max-w-3xl leading-7 text-slate-600">

                        Azure Blob Storage lifecycle management was configured to

                        automatically manage ageing data and reduce long-term storage

                        costs. A lifecycle rule was created to identify older block blobs

                        and transition qualifying data from the Hot access tier to the

                        lower-cost Cool tier.

                    </p>



                    {/* Figure 12 */}

                    <EvidenceCard

                        figure={12}

                        title="Lifecycle management rule configuration"

                        image="/evidence/task-1/04-lifecycle-and-redundancy/lifecycle-rule-details.png"

                        alt="Azure Storage lifecycle management rule configuration"

                        caption="Azure Storage lifecycle management rule configured for block blobs and limited using filters."

                        purpose="The purpose of this configuration was to introduce automated lifecycle management for ageing blob data while limiting the rule to the intended storage workload."

                        action="I created a lifecycle management rule named move-old-blobs-to-cool and configured it to apply to base block blobs using a filtered scope."

                        result="Azure accepted the lifecycle rule configuration and allowed additional conditions and filters to be defined for the selected blobs."

                        significance="Lifecycle management reduces the need for manual storage administration by automatically applying storage policies as data ages. This supports cost optimisation while allowing the data to remain available."

                    />

                    {/* Figure 13 */}

                    <EvidenceCard

                        figure={13}

                        title="30-day lifecycle tiering condition"

                        image="/evidence/task-1/04-lifecycle-and-redundancy/lifecycle-base-blob-condition.png"

                        alt="Azure Storage lifecycle rule showing the 30-day last-modified condition and move to Cool storage action"

                        caption="Azure Storage lifecycle rule configured to transition base blobs to the Cool access tier after more than 30 days without modification."

                        purpose="The purpose of this condition was to automatically identify ageing blob data that no longer required the higher-cost Hot access tier."

                        action="I configured the lifecycle rule to evaluate the last-modified age of base blobs. Blobs that had not been modified for more than 30 days were configured to move automatically to Cool storage."

                        result="The lifecycle policy contained a defined age threshold of 30 days and a corresponding action to transition qualifying blobs to the Cool access tier."

                        significance="Age-based tiering provides automated storage cost optimisation. Recently used data can remain in the Hot tier, while older and less frequently accessed data can transition to the lower-cost Cool tier without being deleted."

                    />

                    {/* Figure 14 */}

                    <EvidenceCard

                        figure={14}

                        title="Lifecycle policy container scope"

                        image="/evidence/task-1/04-lifecycle-and-redundancy/lifecycle-container-prefix-filter.png"

                        alt="Azure Storage lifecycle management filter configured with the assessment-data container prefix"

                        caption="Azure Storage lifecycle policy filtered using the assessment-data/ blob prefix to restrict the rule to the assessment container."

                        purpose="The purpose of this filter was to ensure that the lifecycle policy applied only to blobs within the assessment-data container rather than affecting unrelated data in the storage account."

                        action="I configured the blob prefix filter as assessment-data/, restricting the lifecycle rule to blobs stored within the assessment container."

                        result="The lifecycle rule was scoped specifically to the assessment-data container while leaving other storage account data outside the policy."

                        significance="Scoping lifecycle policies limits automated actions to the intended workload. This provides greater administrative control and reduces the risk of unintentionally changing the access tier of unrelated storage data."

                    />

                    {/* Figure 15 */}

                    <EvidenceCard

                        figure={15}

                        title="Lifecycle management policy enabled"

                        image="/evidence/task-1/04-lifecycle-and-redundancy/lifecycle-policy-enabled.png"

                        alt="Azure Storage lifecycle management policy successfully created and enabled"

                        caption="Azure Storage lifecycle management policy move-old-blobs-to-cool successfully created and enabled."

                        purpose="The purpose of this final validation was to confirm that the lifecycle management policy had been successfully saved and enabled on the storage account."

                        action="I completed the lifecycle rule configuration and added the policy to the storage account."

                        result="Azure successfully updated the lifecycle management policy and displayed move-old-blobs-to-cool with an Enabled status."

                        significance="The enabled policy confirms that lifecycle management is now configured to automatically evaluate eligible blobs and transition qualifying ageing data to the Cool access tier according to the defined rule."

                    />

                    {/* Section 6 */}

                    <section className="mt-24 border-t border-slate-200 pt-16">

                        <div className="mx-auto max-w-6xl px-6">



                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">

                                06 · Storage Resilience & Redundancy

                            </p>



                            <h2 className="mt-3 text-3xl font-bold tracking-tight">

                                Azure Storage Redundancy

                            </h2>



                            <p className="mt-5 max-w-3xl leading-7 text-slate-600">

                                Azure Storage redundancy was reviewed to understand how multiple

                                copies of assessment data can provide resilience against hardware,

                                infrastructure and availability-zone failures. The existing

                                redundancy configuration was identified before evaluating a

                                zone-redundant storage option.

                            </p>



                            {/* Figure 16 */}

                            <EvidenceCard

                                figure={16}

                                title="Existing storage redundancy configuration"

                                image="/evidence/task-1/04-lifecycle-and-redundancy/redundancy-lrs-current.png"

                                alt="Azure Storage redundancy page showing locally redundant storage"

                                caption="Azure Storage account showing Locally Redundant Storage (LRS) as the existing redundancy configuration."

                                purpose="The purpose of this review was to identify the existing redundancy configuration of the assessment storage account before evaluating alternative resilience options."

                                action="I opened the Redundancy settings of the Azure Storage account and reviewed the currently configured replication option."

                                result="The storage account was configured to use Locally Redundant Storage (LRS), with Australia East displayed as the primary location."

                                significance="LRS maintains multiple copies of data within a single Azure datacenter location. This provides protection against individual hardware failures but does not provide the same availability-zone resilience as Zone-Redundant Storage."

                            />

                            {/* Figure 17 */}

                            <EvidenceCard

                                figure={17}

                                title="Azure Storage redundancy options reviewed"

                                image="/evidence/task-1/04-lifecycle-and-redundancy/redundancy-options-reviewed.png"

                                alt="Azure Storage redundancy menu displaying the available replication options"

                                caption="Azure Storage redundancy options reviewed, including LRS, GRS, RA-GRS and ZRS."

                                purpose="The purpose of this review was to compare the redundancy options available for the assessment storage account and determine which configuration could provide greater resilience than LRS."

                                action="I opened the redundancy selection menu and reviewed the replication options available for the storage account."

                                result="Azure presented locally redundant, geo-redundant, read-access geo-redundant and zone-redundant storage options. Geo-zone-redundant options were also displayed but were unavailable for this configuration."

                                significance="The redundancy options provide different levels of resilience. LRS protects against local hardware failures, ZRS distributes copies across availability zones within a region, while geo-redundant options additionally replicate data to a secondary geographic region."

                            />



                            {/* Figure 18 */}

                            <EvidenceCard

                                figure={18}

                                title="Zone-Redundant Storage selected"

                                image="/evidence/task-1/04-lifecycle-and-redundancy/redundancy-zrs-selected.png"

                                alt="Azure Storage redundancy page showing Zone-Redundant Storage selected"

                                caption="Azure Storage redundancy configuration showing Zone-Redundant Storage (ZRS) selected for the assessment storage account."

                                purpose="The purpose of selecting Zone-Redundant Storage was to demonstrate how storage resilience can be improved by distributing redundant copies of data across separate availability zones within the Azure region."

                                action="After reviewing the available redundancy options, I selected Zone-Redundant Storage (ZRS) as the proposed redundancy configuration."

                                result="Azure displayed Zone-Redundant Storage (ZRS) in the redundancy configuration field, with Australia East remaining the primary storage location."

                                significance="ZRS replicates storage data synchronously across separate availability zones within the primary region. This provides greater resilience against a datacenter or availability-zone failure than LRS, which keeps its redundant copies within a single datacenter."

                            />

                        </div>

                    </section>

                    {/* Section 7 — Azure Table Storage */}

                    <section className="mt-24 border-t border-slate-200 pt-16">

                        <div className="mx-auto max-w-6xl px-6">



                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">

                                07 · NoSQL Data Storage

                            </p>



                            <h2 className="mt-3 text-3xl font-bold tracking-tight">

                                Azure Table Storage

                            </h2>



                            <p className="mt-5 max-w-3xl leading-7 text-slate-600">

                                Azure Table Storage was implemented to demonstrate the storage of

                                structured NoSQL data within the assessment storage account. A table

                                named AssessmentRecords was created and populated with an entity

                                containing a PartitionKey, RowKey and additional application-defined

                                properties. This demonstrated how Azure Table Storage can store

                                lightweight structured records without requiring a traditional

                                relational database schema.

                            </p>



                            {/* Figure 19 */}

                            <EvidenceCard

                                figure={19}

                                title="Azure Table Storage created"

                                image="/evidence/task-1/05-table-storage/table-storage-empty-table.png"

                                alt="Azure Storage browser showing the empty AssessmentRecords table"

                                caption="Azure Table Storage showing the newly created AssessmentRecords table before an entity was added."

                                purpose="The purpose of this step was to establish a NoSQL table within the assessment storage account for storing structured assessment records."

                                action="I created a table named AssessmentRecords within the Azure Storage account and opened it through Storage Browser to verify that the table was available for use."

                                result="The AssessmentRecords table was successfully created and initially contained no entities, providing a clean data structure for the subsequent entity insertion test."

                                significance="Azure Table Storage provides a scalable NoSQL key-value data store for structured information that does not require the fixed relational schema associated with traditional SQL databases."

                            />



                            {/* Figure 20 */}

                            <EvidenceCard

                                figure={20}

                                title="Table Storage entity configured"

                                image="/evidence/task-1/05-table-storage/table-storage-entity-fields-complete.png"

                                alt="Azure Table Storage entity containing PartitionKey RowKey Task Status and Service properties"

                                caption="Assessment entity configured with PartitionKey, RowKey, Task, Status and Service properties before insertion."

                                purpose="The purpose of this configuration was to demonstrate how an Azure Table Storage entity can combine required key properties with additional application-defined attributes."

                                action="I configured the entity with PartitionKey Assessment and RowKey 001. I then added Task, Status and Service properties to describe the assessment record."

                                result="The entity contained the required PartitionKey and RowKey together with the custom Task, Status and Service properties and was ready to be inserted into the AssessmentRecords table."

                                significance="The PartitionKey and RowKey uniquely identify an entity within Azure Table Storage, while additional properties allow flexible structured data to be stored without defining a rigid database schema in advance."

                            />



                            {/* Figure 21 */}

                            <EvidenceCard

                                figure={21}

                                title="Table Storage entity successfully created"

                                image="/evidence/task-1/05-table-storage/table-storage-entity-created.png"

                                alt="Azure Table Storage showing the successfully created Assessment entity"

                                caption="AssessmentRecords table showing the successfully inserted entity together with Azure's successful entity creation notification."

                                purpose="The purpose of this final validation was to confirm that the structured entity could be successfully persisted within Azure Table Storage."

                                action="After completing the entity properties, I inserted the record into the AssessmentRecords table and reviewed the stored data through Azure Storage Browser."

                                result="Azure successfully added the Assessment-001 entity. The stored record displayed its PartitionKey, RowKey, timestamp, Task, Status and Service values in the table."

                                significance="The successful insertion demonstrated practical use of Azure Table Storage as a lightweight NoSQL service for persisting structured application or operational records within an Azure Storage account."

                            />



                        </div>

                    </section>

                    {/* =========================================================*

*&#xA0;   SECTION 08 — AZURE FILES*

*========================================================= */}

                    <section className="mt-20 border-t border-slate-200 pt-12">

                        <div className="mb-10">

                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">

                                08 · Managed File Storage

                            </p>



                            <h2 className="text-3xl font-bold tracking-tight text-slate-950">

                                Azure Files — Managed File Sharing

                            </h2>



                            <p className="mt-5 max-w-3xl leading-7 text-slate-600">

                                Azure Files was reviewed to demonstrate how cloud-hosted file shares can

                                provide shared storage to different operating systems using standard file

                                sharing protocols. An Azure file share named{" "}

                                <strong>assessment-files</strong> was created within the assessment

                                storage account. The connection options were then reviewed for Windows

                                and Linux clients to demonstrate how the same centrally managed file

                                share can be accessed from different computing environments.

                            </p>

                        </div>



                        <div className="space-y-14">



                            {/* Figure 22 */}

                            <EvidenceCard

                                figure={22}

                                title="Azure File Share — Windows connection"

                                image="/evidence/task-1/06-azure-files/azure-file-share-connect-windows.png"

                                alt="Azure portal showing Windows connection options for the assessment-files Azure file share"

                                caption="Azure Files connection configuration for the assessment-files share using a Windows client."

                                purpose="The purpose of this step was to review how the Azure file share could be connected to a Windows computer as centrally managed cloud file storage."

                                action="I opened the assessment-files Azure file share and selected Connect. I reviewed the Windows connection configuration, including the drive letter, authentication method and SMB connectivity requirements."

                                result="Azure displayed the Windows connection options for the assessment-files share, demonstrating that the cloud-hosted file share can be mapped and accessed from a Windows environment."

                                significance="Azure Files supports SMB-based file sharing, allowing a cloud file share to be presented to Windows systems similarly to a traditional network drive. This enables centralised file storage without requiring an organisation to maintain its own on-premises file server."

                            />



                            {/* Figure 23 */}

                            <EvidenceCard

                                figure={23}

                                title="Azure File Share — Linux connection"

                                image="/evidence/task-1/06-azure-files/azure-file-share-connect-linux.png"

                                alt="Azure portal showing Linux connection options for the assessment-files Azure file share"

                                caption="Azure Files connection configuration for the same assessment-files share using a Linux client."

                                purpose="The purpose of this review was to demonstrate that the same Azure file share can also be accessed from Linux systems."

                                action="From the Connect panel of the assessment-files share, I selected the Linux tab and reviewed the mount configuration provided by Azure."

                                result="Azure provided Linux-specific connection guidance for mounting the assessment-files share, demonstrating cross-platform access to the same centrally managed storage resource."

                                significance="Supporting access from both Windows and Linux demonstrates the flexibility of Azure Files in mixed operating-system environments. Applications, virtual machines and users can access shared cloud-hosted files while Azure manages the underlying storage infrastructure."

                            />



                        </div>

                    </section>

                </div>

            </section>

            {/* =========================================================*

*&#xA0;   SECTION 09 — STORAGE SECURITY & BUSINESS RECOMMENDATIONS*

*========================================================= */}

            <section className="mx-auto mt-24 w-full max-w-5xl border-t border-slate-200 px-6 pt-16 sm:px-8 lg:px-0">

                <div className="mb-12 max-w-4xl">

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">

                        09 · Storage Security & Business Recommendations

                    </p>



                    <h2 className="text-3xl font-bold tracking-tight text-slate-950">

                        Azure Storage Data Protection Strategy

                    </h2>



                    <p className="mt-5 max-w-3xl leading-7 text-slate-600">

                        Based on the Azure Storage services implemented and tested during this

                        assessment, several technologies can be combined to improve data

                        protection, recoverability, cost efficiency and the management of

                        structured business information. The following recommendations explain

                        how Blob Versioning, Soft Delete, Lifecycle Management and Azure Table

                        Storage could support a practical organisational storage strategy.

                    </p>

                </div>



                <div className="space-y-10">

                    {/* Recommendation 01 */}

                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <div className="mb-6 flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">

                                01

                            </div>



                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">

                                    Data Recovery

                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-950">

                                    Blob Versioning

                                </h3>

                            </div>

                        </div>



                        <div className="grid gap-8 lg:grid-cols-3">

                            <div>

                                <h4 className="font-semibold text-slate-950">Recommendation</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    I recommend enabling Blob Versioning for business-critical

                                    containers where files may be modified or replaced. Versioning

                                    preserves previous versions of a blob when changes are made,

                                    providing an additional recovery mechanism for important

                                    organisational data.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">Business benefit</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    This reduces the risk associated with accidental overwrites and

                                    unwanted modifications because earlier versions can be retained

                                    instead of being immediately lost. This is valuable where multiple

                                    users, applications or automated processes interact with the same

                                    storage environment.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">

                                    Security & recovery significance

                                </h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    Versioning should form part of a wider data-protection strategy

                                    rather than being treated as a complete backup solution. During

                                    this assessment, its interaction with Soft Delete demonstrated how

                                    a previous blob version could be recovered and promoted back to the

                                    current version when required.

                                </p>

                            </div>

                        </div>

                    </article>



                    {/* Recommendation 02 */}

                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <div className="mb-6 flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">

                                02

                            </div>



                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">

                                    Data Protection

                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-950">

                                    Soft Delete

                                </h3>

                            </div>

                        </div>



                        <div className="grid gap-8 lg:grid-cols-3">

                            <div>

                                <h4 className="font-semibold text-slate-950">Recommendation</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    I recommend enabling Soft Delete for Azure Blob Storage so that

                                    accidentally deleted data remains recoverable for a defined

                                    retention period rather than being permanently removed

                                    immediately.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">Business benefit</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    Soft Delete provides a recovery window for human error or

                                    unintended deletion. This can reduce disruption and help an

                                    organisation restore important data without relying solely on an

                                    external recovery process.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">

                                    Security & recovery significance

                                </h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    The assessment demonstrated this process by deleting a test blob,

                                    locating its recoverable version and restoring the data. When used

                                    alongside versioning, Soft Delete provides an additional layer of

                                    protection against accidental data loss.

                                </p>

                            </div>

                        </div>

                    </article>



                    {/* Recommendation 03 */}

                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <div className="mb-6 flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">

                                03

                            </div>



                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">

                                    Cost Optimisation

                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-950">

                                    Lifecycle Management

                                </h3>

                            </div>

                        </div>



                        <div className="grid gap-8 lg:grid-cols-3">

                            <div>

                                <h4 className="font-semibold text-slate-950">Recommendation</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    I recommend using Lifecycle Management policies to automatically

                                    transition older or infrequently accessed business data to a more

                                    appropriate storage tier according to defined organisational

                                    rules.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">Business benefit</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    Automated tiering reduces the need for administrators to manually

                                    review ageing data. Frequently used information can remain in the

                                    Hot tier while older information can move to lower-cost storage

                                    when it meets the configured policy conditions.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">

                                    Cost optimisation significance

                                </h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    In this assessment, the lifecycle rule was scoped to block blobs

                                    in the assessment-data container and configured to move qualifying

                                    base blobs to the Cool tier after more than 30 days without

                                    modification. This demonstrates policy-based cost optimisation

                                    without automatically deleting the data.

                                </p>

                            </div>

                        </div>

                    </article>



                    {/* Recommendation 04 */}

                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                        <div className="mb-6 flex items-start gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">

                                04

                            </div>



                            <div>

                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">

                                    Structured Cloud Data

                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-950">

                                    Azure Table Storage

                                </h3>

                            </div>

                        </div>



                        <div className="grid gap-8 lg:grid-cols-3">

                            <div>

                                <h4 className="font-semibold text-slate-950">Recommendation</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    I recommend Azure Table Storage where an application requires a

                                    lightweight NoSQL data store for structured information that does

                                    not require the relationships and fixed schema of a traditional

                                    relational database.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">Business use case</h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    Table Storage can be suitable for operational records, application

                                    metadata, status information and other key-value style datasets.

                                    In this assessment, the AssessmentRecords table stored an entity

                                    containing PartitionKey, RowKey, Task, Status and Service

                                    properties.

                                </p>

                            </div>



                            <div>

                                <h4 className="font-semibold text-slate-950">

                                    Architecture significance

                                </h4>

                                <p className="mt-2 leading-7 text-slate-600">

                                    The use of PartitionKey and RowKey provides a structured method of

                                    identifying entities while allowing additional properties to be

                                    added without defining a rigid relational schema. This makes Table

                                    Storage useful for simple, scalable cloud application data.

                                </p>

                            </div>

                        </div>

                    </article>

                </div>



                {/* Overall recommendation */}

                <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/60 p-8">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">

                        Overall Recommendation

                    </p>



                    <h3 className="mt-2 text-2xl font-bold text-slate-950">

                        A layered Azure Storage strategy

                    </h3>


                    <p className="mt-4 max-w-4xl leading-7 text-slate-700">

                        Rather than relying on a single Azure Storage feature, I recommend a

                        layered approach. Blob Versioning can preserve previous states of data,

                        Soft Delete can provide a recovery window following accidental deletion,

                        and Lifecycle Management can automatically control the storage tier of

                        ageing data. Azure Table Storage can complement these services where

                        lightweight structured application records are required. Together, these

                        technologies provide stronger data management, recovery capability and

                        cost control within the Azure environment. <br />

                        This layered approach balances data protection, recoverability, scalability

                        and cost optimisation while allowing each Azure Storage service to be

                        applied according to the organisation&apos;s specific data requirements.

                    </p>

                </div>

            </section>

        </main>

    );

}
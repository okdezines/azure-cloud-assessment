import EvidenceCard from "../task-1/EvidenceCard";

export default function Task2Page() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <header className="mb-12 border-b pb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Microsoft Azure Cloud Assessment
                </p>

                <h1 className="mb-4 text-4xl font-bold">
                    Task 2 — Docker Containerisation & Azure Deployment
                </h1>

                <p className="text-lg text-gray-600">
                    Technical report documenting the development, containerisation and
                    deployment of an ASP.NET Core application using Docker, Azure
                    Container Registry and Azure Container Instances.
                </p>
            </header>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Introduction</h2>

                <p className="leading-7 text-gray-700">
                    This report documents the implementation, testing and evaluation of
                    Azure Task 2, supported by technical evidence and screenshots
                    collected throughout the project.
                </p>

                <EvidenceCard
                    figure="2.1"
                    title="Creating the ASP.NET Core Application"
                    image="/images/task-2/Creating the ASP.NET.png"
                    alt="Terminal showing successful ASP.NET Core application creation and build"
                    caption="Creating and successfully building HelloWebApp using the .NET CLI in Ubuntu WSL."
                    purpose="To establish a functional ASP.NET Core application for subsequent Docker containerisation."
                    action="Created the HelloWebApp Razor Pages project using the .NET CLI and compiled it using dotnet build."
                    result="The project was created successfully, dependencies were restored, and the application compiled using .NET 10."
                    significance="The successful build confirmed that the development environment was correctly configured and ready for containerisation."
                />

                <EvidenceCard
                    figure={2.2}
                    title="Verifying the ASP.NET Core Development Environment"
                    image="/images/task-2/2.2DotnetInVScode.png"
                    alt="VS Code showing the .NET SDK version and successful HelloWebApp build"
                    caption="Verification of the .NET 10 development environment and successful compilation of HelloWebApp in Ubuntu WSL."
                    purpose="To verify that the ASP.NET Core development environment was correctly configured within Ubuntu WSL before containerisation."
                    action="Opened HelloWebApp in Visual Studio Code, checked the installed SDK using dotnet --version, and compiled the project using dotnet build."
                    result="The terminal confirmed .NET SDK version 10.0.114 and successful compilation of HelloWebApp.dll."
                    significance="Successful compilation established a working development baseline before introducing Docker."
                />

                <EvidenceCard
                    figure={2.3}
                    title="Running and Testing HelloWebApp Locally"
                    image="/images/task-2/2.3RazorMod.png"
                    alt="ASP.NET Core application running at localhost port 5000"
                    caption="Successful local execution and browser verification of the customised ASP.NET Core application."
                    purpose="To verify that HelloWebApp could execute and display the customised assessment page before containerisation."
                    action="Modified Pages/Index.cshtml, ran the application using dotnet run --urls http://localhost:5000, and opened the application in a browser."
                    result="The application started successfully on port 5000 and displayed the customised Azure Cloud Assessment Task 2 page."
                    significance="Local testing established a functional baseline against which Docker container behaviour could be compared."
                />

                <EvidenceCard
                    figure={2.4}
                    title="Configuring the Multi-Stage Dockerfile"
                    image="/images/task-2/2.4Multi-StageDocker.png"
                    alt="Dockerfile showing the .NET SDK build stage and ASP.NET runtime stage"
                    caption="Multi-stage Dockerfile configuration for building and running HelloWebApp using .NET 10."
                    purpose="To prepare the ASP.NET Core application for Docker containerisation using separate build and runtime stages."
                    action="Created a Dockerfile using the .NET 10 SDK image to publish the application and the ASP.NET 10 runtime image to execute it on port 8080."
                    result="The Dockerfile defined both build stages, application publishing, port 8080 configuration, and the HelloWebApp.dll entry point."
                    significance="The multi-stage approach separates build dependencies from the runtime image and supports reproducible container deployment."
                />

                <EvidenceCard
                    figure={2.5}
                    title="Building the Docker Image"
                    image="/images/task-2/dockerBuild.png"
                    alt="Docker build output showing the ASP.NET Core image build process"
                    caption="Building the HelloWebApp Docker image using the multi-stage Dockerfile."
                    purpose="To package the ASP.NET Core application and its runtime dependencies into a portable Docker image."
                    action="Executed the Docker build process using the multi-stage Dockerfile, which restored dependencies, published the application, and prepared the runtime image."
                    result="The Docker image was built successfully and tagged as hellowebapp:v1. The build output confirmed completion of the multi-stage process and export of the final container image."
                    significance="Containerisation packages the application into a consistent runtime environment, supporting deployment across local Docker and Azure Container Instances."
                />

                <EvidenceCard
                    figure="2.6"
                    title="Docker Container Port Mapping and Verification"
                    image="/images/task-2/04-docker-port-mapping.png"
                    alt="Docker terminal showing two running HelloWebApp containers with host ports 8080 and 8081 mapped to internal port 8080"
                    caption="Docker container verification showing two running HelloWebApp instances with separate host port mappings."
                    purpose="To verify that the containerised ASP.NET Core application could run using Docker port mapping without host port conflicts."
                    action="Executed docker ps -a and docker ps with a formatted output table to inspect container names, operational status, and published ports."
                    result="The output confirmed that hellowebapp-container was running on host port 8080 and hellowebapp-v2 was running on host port 8081, with both forwarding traffic to container port 8080."
                    significance="Docker port mapping allows multiple containers to use the same internal application port while exposing different ports on the host machine. This demonstrates container isolation and flexible application testing."
                />

                <EvidenceCard
                    figure="2.7"
                    title="Testing the Docker Containers in a Web Browser"
                    image="/images/task-2/05-docker-browser-test.png"
                    alt="Two browser windows displaying HelloWebApp on localhost ports 8080 and 8081, with Docker terminal verification"
                    caption="Successful browser verification of two containerised ASP.NET Core applications using separate Docker host ports."
                    purpose="To verify that the Docker containers could serve the ASP.NET Core application successfully through the configured host ports."
                    action="Accessed localhost:8080 and localhost:8081 in separate browser windows and inspected the running containers using Docker CLI commands."
                    result="Both browser addresses successfully displayed HelloWebApp. Port 8080 displayed the Azure Cloud Assessment Task 2 page, while port 8081 displayed the student ID page."
                    significance="This confirmed that Docker port publishing was functioning correctly and that separate versions of the ASP.NET Core application could operate simultaneously without host port conflicts."
                />

                <EvidenceCard
                    figure="2.8"
                    title="Verifying Docker Images in Azure Container Registry"
                    image="/images/task-2/07-acr-repository-tags.png"
                    alt="Azure CLI terminal displaying Docker image tags v1, v2 and v3 in the HelloWebApp repository"
                    caption="Azure CLI verification of three Docker image tags stored in the HelloWebApp repository within Azure Container Registry."
                    purpose="To verify that the container images were available in Azure Container Registry before deployment to Azure Container Instances."
                    action="Executed the az acr repository show-tags command against the acr270907283assessment registry, specifying the hellowebapp repository and table output format."
                    result="The Azure CLI successfully returned three image tags: v1, v2 and v3, confirming their presence in the registry."
                    significance="Azure Container Registry provides a central location for storing and versioning container images. Verifying the image tags established that the required images were available for retrieval during Azure Container Instances deployment."
                />

                <EvidenceCard
                    figure="2.9"
                    title="Deploying HelloWebApp to Azure Container Instances"
                    image="/images/task-2/08-aci-running-overview.png"
                    alt="Azure Portal showing the HelloWebApp container instance running in Australia East with a public IP address and FQDN"
                    caption="Azure Container Instances overview confirming the successful provisioning and running status of HelloWebApp in the Australia East region."
                    purpose="To verify that the containerised ASP.NET Core application had been deployed to Azure Container Instances and that Azure had provisioned the required hosting resources."
                    action="Opened the Azure Portal and inspected the hellowebapp-portal container instance, reviewing its resource group, deployment region, operating system, running status, public IP address, FQDN, and monitoring information."
                    result="The Azure Portal reported the container instance as Running in Australia East, using Linux with one container. A public IP address of 4.198.13.166 and an FQDN were assigned."
                    significance="Azure Container Instances provides managed container hosting without requiring the configuration or maintenance of virtual machines. The running status and assigned public endpoint established that the container was provisioned and ready for external connectivity testing."
                />

                {/* Figure 2.10 — Azure Container Events */}
                <EvidenceCard
                    figure="2.10"
                    title="Verifying Azure Container Instances Events"
                    image="/images/task-2/10-aci-container-events.png"
                    alt="Azure Portal container event history showing the image pull and container startup."
                    caption="Azure Container Instances event history showing successful image retrieval and container startup."
                    purpose="To verify that Azure Container Instances successfully retrieved the HelloWebApp image and started the container."
                    action="Opened the HelloWebApp container instance in the Azure Portal, selected Containers, and inspected the Events tab."
                    result="The Azure Portal displayed Pulling, Pulled, and Started events, confirming successful image retrieval and container startup."
                    significance="Container events provide supporting evidence that Azure retrieved the application image and started the container, complementing the public browser accessibility test."
                />

                {/* Figure 2.11 — Local Docker Images */}

                <EvidenceCard
                    figure="2.11"
                    title="Verifying Local Docker Images and ACR Tags"
                    image="/images/task-2/11-local-docker-images.png"
                    alt="Ubuntu WSL terminal showing local Docker images and corresponding Azure Container Registry tags"
                    caption="Verification of HelloWebApp image versions v1, v2 and v3 using Docker CLI in Ubuntu WSL."
                    purpose="To verify that the HelloWebApp Docker images remained available locally and were correctly tagged for Azure Container Registry."
                    action="Executed docker image ls in Ubuntu WSL to inspect local Docker image repositories, version tags, image IDs and image sizes."
                    result="Confirmed three HelloWebApp image versions, v1, v2 and v3, together with their corresponding ACR-qualified tags. Each local image and its ACR-tagged counterpart shared the same image ID."
                    significance="Consistent image tagging supports version management, deployment traceability and troubleshooting. The matching image IDs confirm that the corresponding local tags reference the same image."
                />

                {/* Figure 2.12 — ACR Admin Access */}

                <EvidenceCard
                    figure="2.12"
                    title="Verifying Azure Container Registry Administrative Access"
                    image="/images/task-2/12-acr-admin-access.png"
                    alt="Azure CLI showing the registry name, administrative access enabled and login server"
                    caption="Azure CLI verification confirming that administrative access is enabled for the assessment container registry."
                    purpose="To verify the administrative authentication configuration of Azure Container Registry before completing deployment evidence."
                    action="Executed az acr show with a custom query to retrieve the registry name, adminUserEnabled property and loginServer."
                    result="The registry acr270907283assessment returned AdminEnabled as True and identified acr270907283assessment.azurecr.io as its login server."
                    significance="The result confirms that administrative authentication is enabled. Although suitable for demonstrating the assessment configuration, production deployments should prefer managed identities and least-privilege access."
                />

                {/* Figure 2.13 — ACR Repository Tags */}

                <EvidenceCard
                    figure="2.13"
                    title="Verifying Image Versions in Azure Container Registry"
                    image="/images/task-2/13-acr-repository-tags.png"
                    alt="Azure CLI showing v1, v2 and v3 image tags in the HelloWebApp Azure Container Registry repository"
                    caption="Verification of three published HelloWebApp image versions in Azure Container Registry."
                    purpose="To confirm that the required HelloWebApp image versions were available in Azure Container Registry."
                    action="Executed az acr repository show-tags against the hellowebapp repository in acr270907283assessment."
                    result="Azure Container Registry returned three repository tags: v1, v2 and v3."
                    significance="Registry image versioning supports controlled deployments, image identification and the ability to select previously published application versions when troubleshooting or rolling back."
                />

                {/* Figure 2.14 — Supporting Registry Verification */}

                <EvidenceCard
                    figure="2.14"
                    title="Verifying Azure Subscription and Registry Configuration"
                    image="/images/task-2/14-acr-registry-verification.png"
                    alt="Azure CLI showing the active subscription and Azure Container Registry configuration"
                    caption="Verification of the active Azure subscription and ACR configuration, including registry administrator access and Basic SKU."
                    purpose="To confirm the Azure subscription context and registry configuration used during Task 2."
                    action="Executed az account show and az acr show to inspect the active subscription, registry login server, administrator access setting and SKU."
                    result="The Azure CLI confirmed the active subscription and displayed the registry's Basic SKU, enabled administrator account and login server."
                    significance="Verifying the subscription and registry configuration established the Azure environment used for storing and deploying container images."
                />
            </section>

            {/* CHECKPOINT 2.16 — BUSINESS VALUE & COST EFFICIENCY */}

            <section className="mt-16 space-y-8 border-t border-slate-200 pt-10">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                        Business Value & Cost Efficiency
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight">
                        Business Benefits of Container-Based Architecture
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Container-based architecture provides organisations with
                        opportunities to improve application deployment efficiency,
                        infrastructure utilisation, and operational flexibility. The
                        HelloWebApp deployment demonstrated how Docker and Microsoft Azure
                        services can support a simplified application delivery workflow.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* 1. INFRASTRUCTURE COST EFFICIENCY */}

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            1. Infrastructure Cost Efficiency
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Traditional application hosting often requires organisations to
                            provision and maintain virtual machines, including operating
                            system updates, security patches, and infrastructure
                            configuration. This can introduce additional administrative effort
                            and operational costs.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            Azure Container Instances provides an alternative by allowing
                            containerised applications to run without managing the underlying
                            virtual machine. Container resources can be allocated according to
                            application requirements, with charges based on provisioned
                            resources and deployment duration.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            For HelloWebApp, Azure Container Instances provided a practical
                            hosting solution for testing the application in a cloud
                            environment. However, overall cost savings were not measured
                            against an equivalent virtual machine deployment. Azure Container
                            Registry storage and other applicable service charges must also be
                            considered.
                        </p>
                        <p className="mt-3 leading-7 text-slate-600">
                            Although Azure Container Instances reduces the need to administer
                            virtual machines directly, it does not automatically guarantee
                            lower infrastructure costs. Actual expenditure depends on
                            allocated CPU and memory resources, deployment duration, container
                            usage patterns, and supporting services such as Azure Container
                            Registry. For this assessment, the primary benefit demonstrated
                            was simplified application deployment and infrastructure
                            management rather than independently verified financial savings. A
                            production implementation would require cost monitoring and
                            comparison against alternative hosting options before determining
                            the most economical solution.
                        </p>
                    </div>

                    {/* 2. DEPLOYMENT EFFICIENCY AND PORTABILITY */}

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            2. Deployment Efficiency and Portability
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Docker packages an application together with its runtime
                            dependencies into a container image. This helps maintain
                            consistency between development, testing, and cloud deployment
                            environments.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            During Task 2, HelloWebApp was developed using ASP.NET Core and
                            .NET 10, packaged through a multi-stage Dockerfile, and tested
                            locally before deployment to Microsoft Azure.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            Azure Container Registry stored multiple image versions identified
                            by tags v1, v2, and v3. These tags supported image identification
                            and provided the ability to select a previously published image
                            for troubleshooting or redeployment.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            This approach can reduce environment-related deployment issues and
                            support more repeatable application delivery. The same compatible
                            container image can also be deployed to other container hosting
                            platforms, subject to their configuration and runtime
                            requirements.
                        </p>
                    </div>

                    {/* 3. BUSINESS RECOMMENDATIONS */}

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            3. Business Recommendations
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Based on the implementation and testing completed during Task 2,
                            the following improvements are recommended for organisations
                            adopting container-based application deployment.
                        </p>

                        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                            <li>
                                <strong>Implement automated deployment:</strong> Use GitHub
                                Actions or Azure DevOps pipelines to automate container image
                                builds, testing, and deployment, reducing repetitive manual
                                tasks.
                            </li>

                            <li>
                                <strong>Improve deployment security:</strong> Use secure
                                registry authentication, managed identities where supported,
                                HTTPS access, and appropriate network restrictions.
                            </li>

                            <li>
                                <strong>Establish monitoring:</strong> Use Azure Monitor and
                                available diagnostic logging to observe container performance,
                                application behaviour, and operational issues.
                            </li>

                            <li>
                                <strong>Control infrastructure costs:</strong> Monitor Azure
                                resource consumption, configure budget alerts, and remove
                                unnecessary assessment or development resources.
                            </li>

                            <li>
                                <strong>Maintain image versioning:</strong> Apply meaningful
                                image tags and retain verified deployment versions to support
                                troubleshooting and rollback procedures.
                            </li>
                        </ul>

                        <p className="mt-4 leading-7 text-slate-600">
                            These recommendations would help an organisation progress from a
                            manually deployed container application towards a more secure,
                            maintainable, and automated cloud deployment process.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mt-12 mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    System Architecture
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                    HelloWebApp Container Deployment Architecture
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                    Figure 2.15 illustrates the container deployment workflow implemented
                    during Task 2. The ASP.NET Core application was packaged using Docker,
                    its versioned images were stored in Azure Container Registry, and the
                    application was deployed to Azure Container Instances for public
                    accessibility and testing.
                </p>
            </div>

            {/* Figure 2.15 — Container Deployment Architecture */}

            <figure className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img
                    src="/images/task-2/15-container-architecture.png"
                    alt="Container deployment architecture showing ASP.NET Core, Docker, Azure Container Registry and Azure Container Instances"
                    className="mx-auto h-auto w-full max-w-2xl object-contain p-5"
                />

                <figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-600">
                    <span className="font-semibold text-slate-900">Figure 2.15 —</span>{" "}
                    Container deployment architecture illustrating the HelloWebApp
                    workflow from ASP.NET Core development through Docker image creation,
                    Azure Container Registry and Azure Container Instances.
                </figcaption>
            </figure>

            {/* TECHNICAL EVALUATION & REFLECTION */}

            <section className="mt-16 space-y-8 border-t border-slate-200 pt-10">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                        Technical Evaluation & Reflection
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight">
                        Evaluation of Docker Containerisation and Azure Deployment
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Task 2 demonstrated the development, containerisation, image
                        management, and cloud deployment of an ASP.NET Core application.
                        Docker provided a consistent application runtime, Azure Container
                        Registry (ACR) stored versioned container images, and Azure
                        Container Instances (ACI) provided a managed environment for running
                        the application without provisioning a virtual machine.
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            1. Development and Containerisation
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                            HelloWebApp was developed using ASP.NET Core and .NET 10 within
                            Ubuntu WSL. Successful local compilation and browser testing
                            established a functional baseline before containerisation. A
                            multi-stage Dockerfile separated the SDK build environment from
                            the ASP.NET runtime environment, avoiding the need to include
                            development tools in the final runtime image.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            This approach improved deployment consistency and demonstrated how
                            applications can be packaged with their runtime dependencies.
                            Local container testing confirmed that the application could
                            execute independently of the original development process.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            2. Container Registry and Image Management
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                            Azure Container Registry provided centralised storage for the
                            HelloWebApp container images. The repository contained three
                            verified image tags: v1, v2, and v3. These tags allowed different
                            application image versions to be identified and selected during
                            development and deployment.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            Image versioning is important in DevOps because it supports
                            traceability, controlled releases, and the ability to select a
                            previously published image when troubleshooting or preparing a
                            rollback. The registry configuration was also verified using Azure
                            CLI, including the Basic SKU, login server, and enabled
                            administrator account.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                            3. Azure Deployment and Verification
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                            HelloWebApp was deployed to Azure Container Instances in the
                            Australia East region. The deployment retrieved the container
                            image from Azure Container Registry and started the application
                            within a Linux container.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            The application was successfully accessed through the public Azure
                            FQDN using port 8080. This confirmed that the application was
                            accessible outside the local development environment and
                            demonstrated the complete deployment path from application source
                            code to a publicly accessible cloud-hosted service.
                        </p>

                        <p className="mt-3 leading-7 text-slate-600">
                            Azure Container Instances was appropriate for this assessment
                            because it provided a relatively simple container hosting solution
                            without requiring the configuration and maintenance of a virtual
                            machine or a Kubernetes cluster.
                        </p>
                    </div>
                </div>
            </section>

            {/* CHALLENGES AND TROUBLESHOOTING */}

            <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    Challenges and Troubleshooting
                </h2>

                <div>
                    <h3 className="text-lg font-semibold">
                        Docker, WSL and Azure CLI Integration
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                        During development, Docker commands were not initially available in
                        the Windows Git Bash environment. Further investigation also
                        identified a temporary Windows Subsystem for Linux service failure,
                        preventing normal access to the Ubuntu development environment.
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                        Troubleshooting involved inspecting Windows services, checking WSL
                        distribution status, and verifying Docker availability within
                        Ubuntu. After WSL functionality was restored, Docker Engine was
                        successfully verified using docker version and the existing local
                        images were inspected using docker image ls.
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                        An earlier Azure CLI registry operation also returned a
                        DOCKER_COMMAND_ERROR. This demonstrated the importance of
                        distinguishing between commands requiring a local Docker client and
                        commands that query Azure resources directly.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Container Image Versions</h3>

                    <p className="mt-2 leading-7 text-slate-600">
                        Multiple Docker image versions were created during development and
                        testing. Local image inspection confirmed the availability of
                        HelloWebApp versions v1, v2, and v3, while Azure Container Registry
                        verification confirmed the corresponding published repository tags.
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                        This highlighted the importance of maintaining clear image tags and
                        verifying the correct image reference before deployment. It also
                        demonstrated that local Docker images and images stored in a cloud
                        registry are separate resources that must be managed correctly.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">
                        Deployment Security Considerations
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                        The application was accessed through a public HTTP endpoint for
                        functional assessment testing. Although suitable for demonstrating
                        basic connectivity, this configuration would require additional
                        security controls before production use.
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                        Recommended production improvements include HTTPS termination,
                        restricted network access, secure registry authentication, and
                        appropriate monitoring. Managed identities and role-based access
                        control should be considered where supported to reduce dependence on
                        registry administrator credentials.
                    </p>
                </div>
            </section>

            {/* LESSONS LEARNED */}

            <section className="mt-12 space-y-5">
                <h2 className="text-2xl font-bold tracking-tight">Lessons Learned</h2>

                <p className="leading-7 text-slate-600">
                    This assessment strengthened my understanding of how application
                    development, Docker containerisation, container registries, and Azure
                    cloud infrastructure work together to deliver a functioning
                    application.
                </p>

                <p className="leading-7 text-slate-600">
                    One of the most important lessons was the value of verifying each
                    stage independently. Successful local compilation did not
                    automatically guarantee successful container execution, and successful
                    image creation did not guarantee cloud accessibility. Testing each
                    stage separately helped isolate problems and identify the appropriate
                    troubleshooting actions.
                </p>

                <p className="leading-7 text-slate-600">
                    Resolving the WSL and Docker environment issues also improved my
                    confidence in using command-line tools, inspecting system services,
                    and diagnosing problems across Windows and Linux environments.
                </p>

                <p className="leading-7 text-slate-600">
                    I also gained practical experience with container image versioning,
                    registry configuration, cloud deployment, and service verification.
                    These are important foundations for DevOps practices such as
                    continuous integration, continuous delivery, infrastructure
                    automation, and reliable application deployment.
                </p>

                <p className="leading-7 text-slate-600">
                    Finally, the assessment reinforced the importance of cloud security
                    and cost management. Resources should be monitored during testing and
                    removed when no longer required to avoid unnecessary charges.
                </p>
            </section>

            {/* TASK 2 CONCLUSION */}

            <section className="mt-12 space-y-5 border-t border-slate-200 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    Task 2 Conclusion
                </p>

                <h2 className="text-2xl font-bold tracking-tight">Conclusion</h2>

                <p className="leading-7 text-slate-600">
                    Task 2 successfully demonstrated the development, containerisation,
                    storage, and cloud deployment of HelloWebApp using ASP.NET Core,
                    Docker, Azure Container Registry, and Azure Container Instances.
                </p>

                <p className="leading-7 text-slate-600">
                    The application was verified locally, executed within Docker
                    containers, and accessed through a public Azure endpoint. Supporting
                    evidence documented the technical implementation, image versioning,
                    registry configuration, deployment verification, and troubleshooting
                    process.
                </p>

                <p className="leading-7 text-slate-600">
                    Overall, this task provided practical experience with an end-to-end
                    container deployment workflow and established a foundation for further
                    development in Cloud Engineering and DevOps, particularly in automated
                    deployments, secure infrastructure configuration, and cloud
                    application management.
                </p>
            </section>
        </main>
    );
}

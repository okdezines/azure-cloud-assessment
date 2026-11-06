"use client";

import { useEffect, useState } from "react";

type EvidenceCardProps = {
    figure: number;
    title: string;
    image: string;
    alt: string;
    caption: string;
    purpose: string;
    action: string;
    result: string;
    significance: string;
};

export default function EvidenceCard({
    figure,
    title,
    image,
    alt,
    caption,
    purpose,
    action,
    result,
    significance,
}: EvidenceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const getImageSrc = (src: string) => {
        const basePath =
            process.env.NODE_ENV === "production"
                ? "/azure-cloud-assessment"
                : "";

        return `${basePath}${src}`;
    };

    // Close the fullscreen image with the Escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div className="mt-14">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                    {/* Evidence explanation */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                            Primary Evidence &amp; Interpretation
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight">
                            {title}
                        </h3>

                        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                            <EvidenceText title="Purpose" text={purpose} />
                            <EvidenceText title="Action" text={action} />
                            <EvidenceText title="Result" text={result} />
                            <EvidenceText
                                title="Technical significance"
                                text={significance}
                            />
                        </div>
                    </div>

                    {/* Screenshot evidence */}
                    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            className="group relative block w-full cursor-zoom-in text-left"
                            aria-label={`Enlarge Figure ${figure}: ${alt}`}
                        >
                            <img
                                src={getImageSrc(image)}
                                alt={alt}
                                className="w-full transition duration-300 group-hover:scale-[1.01]"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/10">
                                <span className="rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                                    Click to enlarge
                                </span>
                            </div>
                        </button>

                        <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-500">
                            <span className="font-semibold text-slate-700">
                                Figure {figure} —{" "}
                            </span>
                            {caption}
                        </figcaption>
                    </figure>
                </div>
            </div>

            {/* Fullscreen image viewer */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Figure ${figure} fullscreen preview`}
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="fixed right-4 top-4 z-[10000] flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-950 shadow-lg transition hover:scale-105 sm:right-6 sm:top-6"
                        aria-label="Close fullscreen image"
                    >
                        ×
                    </button>

                    {/* Fullscreen image */}
                    <img
                        src={getImageSrc(image)}
                        alt={alt}
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[92vh] max-w-[96vw] object-contain shadow-2xl"
                    />

                    {/* Figure label */}
                    <div className="fixed bottom-4 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-full bg-black/70 px-5 py-2 text-center text-xs text-white backdrop-blur-sm sm:text-sm">
                        Figure {figure} — {title}
                    </div>
                </div>
            )}
        </>
    );
}

function EvidenceText({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div>
            <p className="font-semibold text-slate-950">
                {title}
            </p>
            <p>{text}</p>
        </div>
    );
}
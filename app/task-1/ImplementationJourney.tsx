"use client";

import { useState } from "react";

type JourneyItem = {
    figure: number;
    stage: string;
    title: string;
    description: string;
    image: string;
    alt: string;
    caption: string;
};

type ImplementationJourneyProps = {
    title?: string;
    description?: string;
    items: JourneyItem[];
};

export default function ImplementationJourney({
    title = "Implementation Journey",
    description = "Selected stages showing how the implementation progressed from initial configuration through to the completed solution.",
    items,
}: ImplementationJourneyProps) {
    const [selectedImage, setSelectedImage] =
        useState<JourneyItem | null>(null);

    const getImageSrc = (src: string) => {
        const basePath =
            process.env.NODE_ENV === "production"
                ? "/azure-cloud-assessment"
                : "";

        return `${basePath}${src}`;
    };

    return (
        <>
            <section className="mt-12">
                {/* Section heading */}
                <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                        Proof of process
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                        {title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                        {description}
                    </p>
                </div>

                {/* Journey cards */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {items.map((item, index) => (
                        <article
                            key={`${item.stage}-${item.title}`}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Image */}
                            <button
                                type="button"
                                onClick={() => setSelectedImage(item)}
                                className="block w-full cursor-zoom-in overflow-hidden bg-slate-100 text-left"
                                aria-label={`Enlarge Figure ${item.figure}: ${item.title}`}
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={getImageSrc(item.image)}
                                        alt={item.alt}
                                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </button>

                            {/* Card content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                        {item.stage}
                                    </p>

                                    <span className="text-xs font-medium text-slate-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h4 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
                                    {item.title}
                                </h4>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {item.description}
                                </p>

                                {/* Figure reference */}
                                <div className="mt-5 border-t border-slate-100 pt-4">
                                    <p className="text-xs leading-5 text-slate-500">
                                        <span className="font-bold text-slate-700">
                                            Figure {item.figure} —
                                        </span>{" "}
                                        {item.caption}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(item)}
                                    className="mt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                                >
                                    View evidence →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Image modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Figure ${selectedImage.figure}: ${selectedImage.title}`}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="flex items-start justify-between gap-6 border-b border-slate-200 px-5 py-4 md:px-6">
                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                                        {selectedImage.stage}
                                    </p>

                                    <span className="text-xs text-slate-300">•</span>

                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                        Figure {selectedImage.figure}
                                    </p>
                                </div>

                                <h4 className="mt-1 font-bold text-slate-950">
                                    {selectedImage.title}
                                </h4>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedImage(null)}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                                aria-label="Close evidence image"
                            >
                                ×
                            </button>
                        </div>

                        {/* Full evidence image */}
                        <div className="max-h-[75vh] overflow-auto bg-slate-100 p-3 md:p-5">
                            <img
                                src={getImageSrc(selectedImage.image)}
                                alt={selectedImage.alt}
                                className="mx-auto h-auto max-w-full rounded-lg"
                            />
                        </div>

                        {/* Modal caption */}
                        <div className="border-t border-slate-200 px-5 py-4 md:px-6">
                            <p className="text-sm font-medium leading-6 text-slate-700">
                                <span className="font-bold">
                                    Figure {selectedImage.figure} —
                                </span>{" "}
                                {selectedImage.caption}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {selectedImage.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
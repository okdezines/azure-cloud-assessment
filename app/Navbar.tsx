"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
    { name: "Home", href: "/", available: true },
    { name: "Task 1", href: "/task-1/", available: true },
    { name: "Task 2", href: "/task-2/", available: false },
    { name: "Task 3", href: "/task-3/", available: false },
    { name: "References", href: "/references/", available: true },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Prevent background scrolling while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href.replace(/\/$/, ""));
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
            <nav
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Brand */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xs font-black tracking-tight text-white shadow-sm transition group-hover:bg-blue-700">
                        AZ
                    </div>

                    <div className="leading-tight">
                        <p className="text-sm font-bold tracking-tight text-slate-950">
                            Azure Assessment
                        </p>

                        <p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
                            Cloud Engineering · L7
                        </p>
                    </div>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    {navigation.map((item) => {
                        if (!item.available) {
                            return (
                                <span
                                    key={item.name}
                                    className="cursor-not-allowed rounded-lg px-3 py-2 text-sm font-medium text-slate-400"
                                    title="Coming soon"
                                >
                                    {item.name}
                                </span>
                            );
                        }

                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${active
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop assessment badge */}
                <div className="hidden lg:block">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                        2026 Assessment
                    </span>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                >
                    <div className="relative h-5 w-5">
                        <span
                            className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""
                                }`}
                        />

                        <span
                            className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />

                        <span
                            className={`absolute left-0 top-[15px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-slate-200 bg-white transition-all duration-300 md:hidden ${isOpen
                    ? "max-h-[500px] border-t opacity-100"
                    : "max-h-0 border-t-0 opacity-0"
                    }`}
            >
                <div className="mx-auto max-w-6xl px-6 py-5">
                    <div className="space-y-1">
                        {navigation.map((item, index) => {
                            if (!item.available) {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-400"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-5 text-xs text-slate-300">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {item.name}
                                        </span>

                                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Soon
                                        </span>
                                    </div>
                                );
                            }

                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${active
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span
                                            className={`w-5 text-xs ${active ? "text-blue-500" : "text-slate-300"
                                                }`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {item.name}
                                    </span>

                                    {active && (
                                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile footer */}
                    <div className="mt-5 border-t border-slate-100 pt-5">
                        <div className="rounded-xl bg-slate-950 p-4 text-white">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                                Microsoft Azure
                            </p>

                            <p className="mt-1 text-sm font-semibold">
                                Cloud Engineering Assessment
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                Level 7 · 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark overlay behind mobile menu */}
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-x-0 bottom-0 top-16 -z-10 bg-slate-950/20 backdrop-blur-[1px] md:hidden"
                />
            )}
        </header>
    );
}

import { useState, useCallback, useEffect, useRef } from "react";

export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
};

type ProjectCarouselProps = {
    projects: Project[];
    visibleSide?: number;
};

export default function ProjectCarousel({
                                            projects,
                                            visibleSide = 2,
                                        }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const count = projects.length;
    const touchStartX = useRef<number | null>(null);

    const goTo = useCallback(
        (index: number) => {
            // wrap around so it loops both directions
            const next = ((index % count) + count) % count;
            setActiveIndex(next);
        },
        [count]
    );

    const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
    const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

    // keyboard support
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [next, prev]);

    // basic touch/swipe support
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) prev();
        if (delta < -50) next();
        touchStartX.current = null;
    };

    return (
        <div className="w-full">
            <div
                className="relative flex h-[420px] items-center justify-center overflow-hidden [perspective:1200px]"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {projects.map((project, i) => {
                    // shortest signed distance from active index, accounting for wraparound
                    let offset = i - activeIndex;
                    if (offset > count / 2) offset -= count;
                    if (offset < -count / 2) offset += count;

                    const isVisible = Math.abs(offset) <= visibleSide;
                    if (!isVisible) return null;

                    const isActive = offset === 0;
                    const translateX = offset * 220; // px spacing between cards
                    const scale = isActive ? 1 : 1 - Math.abs(offset) * 0.15;
                    const opacity = isActive ? 1 : 1 - Math.abs(offset) * 0.3;
                    const rotateY = offset * -15; // slight tilt away from center
                    const zIndex = 10 - Math.abs(offset);

                    return (
                        <button
                            key={project.id}
                            onClick={() => goTo(i)}
                            aria-label={`Show project: ${project.title}`}
                            className="absolute w-64 shrink-0 text-left transition-all duration-500 ease-out focus:outline-none"
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                opacity,
                                zIndex,
                                filter: isActive ? "none" : "blur(1px)",
                                pointerEvents: isActive ? "auto" : "auto",
                            }}
                        >
                            <div
                                className={`overflow-hidden rounded-2xl border bg-white shadow-lg dark:bg-neutral-900 ${
                                    isActive
                                        ? "border-neutral-300 shadow-2xl dark:border-neutral-700"
                                        : "border-neutral-200 dark:border-neutral-800"
                                }`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-40 w-full object-cover"
                                    draggable={false}
                                />
                                <div className="p-4">
                                    <h3 className="truncate font-semibold text-neutral-900 dark:text-neutral-100">
                                        {project.title}
                                    </h3>
                                    {isActive && (
                                        <p className="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center justify-center gap-6">
                <button
                    onClick={prev}
                    aria-label="Previous project"
                    className="rounded-full border border-neutral-300 p-2 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    ‹
                </button>

                <div className="flex gap-2">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => goTo(i)}
                            aria-label={`Go to ${p.title}`}
                            className={`h-2 w-2 rounded-full transition-all ${
                                i === activeIndex
                                    ? "w-5 bg-neutral-900 dark:bg-neutral-100"
                                    : "bg-neutral-300 dark:bg-neutral-700"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    aria-label="Next project"
                    className="rounded-full border border-neutral-300 p-2 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    ›
                </button>
            </div>
        </div>
    );
}
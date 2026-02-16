interface Props {
    counts: Record<number, number>;
}

export function RatingGraph({ counts }: Props) {
    const maxCount = Math.max(...Object.values(counts));
    const sortedRatings = Object.keys(counts)
        .map(Number)
        .sort((a, b) => a - b);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                    Rating_Distribution_Report
                </h3>
                <span className="text-[10px] text-muted-foreground font-mono uppercase">
                    Scaled_to_Max_{maxCount}
                </span>
            </div>

            <div className="flex items-end gap-2 md:gap-4 h-72 w-full bg-background/50 border border-border p-8 rounded-3xl relative group/graph">
                {sortedRatings.map((rating) => {
                    const percentage = (counts[rating] / maxCount) * 100;
                    return (
                        <div
                            key={rating}
                            className="group relative flex flex-col justify-end items-center flex-1 h-full transition-all duration-500 ease-in-out"
                        >
                            {/*  BAR */}
                            <div
                                style={{ height: `${percentage}%` }}
                                className="w-full bg-accent/10 border-t-2 border-accent rounded-t-sm transition-all duration-300 group-hover:bg-accent/30 group-hover:shadow-[0_0_15px_rgba(179,84,51,0.2)]"
                            />

                            <span className="text-[9px] text-muted-foreground mt-4 font-mono tracking-tighter transition-colors group-hover:text-primary">
                                {rating}
                            </span>

                            <div className="absolute bottom-[calc(percentage+30px)] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-1 group-hover:translate-y-0 z-30">
                                <div className="bg-card/90 border border-accent/40 px-2 py-1 rounded-md shadow-xl backdrop-blur-sm">
                                    <p className="text-[8px] text-accent/80 font-bold leading-none mb-0.5 uppercase tracking-widest">
                                        Solved
                                    </p>
                                    <p className="text-sm font-mono text-primary leading-none">
                                        {counts[rating]}
                                    </p>
                                </div>
                                <div className="w-px h-3 bg-accent/20 mx-auto mt-0" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

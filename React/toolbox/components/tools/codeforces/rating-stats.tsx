/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Props {
    results: any[];
}

export function RatingStats({ results }: Props) {
    const [filter, setFilter] = useState("");
    const grouped = results.reduce((acc: any, sub: any) => {
        const name = sub.problem.name.toLowerCase();
        const search = filter.toLowerCase();
        if (filter && !name.includes(search)) return acc;
        const rating = sub.problem.rating || 0;
        if (!acc[rating]) acc[rating] = [];
        acc[rating].push(sub);
        return acc;
    }, {});

    const sortedRatings = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => a - b);

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-baseline">
                    <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] break-words">
                        Solved_Problems_Inventory
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{results.length}</span>
                </div>
                
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
                    <Input
                        placeholder="Filter by name..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="h-10 pl-10 bg-background border-border text-xs text-primary placeholder:text-muted-foreground/30 focus-visible:ring-primary/30 rounded-xl transition-all"
                    ></Input>
                </div>
            </div>

            <Accordion type="multiple" className="w-full space-y-3">
                {sortedRatings.map((rating) => (
                    <AccordionItem
                        key={rating}
                        value={rating.toString()}
                        className="border-border bg-background/30 rounded-2xl px-4 transition-all hover:bg-background/50"
                    >
                        <AccordionTrigger className="hover:no-underline py-4">
                                                            <div className="flex justify-between w-full pr-4 items-center">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" />
                                                                <span className="text-primary/90 font-mono text-sm tracking-tight font-medium">
                                                                    {rating === 0 ? "UNRATED" : rating}
                                                                </span>
                                                            </div>
                                                            <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-[0.1em]">
                                                                {grouped[rating].length}_SOLVED
                                                            </span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="pb-6">
                                                        <div className="flex flex-wrap gap-2 pt-2">
                                                            {grouped[rating].map((submission: any, idx: number) => (
                                                                <a
                                                                    key={idx}
                                                                    href={`https://codeforces.com/contest/${submission.problem.contestId}/submission/${submission.id}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="transition-all hover:scale-[1.02] active:scale-95"
                                                                >
                                                                    <Badge
                                                                        variant="outline"
                                                                        className="border-border/50 bg-background/40 text-muted-foreground/80 hover:text-primary hover:border-primary/40 cursor-pointer font-sans text-[10px] py-1 px-2.5 rounded-lg transition-colors font-medium"
                                                                    >
                                                                        {submission.problem.name}
                                                                    </Badge>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

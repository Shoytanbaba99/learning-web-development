/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useMemo } from "react";
import { RatingStats } from "@/components/tools/codeforces/rating-stats";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { fetchUserSolvedProblems } from "@/lib/codeforces";
import Link from "next/link";
import { CodeforcesSkeleton } from "@/components/tools/codeforces/codeforces-skeleton";
import { RatingGraph } from "@/components/tools/codeforces/rating-graph";

export default function CodeforcesPage() {
    const [handle, setHandle] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const counts = useMemo(() => {
        const stats: Record<number, number> = {};
        results.forEach((sub: any) => {
            const rating = sub.problem.rating || 0;
            stats[rating] = (stats[rating] || 0) + 1;
        });
        return stats;
    }, [results]);

    const handleSearch = async () => {
        if (!handle) return;
        setLoading(true);
        try {
            const data = await fetchUserSolvedProblems(handle);
            setResults(data);
        } catch (error) {
            toast.error("Target identification failed. User not found.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen p-8 md:p-24 max-w-5xl mx-auto flex flex-col gap-12">
            <div className="flex items-center gap-4 text-sm text-[#706F6E]">
                <Link href="/" className="hover:text-[#E6C07B] transition-colors">
                    Home
                </Link>
                <span>/</span>
                <span className="text-[#b9986F]">Codeforces Investigation</span>
            </div>
            <div className="bg-[#1c1c1c] border border-[#272C31] p-8 rounded-4xl shadow-xl">
                <h2 className="text-2xl font-bold text-[#E6c07B] mb-6 uppercase tracking-widest italic">
                    Identify_Target
                </h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                    className="flex gap-4"
                >
                    <Input
                        placeholder="Enter Codeforces Handle..."
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        className="bg-[#0d0d0d] border-[#272c31] text-[#B9986F] placeholder:text-[#706F6E] focus-visible:ring-[#E6C07B]"
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                        className="bg-[#E6c07b] text-[#0d0d0d] hover:bg-[#d5805e] transition-all px-8 font-bold"
                    >
                        {loading ? (
                            "ANALYZING..."
                        ) : (
                            <>
                                <Search className="w-4 h-4 mr-2" /> ANALYZE
                            </>
                        )}
                    </Button>
                </form>
            </div>

            {loading && <CodeforcesSkeleton />}

            {!loading && results.length > 0 && (
                <div className="flex flex-col lg:flex-row gap-12 items-start animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="lg:w-3/5 w-full bg-[#1C1C1C] border border-[#272C31] p-8 rounded-4xl shadow-xl sticky top-8">
                        <RatingGraph counts={counts} />
                    </div>
                    <div className="lg:w-2/5 w-full bg-[#1C1C1C] border border-[#272C31] p-8 rounded-4xl shadow-xl">
                        <RatingStats results={results} />
                    </div>
                </div>
            )}
        </main>
    );
}

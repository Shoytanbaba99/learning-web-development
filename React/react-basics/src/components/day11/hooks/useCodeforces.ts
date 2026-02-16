import { useState, useEffect } from "react";

import type { ApiResponse, Problem } from "../types/codeforces";

export const useCodeforces = (handle: string) => {
    const [data, setData] = useState<Problem[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!handle) return;
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://codeforces.com/api/user.status?handle=${handle}`,
                );
                const result: ApiResponse = await response.json();
                if (result.status === "OK") {
                    const solvedProblemMap = new Map<string, Problem>();
                    result.result.forEach((sub) => {
                        if (sub.verdict === "OK") {
                            solvedProblemMap.set(sub.problem.name, sub.problem);
                        }
                    });
                    const uniqueProblems = Array.from(solvedProblemMap.values());
                    uniqueProblems.sort((a, b) => (a.rating || 0) - (b.rating || 0));
                    setData(uniqueProblems);
                } else {
                    setError(result.comment || "Failed to fetch data");
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Network error occurred");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [handle]);

    return { data, isLoading, error };
};

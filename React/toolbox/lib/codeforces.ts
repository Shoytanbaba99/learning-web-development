export async function fetchUserSolvedProblems(handle: string) {
    const url = `https://codeforces.com/api/user.status?handle=${handle}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== "OK") {
        throw new Error("Target not found on Codeforces.");
    }

    const solvedMap = new Map();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.result.forEach((submission: any) => {
        if (submission.verdict === "OK") {
            const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
            if (!solvedMap.has(problemId)) {
                solvedMap.set(problemId, submission);
            }
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Array.from(solvedMap.values());
}

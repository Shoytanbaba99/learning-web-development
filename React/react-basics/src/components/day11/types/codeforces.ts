export interface Problem {
    contestId?: number;
    index: string;
    name: string;
    rating?: number;
    tags: string[];
}

export interface Submission {
    id: number;
    contestId?: number;
    creationTimeSeconds: number;
    problem: Problem;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    author: any;
    programmingLanguage: string;
    verdict?: "OK" | "FAILED" | "WRONG_ANSWER" | "TIME_LIMIT_EXCEEDED" | string;
    passedTestCount: number;
}

export interface ApiResponse {
    status: "OK" | "Failed";
    result: Submission[];
    comment?: string;
}

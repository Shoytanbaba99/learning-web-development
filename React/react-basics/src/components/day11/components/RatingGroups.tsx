import type { Problem } from "../types/codeforces";

interface Props {
    problems: Problem[];
}

export const RatingGroups = ({ problems }: Props) => {
    const grouped = problems.reduce(
        (acc, p) => {
            const r = p.rating || 0;
            if (!acc[r]) acc[r] = [];
            acc[r].push(p);
            return acc;
        },
        {} as Record<number, Problem[]>,
    );
    const ratings = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => a - b);

    return (
        <div className="space-y-10 pb-20">
            {ratings.map((rating) => (
                <div
                    key={rating}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-500"
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                        {rating === 0 ? "Unrated Problems" : `Rating: ${rating}`}
                        <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                            {grouped[rating].length} solved
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grouped[rating].map((p) => (
                            <div
                                key={`${p.contestId}-${p.index}`}
                                className="group p-4 bg-gray-50 hover:bg-white hover:ring-2 hover:ring-blue-100 rounded-xl border border-gray-200 transition-all cursor-default"
                            >
                                <p className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                                    {p.name}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400 font-mono tracking-wider">
                                        {p.contestId}
                                        {p.index}
                                    </span>
                                    <div className="flex gap-1">
                                        {p.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500 uppercase font-bold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

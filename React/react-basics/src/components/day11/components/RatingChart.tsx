import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { Problem } from "../types/codeforces";

interface Props {
    problems: Problem[];
}

const getRatingColor = (rating: number) => {
    if (rating === 0) return "#9ca3af"; // Unrated
    if (rating < 1200) return "#808080"; // Newbie (Gray)
    if (rating < 1400) return "#008000"; // Pupil (Green)
    if (rating < 1600) return "#03a89e"; // Specialist (Cyan)
    if (rating < 1900) return "#0000ff"; // Expert (Blue)
    if (rating < 2100) return "#a0a"; // Candidate Master (Purple)
    if (rating < 2300) return "#ff8c00"; // Master (Orange)
    return "#ff0000"; // Grandmaster+ (Red)
};

export const RatingChart = ({ problems }: Props) => {
    // 1. Group and count
    const grouped = problems.reduce(
        (acc, p) => {
            const r = p.rating || 0;
            acc[r] = (acc[r] || 0) + 1;
            return acc;
        },
        {} as Record<number, number>,
    );

    const data = Object.entries(grouped)
        .map(([rating, count]) => ({
            rating: Number(rating),
            label: rating === "0" ? "Unrated" : rating,
            count,
        }))
        .sort((a, b) => a.rating - b.rating);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-8">Rating Distribution</h2>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="label"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#9ca3af" }}
                        />
                        <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: "#9ca3af" }}
                        />
                        <Tooltip
                            cursor={{ fill: "#f3f4f6" }}
                            contentStyle={{
                                borderRadius: "12px",
                                border: "none",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            }}
                        />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getRatingColor(entry.rating)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

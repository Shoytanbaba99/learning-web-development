import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { RatingGroups } from "./components/RatingGroups";
import { RatingChart } from "./components/RatingChart";
import { useCodeforces } from "./hooks/useCodeforces";

export const Day11 = () => {
    const [handle, setHandle] = useState("");
    const { data, isLoading, error } = useCodeforces(handle);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                    Visual Analytics
                </div>
                <h1 className="text-5xl font-black text-gray-900 mb-3 tracking-tight">
                    CodeForce<span className="text-blue-600">Stats</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                    A modern way to track your problem-solving journey on Codeforces.
                </p>
            </div>

            {/* Search Section */}
            <div className="w-full max-w-md mb-16 relative z-10">
                <SearchBar onSearch={(name) => setHandle(name)} />
                {handle && !isLoading && !error && data && (
                    <p className="text-center mt-4 text-sm text-gray-400">
                        Showing results for{" "}
                        <span className="font-bold text-gray-600">{handle}</span>
                    </p>
                )}
            </div>

            {/* Main Content Section */}
            <div className="w-full max-w-5xl">
                {isLoading && (
                    <div className="flex flex-col items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-100 border-b-blue-600"></div>
                        <p className="mt-6 text-gray-500 font-semibold animate-pulse">
                            Syncing with Codeforces...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Search Failed</h3>
                        <p className="text-gray-500">{error}</p>
                    </div>
                )}

                {data && (
                    <div className="animate-in fade-in duration-700">
                        {/* Summary Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">
                                    Total Solved
                                </p>
                                <p className="text-4xl font-black text-blue-600">{data.length}</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">
                                    Avg Rating
                                </p>
                                <p className="text-4xl font-black text-gray-800">
                                    {Math.round(
                                        data
                                            .filter((p) => p.rating)
                                            .reduce((acc, p) => acc + (p.rating || 0), 0) /
                                            data.filter((p) => p.rating).length,
                                    ) || 0}
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">
                                    Highest Rating
                                </p>
                                <p className="text-4xl font-black text-purple-600">
                                    {Math.max(...data.map((p) => p.rating || 0))}
                                </p>
                            </div>
                        </div>

                        <RatingChart problems={data} />

                        <RatingGroups problems={data} />
                    </div>
                )}

                {!handle && !isLoading && (
                    <div className="text-center py-20 opacity-20">
                        <p className="text-xl font-bold text-gray-900">
                            Search for a handle to begin
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}


"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h2 className="text-red-600 font-bold">Something went wrong!</h2>
            <p className="text-sm text-red-500 mb-4">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            ></button>
        </div>
    );
}

export default function Navigation({ canNext, hasNext, hasPrev, handleNext, handlePrev }) {
    return (
        <div>
            <div className="flex justify-between w-full mt-8">
                {hasPrev && (
                    <button
                        onClick={handlePrev}
                        className="text-gray-400 hover:text-white py-2 px-4 transition-colors"
                    >
                        Back
                    </button>
                )}

                <button
                    onClick={handleNext}
                    disabled={!canNext}
                    className={` font-semibold py-2 px-6 rounded-xl transition-colors ${
                        canNext
                            ? "bg-blue-500 hover:bg-blue-400 text-white"
                            : "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                    }`}
                >
                    {`${hasNext ? "Next" : "Finish"}`}
                </button>
            </div>
        </div>
    );
}

export default function Navigation({ canNext, hasNext, hasPrev, handleNext, handlePrev }) {
  return (
    <div>
      <div className="mt-8 flex w-full justify-between">
        {hasPrev && (
          <button
            onClick={handlePrev}
            className="px-4 py-2 text-gray-400 transition-colors hover:text-white"
          >
            Back
          </button>
        )}

        <button
          onClick={handleNext}
          disabled={!canNext}
          className={`rounded-xl px-6 py-2 font-semibold transition-colors ${
            canNext
              ? "bg-blue-500 text-white hover:bg-blue-400"
              : "cursor-not-allowed bg-gray-700 text-gray-500 opacity-50"
          }`}
        >
          {`${hasNext ? "Next" : "Finish"}`}
        </button>
      </div>
    </div>
  );
}

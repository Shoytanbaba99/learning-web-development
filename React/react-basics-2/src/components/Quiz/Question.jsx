export default function Question({ question, options, handleAns, selectedAnswer, correctAnswer }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-400 ">{question}</h2>
            <div className="flex flex-col gap-3 w-full">
                {options.map((opt) => {
                    let buttonStyle = "bg-gray-800 border-gray-700";
                    if (selectedAnswer === opt) {
                        buttonStyle = opt === correctAnswer ? "bg-green-500" : "bg-red-500";
                    } else if (opt === correctAnswer && selectedAnswer !== null) {
                        buttonStyle = "bg-green-500/50 border-green-500";
                    }
                    return (
                        <button
                            key={opt}
                            onClick={() => selectedAnswer === null && handleAns(opt)}
                            disabled={selectedAnswer !== null}
                            className={`w-full p-4 rounded-xl border transition-all ${buttonStyle}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default function AiResult({ score, total, onReset }) {
    const percentage = Math.round((score / total) * 100);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 p-10 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border-2 border-blue-500 animate-in fade-in zoom-in duration-500 max-w-sm w-full text-center">
            {/* Sparkling Trophy Icon */}
            <div className="text-6xl mb-4 animate-bounce">🏆</div>

            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-200 mb-2 uppercase tracking-tighter">
                JACKPOT!
            </h2>

            <p className="text-gray-400 font-medium mb-6">Your Final Score</p>

            {/* Score Circle */}
            <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-blue-500/30 mb-8">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin duration-1000"></div>
                <span className="text-5xl font-bold text-white">
                    {score}
                    <span className="text-xl text-blue-400">/{total}</span>
                </span>
            </div>

            <p className="text-2xl font-bold text-blue-400 mb-8">{percentage}% Accuracy</p>

            <button
                onClick={onReset}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 uppercase"
            >
                Play Again 🔄
            </button>
        </div>
    );
}

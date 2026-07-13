export default function AiResult({ score, total, onReset }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="animate-in fade-in zoom-in flex w-full max-w-sm flex-col items-center justify-center rounded-3xl border-2 border-blue-500 bg-gray-900 p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.3)] duration-500">
      {/* Sparkling Trophy Icon */}
      <div className="mb-4 animate-bounce text-6xl">🏆</div>
      <h2 className="mb-2 bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-200 bg-clip-text text-4xl font-black tracking-tighter text-transparent uppercase">
        JACKPOT!
      </h2>
      <p className="mb-6 font-medium text-gray-400">Your Final Score</p>
      {/* Score Circle */}
      <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue-500/30">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-500 border-t-transparent duration-1000"></div>
        <span className="text-5xl font-bold text-white">
          {score}
          <span className="text-xl text-blue-400">/{total}</span>
        </span>
      </div>
      <p className="mb-8 text-2xl font-bold text-blue-400">{percentage}% Accuracy</p>
      <button
        onClick={onReset}
        className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-blue-400 py-4 font-black text-white uppercase shadow-lg shadow-blue-500/40 transition-all hover:scale-105 hover:from-blue-500 hover:to-blue-300 active:scale-95"
      >
        Play Again 🔄
      </button>
    </div>
  );
}

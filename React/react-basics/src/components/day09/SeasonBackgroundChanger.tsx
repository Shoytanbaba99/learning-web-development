import { useState } from 'react';

interface SeasonButtonProps {
  label: string;
  onClick: () => void;
}

const SeasonButton = ({ label, onClick }: SeasonButtonProps) => (
  <button
    onClick={onClick}
    className="rounded-lg border border-white/30 bg-white/20 px-6 py-2 font-semibold shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/40"
  >
    {label}
  </button>
);

const seasonConfig: Record<string, string> = {
  Autumn: 'bg-[#d35400] text-white',
  Winter: 'bg-[#2c3e50] text-white',
  Spring: 'bg-[#27ae60] text-white',
  Summer: 'bg-[#f1c40f] text-white',
};

function SeasonBackgroundChanger() {
  const [season, setSeason] = useState<string>('Autumn');

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center gap-8 transition-colors duration-700 ${seasonConfig[season]}`}
    >
      <h1 className="text-5xl font-bold drop-shadow-md">
        It is currently {season}
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        <SeasonButton label="Autumn" onClick={() => setSeason('Autumn')} />
        <SeasonButton label="Winter" onClick={() => setSeason('Winter')} />
        <SeasonButton label="Spring" onClick={() => setSeason('Spring')} />
        <SeasonButton label="Summer" onClick={() => setSeason('Summer')} />
      </div>
    </div>
  );
}

export default SeasonBackgroundChanger;

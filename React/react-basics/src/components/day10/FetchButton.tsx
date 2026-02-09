import { Camera } from 'lucide-react';

interface FetchButtonProps {
  onClick: () => void;
}

export const FetchButton = ({ onClick }: FetchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-500 active:scale-95"
    >
      <Camera size={20}>Fetch New Cat</Camera>
    </button>
  );
};

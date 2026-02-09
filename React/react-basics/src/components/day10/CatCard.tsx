import { Camera } from 'lucide-react';
import type { CatCardProps } from './cat';

export const CatCard = ({ image, isLoading }: CatCardProps) => {
  return (
    <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-700">
      {isLoading ? (
        <div className="flex animate-pulse flex-col items-center">
          <Camera size={48} className="mb-2 text-gray-500" />
          <p className="text-gray-400">Summoning Cat...</p>
        </div>
      ) : (
        <img
          src={image}
          alt="A cute cat"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      )}
    </div>
  );
};

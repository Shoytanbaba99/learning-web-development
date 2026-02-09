import { useState, useEffect } from 'react';
import type { CatApiResponse } from './cat';

export const useCat = () => {
  const [catImage, setCatImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchCat = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?breed_id=abys'
      );
      const data: CatApiResponse[] = await response.json();
      if (data.length > 0) {
        setCatImage(data[0].url);
      }
    } catch (error) {
      console.error('Error fetching cat:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCat();
  }, []);

  return { catImage, isLoading, fetchCat };
};

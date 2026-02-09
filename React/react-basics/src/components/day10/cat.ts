export interface CatApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface CatCardProps {
  image: string;
  isLoading: boolean;
}

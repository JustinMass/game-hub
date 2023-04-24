import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: string;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

const useGames = (selectedGenere: Genre | null) => useData<Game>("/games", {params: { genres: selectedGenere?.id}}, [selectedGenere?.id]);

export default useGames;
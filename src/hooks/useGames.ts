import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

// export interface Platform {
//     id: string;
//     name: string;
//     slug: string;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

const useGames = (selectedGenere: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", {
  params: { 
    genres: selectedGenere?.id,
    platforms: selectedPlatform?.id
  }},
 [selectedGenere?.id, selectedPlatform?.id]);

export default useGames;
import { GameQuery } from "../App";
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

const useGames = ({genre, platform}: GameQuery) => useData<Game>("/games", {
  params: { 
    genres: genre?.id,
    platforms: platform?.id
  }},
 [genre?.id, platform?.id]);

export default useGames;
import axios from "axios";
import { MovieReponse, TvReponse } from "@/types/api/TmdbType";
import { TMDB_API_URL } from "@/helpers/constants/urls";

const instance = axios.create({
  baseURL: TMDB_API_URL,
  params: { api_key: process.env.VUE_APP_ROOT_API_KEY, language: "pt-BR" },
});

export const getMoviePopular = async (): Promise<MovieReponse> => {
  const response = await instance.get("movie/popular");

  return response.data;
};

export const getTvPopular = async (): Promise<TvReponse> => {
  const response = await instance.get("tv/popular");

  return response.data;
};

// export const getMovieUpcoming = async (): Promise<TmdbResponse> => {
//   const response = await instance.get("movie/upcoming");

//   return response.data;
// };

// export const getMovieTopRated = async (): Promise<TmdbResponse> => {
//   const response = await instance.get("movie/top_rated");

//   return response.data;
// };

// export const getMovieNowPlaying = async (): Promise<TmdbResponse> => {
//   const response = await instance.get("movie/now_playing");

//   return response.data;
// };

// tmdb/movie/609681?append_to_response=videos,credits,images,external_ids,release_dates,combined_credits&include_image_language=en&language
// tmdb/tv/1396?append_to_response=videos,credits,images,external_ids,release_dates,combined_credits&include_image_language=en&language=pt-BR

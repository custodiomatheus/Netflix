import axios from "axios";
import { TMDB_API_URL } from "@/helpers/constants/urls";
import { MovieReponse, TvReponse } from "@/types/api/TmdbType";
import { LocationQueryValue } from "vue-router";

const instance = axios.create({
  baseURL: TMDB_API_URL,
  params: { api_key: process.env.VUE_APP_ROOT_API_KEY, language: "pt-BR" },
});

export const getMoviePopular = async (): Promise<MovieReponse> => {
  const response = await instance.get("movie/popular");

  return response.data;
};

export const getMovieUpcoming = async (): Promise<MovieReponse> => {
  const response = await instance.get("movie/upcoming");

  return response.data;
};

export const getMovieTopRated = async (): Promise<MovieReponse> => {
  const response = await instance.get("movie/top_rated");

  return response.data;
};

export const getMovieNowPlaying = async (): Promise<MovieReponse> => {
  const response = await instance.get("movie/now_playing");

  return response.data;
};

export const getTvPopular = async (): Promise<TvReponse> => {
  const response = await instance.get("tv/popular");

  return response.data;
};

export const getTvTopRated = async (): Promise<TvReponse> => {
  const response = await instance.get("tv/top_rated");

  return response.data;
};

export const getTvAiringToday = async (): Promise<TvReponse> => {
  const response = await instance.get("tv/airing_today");

  return response.data;
};

interface getSearchMultiProps {
  query: LocationQueryValue | LocationQueryValue[];
  page: number;
}

export const getSearchMulti = async ({ query, page }: getSearchMultiProps): Promise<TvReponse | MovieReponse> => {
  const response = await instance.get(`search/multi?query=${query}+e+&page=${page}`);

  console.log(response.data);
  

  return response.data;
};

// tmdb/movie/609681?append_to_response=videos,credits,images,external_ids,release_dates,combined_credits&include_image_language=en&language
// tmdb/tv/1396?append_to_response=videos,credits,images,external_ids,release_dates,combined_credits&include_image_language=en&language=pt-BR

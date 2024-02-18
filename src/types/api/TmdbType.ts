import { Tv, Movie } from "@/types/TmdbType";

class TmdbResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[] | Tv[];

  constructor(tmdbResponse: TmdbResponse) {
    this.page = tmdbResponse.page;
    this.total_results = tmdbResponse.total_results;
    this.total_pages = tmdbResponse.total_pages;
    this.results = tmdbResponse.results;
  }

  public static create(tmdbResponse: TmdbResponse): TmdbResponse {
    return new TmdbResponse(tmdbResponse);
  }
}

export class MovieReponse extends TmdbResponse {
  results: Movie[];

  private constructor(tmdbResponse: MovieReponse) {
    super(tmdbResponse);

    this.results = tmdbResponse.results;
  }

  public static create(tmdbResponse: MovieReponse): MovieReponse {
    return new MovieReponse(tmdbResponse);
  }
}

export class TvReponse extends TmdbResponse {
  results: Tv[];

  private constructor(tmdbResponse: TvReponse) {
    super(tmdbResponse);

    this.results = tmdbResponse.results;
  }

  public static create(tmdbResponse: TvReponse): TvReponse {
    return new TvReponse(tmdbResponse);
  }
}

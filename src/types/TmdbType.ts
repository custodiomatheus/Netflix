export class Movie {
  id: string;
  title?: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  poster_path: string;

  private constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.backdrop_path = movie.backdrop_path;
    this.overview = movie.overview;
    this.vote_average = movie.vote_average;
    this.poster_path = movie.poster_path;
  }

  public static create(movie: Movie): Movie {
    return new Movie(movie);
  }
}

export class Tv {
  id: string;
  name?: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  poster_path: string;

  private constructor(tv: Tv) {
    this.id = tv.id;
    this.name = tv.name;
    this.backdrop_path = tv.backdrop_path;
    this.overview = tv.overview;
    this.vote_average = tv.vote_average;
    this.poster_path = tv.poster_path;
  }

  public static create(tv: Tv): Tv {
    return new Tv(tv);
  }
}

export class Trending {
  id: string;
  title?: string;
  name?: string;
  backdrop_path: string;
  overview: string;
  release_date?: number;
  first_air_date?: number;
  vote_average: number;

  private constructor(trending: Trending) {
    this.id = trending.id;
    this.title = trending.title;
    this.name = trending.name;
    this.backdrop_path = trending.backdrop_path;
    this.overview = trending.overview;
    this.release_date = trending.release_date;
    this.first_air_date = trending.first_air_date;
    this.vote_average = trending.vote_average;
  }

  public static create(trending: Trending): Trending {
    return new Trending(trending);
  }
}

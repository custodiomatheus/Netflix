import axios from "axios";

const find = async (uri: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${uri}`);
  return response.data.results;
};

interface SeriesGenres {
  title: string;
  genres: string;
  items: any;
}

export default {
  getHomeList: async (): Promise<SeriesGenres[]> => {
    return [
      {
        title: "Em Alta",
        genres: "top_rated",
        items: await find(
          `movie/top_rated?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },

      {
        title: "Originais netflix",
        genres: "originals",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&with_network=213&language=pt-BR`
        ),
      },

      {
        title: "Recomendados",
        genres: "trending",
        items: await find(
          `trending/all/week?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },

      {
        title: "Ficção",
        genres: "fiction",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=10765&language=pt-BR`
        ),
      },

      {
        title: "Ação",
        genres: "action",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=10759&language=pt-BR`
        ),
      },
    ];
  },
  getMoviesList: async (): Promise<SeriesGenres[]> => {
    return [
      {
        title: "Em Alta",
        genres: "top_rated",
        items: await find(
          `movie/top_rated?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },
      {
        title: "Originais netflix",
        genres: "originals",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&with_network=213&language=pt-BR`
        ),
      },
      {
        title: "Ação",
        genres: "action",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=28&language=pt-BR`
        ),
      },
      {
        title: "Comédia",
        genres: "comedy",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=35&language=pt-BR`
        ),
      },
      {
        title: "Terror",
        genres: "horror",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=27&language=pt-BR`
        ),
      },
      {
        title: "Documentário",
        genres: "documentary",
        items: await find(
          `discover/movie?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=99&language=pt-BR`
        ),
      },
    ];
  },
  getSeriesList: async (): Promise<SeriesGenres[]> => {
    return [
      {
        title: "Em Alta",
        genres: "top_rated",
        items: await find(
          `tv/top_rated?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },
      {
        title: "Originais netflix",
        genres: "originals",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&with_network=213&language=pt-BR`
        ),
      },
      {
        title: "Ação",
        genres: "action",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=28&language=pt-BR`
        ),
      },
      {
        title: "Comédia",
        genres: "comedy",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=35&language=pt-BR`
        ),
      },
      {
        title: "Terror",
        genres: "horror",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=27&language=pt-BR`
        ),
      },
      {
        title: "Documentário",
        genres: "documentary",
        items: await find(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=99&language=pt-BR`
        ),
      },
    ];
  },
};

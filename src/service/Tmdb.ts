import axios from "axios";

const findSeries = async (uri: string) => {
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
        items: await findSeries(
          `movie/top_rated?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },

      {
        title: "Originais netflix",
        genres: "originals",
        items: await findSeries(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&with_network=213&language=pt-BR`
        ),
      },

      {
        title: "Recomendados",
        genres: "trending",
        items: await findSeries(
          `trending/all/week?api_key=${process.env.VUE_APP_ROOT_API_KEY}&language=pt-BR`
        ),
      },

      {
        title: "Ficção",
        genres: "fiction",
        items: await findSeries(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=10765&language=pt-BR`
        ),
      },

      {
        title: "Ação",
        genres: "action",
        items: await findSeries(
          `discover/tv?api_key=${process.env.VUE_APP_ROOT_API_KEY}&without_genres=10759&language=pt-BR`
        ),
      },
    ];
  },
};

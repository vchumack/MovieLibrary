import {
  MovieService
} from './movie-api-service';
import filmCardsMarkup from './film-cards-markup';
import renderPaginatorMarkup from './paginator-markup';
import getSpinner from './loaderSpinner';

const movieService = new MovieService();

renderMarkupTrendMovies();

async function renderMarkupTrendMovies() {
  try {
    const movies = await movieService.getTrendMovies();
    filmCardsMarkup(movies.results);

    renderPaginatorMarkup(movies.total_results, async (eventData) => {
      try {
        const movies = await movieService.getTrendMovies(eventData.page);
        filmCardsMarkup(movies.results);
      } catch (err) {
        console.log(err);
      }
    })
  } catch (error) {
    console.log(error);
  }
}

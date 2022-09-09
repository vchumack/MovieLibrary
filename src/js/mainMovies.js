import {
  MovieService
} from './movie-api-service';
import filmCardsMarkup from './film-cards-markup';
import renderPaginatorMarkup from './paginator-markup';
import getSpinner from './loaderSpinner';
import { refs } from './refs';

const movieService = new MovieService();

renderMarkupTrendMovies();

export async function renderMarkupTrendMovies() {
  const spinner = getSpinner();
  try {
    refs.filmsUl.append(spinner);
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
  } finally {
    spinner.remove()
  };
}

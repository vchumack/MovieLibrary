import { MovieService } from './movie-api-service';
import { refs } from './refs';
import filmCardsMarkup from './film-cards-markup';

const movieService = new MovieService();

renderMarkupTrendMovies();

async function renderMarkupTrendMovies() {
	try {
		const movies = await movieService.getTrendMovies();
		filmCardsMarkup(movies.results);
	} catch (error) {
		console.log(error);
	}
}

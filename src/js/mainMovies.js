import { MovieApiService } from './movie-api-service';
import { refs } from './refs';
import filmCardsMarkup from './film-cards-markup';

const newMovieApiService = new MovieApiService();

renderMarkupTrendMovies();

async function renderMarkupTrendMovies() {
	try {
		const movies = await newMovieApiService.fetchTrendMovies();
		filmCardsMarkup(movies.data.results);
	} catch (error) {
		console.log(error);
	}
}

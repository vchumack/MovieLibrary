import { refs } from './js/refs';
import { MovieApiService } from './js/movie-api-service';
import filmCardsMarkup from './js/film-cards-markup';
import './js/paginator-markup';

const movieApiService = new MovieApiService;

movieApiService.fetchCards().then(films => renderFilmCards(films.results))


console.log(movieApiService);
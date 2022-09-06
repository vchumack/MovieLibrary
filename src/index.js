import {
  refs
} from './js/refs';
import './js/paginator-markup';
import filmCardsMarkup from './js/film-cards-markup'
import {
  MovieApiService
} from './js/movie-api-service'

const movieApiService = new MovieApiService;

movieApiService.fetchCards().then(filmsData => renderFilmCards(filmsData.results))

function renderFilmCards(films) {
  refs.filmsContainer.innerHTML = filmCardsMarkup(films)
}
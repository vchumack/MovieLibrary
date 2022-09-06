import { refs } from './js/refs';
import './js/paginator-markup';
import './js/header';;import './js/modal-fetch'
import filmCardsMarkup from './js/film-cards-markup'
import MovieApiService from './js/movie-api-service'

const movieApiService = new MovieApiService;

movieApiService.fetchCards().then(films => renderFilmCards(films.results))

function renderFilmCards(films) {
  refs.filmsContainer.innerHTML = filmCardsMarkup(films)
}



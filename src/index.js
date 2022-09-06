import {
  refs
} from './js/refs';
import './js/paginator-markup';
import filmCardsMarkup from './js/film-cards-markup'
import MovieApiService from './js/movie-api-service'

const movieApiService = new MovieApiService;

movieApiService.fetchFilms().then(renderFilmCards)

function renderFilmCards(films) {
  refs.filmsContainer.innerHTML = filmCardsMarkup(films)
}
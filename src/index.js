import filmCardsMarkup from './js/film-cards-markup'
import MovieApiService from './js/movie-api-service'

const movieApiService = new MovieApiService;
const refs = {
  filmsContainer: document.querySelector('.js-films-container')
}

renderFilmCards()

async function renderFilmCards() {
  const films = await movieApiService.fetchCards()
  refs.filmsContainer.innerHTML = filmCardsMarkup(films)
}
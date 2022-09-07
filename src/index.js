import { refs } from './js/refs';
import './js/header';
import { MovieApiService } from './js/movie-api-service';
import filmCardsMarkup from './js/film-cards-markup';
import './js/paginator-markup';
import './js/modal-fetch';
import './js/modal-window';

const movieApiService = new MovieApiService();

movieApiService.fetchCards().then(films => {
	filmCardsMarkup(films.results);
	setTimeout(() => {
		refs.filmsItem.addEventListener('click', onClickOpen);
	}, 2000);
});

console.log(movieApiService);
function onClickOpen(e) {
	refs.modal.classList.remove('is-hidden');
}

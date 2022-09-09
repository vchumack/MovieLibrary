import { refs } from './refs';
import { getLocalStorageUser } from './googleAuth';
import filmCardsMarkup from './film-cards-markup';
import { MovieService } from './movie-api-service';
import { async } from '@firebase/util';

const movieService = new MovieService();

export async function onBtnWatchedClick() {
	const getLocalWatched = getLocalStorageUser('LOCAL_WATCHED');
	const dataMovies = [];

	if (getLocalWatched) {
		for (const elem of getLocalWatched) {
			const getFetch = await movieService.getMovieByID(elem);
			dataMovies.push(getFetch[0]);
		}
		refs.paginatorBox.innerHTML = '';
		filmCardsMarkup(dataMovies);
	}
}

export async function onBtnQueueClick() {
	const getLocalQueue = getLocalStorageUser('LOCAL_QUEUE');
	const dataMovies = [];

	if (getLocalQueue) {
		for (const elem of getLocalQueue) {
			const getFetch = await movieService.getMovieByID(elem);
			dataMovies.push(getFetch[0]);
		}
		refs.paginatorBox.innerHTML = '';
		filmCardsMarkup(dataMovies);
	}
}

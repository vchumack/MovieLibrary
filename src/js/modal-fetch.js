import { refs } from './refs';
import { MovieService } from './movie-api-service';
import onKeyClose from './modal-window';
const LOCAL_WATCHED = [];
const LOCAL_QUEUE = [];

const movieService = new MovieService();

export function onModalOpen(event) {
	refs.modal.classList.remove('is-hidden');
	refs.body.classList.add('stop-scroll');
	refs.modal.addEventListener('keydown', onKeyClose);
	const filmId = event.target.closest('li').id;
	console.log(filmId);

	movieService.searchId = event.target.closest('li').id;
	onIdSearch(filmId);
}

async function onIdSearch(idParams) {
	try {
		const apiResult = await movieService.getMovieByID(idParams);
		modalMarkup(apiResult);
		
	} catch (error) {
		console.log(error);
	}
}

async function onAddToWatched(e) {
	try {
		const addToWatchBtn = document
		.querySelector('.modal__button--watched');
		const filmIdForLocal = e.target.closest('button').id;
		LOCAL_WATCHED.push(filmIdForLocal);
		setLocalWatched();
		addToWatchBtn.disabled = true;

	} catch (error) {
		console.log(error)
	}
	
}

function onAddToQueue(e) {
	try {
		const addToQueue = document
		.querySelector('.modal__button--queue');
		const filmIdForLocal = e.target.closest('button').id;
		LOCAL_QUEUE.push(filmIdForLocal);
		setLocalQueue();
		addToQueue.disabled = true;
	} catch (error) {
		console.log(error);
	}
}

function setLocalWatched() {
	localStorage.setItem('LOCAL_WATCHED', JSON.stringify(LOCAL_WATCHED));
}

function setLocalQueue() {
	localStorage.setItem('LOCAL_QUEUE', JSON.stringify(LOCAL_QUEUE));
}

function modalMarkup(film) {
	const items = film.map(
		({
			genreNames,
			title,
			original_title,
			vote_average,
			vote_count,
			poster_path,
			id,
			overview,
			popularity,
		}) => {
			const imageSrc = poster_path
				? `https://image.tmdb.org/t/p/w500/${poster_path}`
				: 'https://via.placeholder.com/395x574';
			return `
        <img
				src=${imageSrc}
				alt="${title}"
				width="240"
				height="357"
				class="modal__img"
				id=${id}/>

			<div class="modal__details">
				<h2 class="modal__film-name">${title} </h2>

				<div class="modal__ratings--wrapper">
					<div class="modal__ratings--key">
						<p>Vote / Votes</p>
						<p>Popularity</p>
						<p>Original Title</p>
						<p>Genre</p>
					</div>
					<div class="modal__ratings--value">
						<p>
							<span class="modal__vote">${vote_average}</span> /
							<span class="modal__votes">${vote_count}</span>
						</p>
						<p>${popularity}</p>
						<p class="modal__original-title">${original_title}</p>
						<p>${genreNames}</p>
					</div>
				</div>
				<h3 class="modal__about">about</h3>
				<p class="modal__meta">${overview}</p>
				<div class="modal__button--wrapper">
					<button
						type="button"
						data-add-to-watched
						class="modal__button--watched"
						id=${id}
						>
						ADD TO WATCHED
					</button>
					<button
						type="button"
						data-add-to-queue
						class="modal__button--queue"
						id=${id}
						>
						ADD TO QUEUE
					</button>
				</div>
			</div>`;
		}
	);
	refs.modalWrapper.innerHTML = items.join('');
	document
		.querySelector('.modal__button--watched')
		.addEventListener('click', onAddToWatched);
	document
		.querySelector('.modal__button--queue')
		.addEventListener('click', onAddToQueue);
}

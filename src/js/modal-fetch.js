import { refs } from './refs';
import { MovieService } from './movie-api-service'
import './modal-window'

const movieService = new MovieService ();

export function onModalOpen (event) {
	//!_______________не менять____________________
	refs.modal.classList.remove('is-hidden');
	refs.body.classList.add('stop-scroll');
	modal.addEventListener('keydown', onKeyClose);
	//!_______________не менять____________________
	
	const filmId = event.target.closest('li').id;
	console.log(filmId);
	movieService.searchId = event.target.closest('li').id;
	console.log(onIdSearch(event.target.closest('li').id));
}

async function onIdSearch(idParams) {
	try {
		const apiResult = await movieService.getMovieById(idParams);
    console.log(apiResult.results)
		modalMarkup(apiResult.results);
	} catch (error) {
		console.log(error);
	}
}

function modalMarkup(film) {
  const items = film.map(
    ({ genreNames, title, original_title, vote_average, vote_count, backdrop_path, id, overview, popularity }) => {
      const imageSrc = backdrop_path
        ? `${backdrop_path}`
        : 'https://via.placeholder.com/395x574';
      return `
        <img
				src=${imageSrc}
				alt="${title}"
				width="240"
				height="357"
				class="modal__img"
        ${id}/>

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
					>
						ADD TO WATCHED
					</button>
					<button type="button" data-add-to-queue class="modal__button--queue">
						ADD TO QUEUE
					</button>
				</div>
			</div>`;

    }
  );
  refs.modalWrapper.innerHTML = items.join('');
};
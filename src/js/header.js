import debounce from 'lodash.debounce';
// import { initializeApp } from 'firebase';
// import { GoogleAuthProvider } from 'firebase/auth';
import { MovieService } from './movie-api-service';
import filmCardsMarkup from './film-cards-markup';
import { refs } from './refs';

const DEBOUNCE_DELAY = 500;

const headerDivBox = document.querySelector('.js-box');
onRenderHeaderInput();
const headerLinkLibrary = document.querySelector('#library');
const headerLinkHome = document.querySelector('#home');
const header = document.querySelector('header');
const input = document.querySelector('.header__input');

headerLinkLibrary.addEventListener('click', onLinkLibraryClick);
input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

const movieService = new MovieService();
//авторизация
// const provider = new GoogleAuthProvider();

function onLinkLibraryClick(e) {
	e.preventDefault();
	onClearHeaderInput();
	onRenderHeaderBtn();
	header.classList.add('header--bgc');

	headerLinkLibrary.classList.add('nav-list__link--active');
	headerLinkHome.classList.remove('nav-list__link--active');
}

function onInputChange(e) {
	e.preventDefault();
	if (e.target.value === 0) {
		return;
	}
	movieService.search = e.target.value;

	console.log(e.target.value);

	onSearchQuery(e.target.value);
}

const btnWatched = document.querySelector('.btn-watched');

function onRenderHeaderInput() {
	headerDivBox.innerHTML = `<label class="header__label">
            <input class="header__input" type="text" name="movieSearch" placeholder="Movie search">
            <span class="img__search"/>
         </label>`;
}

function onClearHeaderInput() {
	headerDivBox.innerHTML = '';
}

function onRenderHeaderBtn() {
	headerDivBox.innerHTML = `<div class="js-box--padding"><button class="btn-watched btn-active" type="button">Watched</button>
         <button class="btn-queue" type="button">queue</button></div>`;
}

async function onSearchQuery(searchParams) {
	try {
		const apiResult = await movieService.getMovieBySearch(searchParams);
		if (apiResult.results.length === 0) {
			refs.filmsUl.innerHTML = '';
			onUnsuccessfulSearch();
			return;
		}
		filmCardsMarkup(apiResult.results);
	} catch (error) {
		console.log(error);
	}
}

function onUnsuccessfulSearch() {
	console.log('Unfortunately, your search returned no results.');
	refs.filmsUl.innerHTML = `<p class="filmsText--unsuccess">Unfortunately, your search returned no results</p>`;
}
// btnWatched.addEventListener('click', onBtnWatchedClick);

// function onBtnWatchedClick() {
// 	btnWatched.classList.add('btn-active');
// }

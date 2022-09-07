import debounce from 'lodash.debounce';
// import { initializeApp } from 'firebase';
// import { GoogleAuthProvider } from 'firebase/auth';
import { MovieService } from './movie-api-service';
import filmCardsMarkup from './film-cards-markup';
import { refs } from './refs';

const headerDivBox = document.querySelector('.js-box');
onRenderHeaderInput();
const headerLinkLibrary = document.querySelector('#library');
const headerLinkHome = document.querySelector('#home');
const header = document.querySelector('header');
const form = document.querySelector('#search-form');

headerLinkLibrary.addEventListener('click', onLinkLibraryClick);
form.addEventListener('submit', onFormSubmit);

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

function onFormSubmit(e) {
	e.preventDefault();

	movieService.search = e.currentTarget.elements.movieSearch.value;

	onSearchQuery(e.currentTarget.elements.movieSearch.value);
}

function onRenderHeaderInput() {
	headerDivBox.innerHTML = `<form class="search-form" id="search-form">
	<label class="header__label">
            <input class="header__input" type="text" name="movieSearch" placeholder="Movie search">
            <button type="submit" class="header__submit"></button>
         </label>
			</form>`;
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

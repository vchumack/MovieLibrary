// import debounce from 'lodash.debounce';

// const DEBOUNCE_DELAY = 500;

const headerDivBox = document.querySelector('.js-box');
onRenderHeaderInput();
const headerLinkLibrary = document.querySelector('#library');
const headerLinkHome = document.querySelector('#home');
const header = document.querySelector('header');
const input = document.querySelector('.header__input');

headerLinkLibrary.addEventListener('click', onLinkLibraryClick);
// input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

// const newApiMovies = new ApiMovies();

function onLinkLibraryClick(e) {
	e.preventDefault();
	onClearHeaderInput();
	onRenderHeaderBtn();
	header.classList.add('header--bgc');

	headerLinkLibrary.classList.add('nav-list__link--active');
	headerLinkHome.classList.remove('nav-list__link--active');
}

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
	headerDivBox.innerHTML = `<div class="js-box--padding"><button class="btn-watched" type="button">Watched</button>
         <button class="btn-queue" type="button">queue</button></div>`;
}

// function onInputChange(e) {
// 	newApiMovies.search = e.target.value;
// }

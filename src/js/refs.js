export const refs = {
	body: document.querySelector('body'),
	paginatorDiv: document.querySelector('.paginator'),
	decrementBtn: document.querySelector('#btnBack'),
	incrementBtn: document.querySelector('#btnForward'),
	filmsContainer: document.querySelector('.js-films-container'),
	filmsUl: document.querySelector('.films'),
	filmsItem: document.querySelector('.films__item'),
	modal: document.querySelector('[data-modal]'),
};
setTimeout(() => {
	console.log('123412342134',refs.filmsItem);
}, 2000);

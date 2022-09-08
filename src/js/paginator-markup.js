import { refs } from './refs';
import { MovieApiService } from './movie-api-service';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const tuiBtns = () => {
	if (window.innerWidth < 768) {
		return 3;
	} else {
		return 5;
	}
};
const container = document.getElementById('pagination');
const options = {
	totalItems: 500,
	itemsPerPage: 20,
	visiblePages: tuiBtns(),
	page: 1,
	centerAlign: true,
	firstItemClassName: 'tui-first-child',
	lastItemClassName: 'tui-last-child',
	template: {
		page: '<a href="#" class="tui-page-btn">{{page}}</a>',
		currentPage:
			'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
		moveButton:
			'<a href="#" class="tui-page-btn tui-{{type}}">' +
			'<span class="tui-ico-{{type}}">{{type}}</span>' +
			'</a>',
		disabledMoveButton:
			'<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
			'<span class="tui-ico-{{type}}">{{type}}</span>' +
			'</span>',
		moreButton:
			'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
			'<span class="tui-ico-ellip">...</span>' +
			'</a>',
	},
};

const pagination = new Pagination(container, options);
pagination.on('beforeMove', evt => {
	const { page } = evt;
	const result = ajax.call({ page });

	if (result) {
		pagination.movePageTo(page);
	} else {
		return false;
	}
});

pagination.on('afterMove', ({ page }) => console.log(page));

console.log(refs.paginator);
// const container = document.getElementById('pagination');

// var pagination2 = new tui.Pagination(document.getElementById('pagination2'), {
// 	totalItems: 500,
// 	itemsPerPage: 20,
// 	visiblePages: 5,
// 	centerAlign: true,
// });

// const movieApiService1 = new MovieApiService();

// movieApiService1.fetchCards().then(({ total_pages, page }) => {
// 	const btnResult = [];

// 	for (let i = 1; i <= total_pages; i += 1) {
// 		console.log(i);
// 		function active() {
// 			if (i === page) {
// 				return 'paginator__page--active';
// 			}
// 			return '';
// 		}
// 		btnResult.push(
// 			`<button type="button" id="${i}" class="paginator__page ${active()}">${i}</button>`
// 		);
// 	}
// 	console.log(btnResult.join(''));

// 	// (r.total_pages).map((el) => { return `<button type='button>${el.page}</button>'` });
// 	refs.decrementBtn.insertAdjacentHTML('afterend', btnResult.join(''));
// });

// refs.decrementBtn.addEventListener('click', onBtnBack);
// refs.incrementBtn.addEventListener('click', onBtnForward);

// function onBtnBack() {
// 	console.log('hi - ');
// 	movieApiService1.decrementPage();
// }

// function onBtnForward() {
// 	console.log('gi +');
// 	movieApiService1.incrementPage();
// }
// console.log(refs.decrementBtn);

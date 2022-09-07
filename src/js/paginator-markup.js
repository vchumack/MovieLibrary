import { refs } from './refs';
import { MovieApiService } from './movie-api-service';
// import Pagination from 'tui-pagination';

// const container = document.getElementById('pagination');

// var pagination2 = new tui.Pagination(document.getElementById('pagination2'), {
// 	totalItems: 500,
// 	itemsPerPage: 20,
// 	visiblePages: 5,
// 	centerAlign: true,
// });

const movieApiService1 = new MovieApiService();

movieApiService1.fetchCards().then(({ total_pages, page }) => {
	const btnResult = [];

	for (let i = 1; i <= total_pages; i += 1) {
		console.log(i);
		function active() {
			if (i === page) {
				return 'paginator__page--active';
			}
			return '';
		}
		btnResult.push(
			`<button type="button" id="${i}" class="paginator__page ${active()}">${i}</button>`
		);
	}
	console.log(btnResult.join(''));

	// (r.total_pages).map((el) => { return `<button type='button>${el.page}</button>'` });
	refs.decrementBtn.insertAdjacentHTML('afterend', btnResult.join(''));
});

refs.decrementBtn.addEventListener('click', onBtnBack);
refs.incrementBtn.addEventListener('click', onBtnForward);

function onBtnBack() {
	console.log('hi - ');
	movieApiService1.decrementPage();
}

function onBtnForward() {
	console.log('gi +');
	movieApiService1.incrementPage();
}
console.log(refs.decrementBtn);

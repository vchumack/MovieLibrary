import { refs } from './refs';

API_KEY = '407d4e26fe6158c959ba633b835fa721';
class CardApiService {
	constructor() {
		this.itemToSearch = '';
		this.page = 1;
	}

	fetchCards() {
		return fetch(
			// https://api.themoviedb.org/3/movie/566574?api_key=407d4e26fe6158c959ba633b835fa721
			`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=sherlock holmes`
		).then(r => {
			if (!r.ok) {
				throw new Error(r.status);
			}
			return r.json();
		});
		// .then(data => {
		// 	console.log(data);
		// 	return data;
		// });
	}

	incrementPage() {
		this.page += 1;
	}
	decrementPage() {
		this.page -= 1;
	}
	resetPage() {
		this.page = 1;
	}
	get search() {
		return this.itemToSearch;
	}

	set search(newSearch) {
		this.itemToSearch = newSearch;
	}
}

const cardApiService = new CardApiService();

cardApiService.fetchCards().then(({ total_pages, page }) => {
	const btnResult = [];

	for (let i = 1; i <= total_pages; i += 1) {
		console.log(i);
		function active() {
			if (i === page) {
			return 'paginator__page--active';
			}
			return ''
		};
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
	cardApiService.decrementPage();
	console.log('hi - ');
}

function onBtnForward() {
	cardApiService.incrementPage();
	console.log('gi +');
}
console.log(refs.decrementBtn);

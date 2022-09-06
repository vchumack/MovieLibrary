API_KEY = '407d4e26fe6158c959ba633b835fa721';

export class MovieApiService {
	constructor() {
		this.itemToSearch = 'thief';
		this.page = 1;
		const outerThis = this;
		new Promise((resolve, reject) => {
			setTimeout(() => {
				outerThis._genres = 5;
			}, 2000);
		});
	}

	_baseUrl = 'https:api.themoviedb.org';
	_genres = {};
	fetchCards() {
		return fetch(
			`${this._baseUrl}/3/search/movie?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`
		).then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		});
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

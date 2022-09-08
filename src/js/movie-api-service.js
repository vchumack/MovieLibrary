import axios from 'axios';

const API_KEY = '407d4e26fe6158c959ba633b835fa721';

export class MovieApiService {
	constructor() {
		this.itemToSearch = '';
    this.idToSearch = null;
		this.page = 1;
	}

	_baseUrl = 'https://api.themoviedb.org';

	fetchGenres() {
		return axios.get(
			`${this._baseUrl}/3/genre/movie/list?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`
		);
	}
	fetchMoviesBySearch() {
		return axios.get(
			`${this._baseUrl}/3/search/movie?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`
		);
	}

	fetchTrendMovies() {
		return axios.get(
			`${this._baseUrl}/3/trending/movie/day?api_key=${API_KEY}`
		);
	}

	fetchMovieByID() {
		return axios.get(`${this._baseUrl}/3/movie/${this.idToSearch}?api_key=${API_KEY}`);
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
		// console.log(this.itemToSearch);
		return (this.itemToSearch = newSearch);
	}

  get searchId(){
    return this.idToSearch
  }

  set searchId(newId){
    return (this.idToSearch = newId)
  }
}

export class MovieService {
	#MovieApiService = new MovieApiService();
	constructor() {
		this._getGenres();
	}

	_genres = {};
	async _getGenres() {
		const {
			data: { genres },
		} = await this.#MovieApiService.fetchGenres();
		console.log(genres);
		this._genres = genres.reduce(
			(acc, { id, name }) => ({ ...acc, [id]: name }),
			{}
		);
	}
	_transformFilms(filmsData) {
		const transformedFilms = filmsData.results.map(film => {
			const genreNames = film.genre_ids.reduce((a, genreId) => {
				const genreName = this._genres[genreId];
				if (genreName !== undefined) {
					return [...a, genreName];
				}
				return a;
			}, []);

			return { ...film, genreNames };
		});
		return {
			...filmsData,
			results: transformedFilms,
		};
	}

	async getMovies() {
		const movies = await this.#MovieApiService.fetchMovies();
		console.log(movies);
		return;
	}

	async getTrendMovies() {
		const { data } = await this.#MovieApiService.fetchTrendMovies();
		console.log('SMOTRET SYDA', data);
		return this._transformFilms(data);
	}

	async getMovieByID(idParams) {
    this.#MovieApiService.idToSearch = idParams;
		const { data } = await this.#MovieApiService.fetchMovieByID();
    console.log('AIDISHNIKI NE RNDERYATSYA?',data)
    return this._transformFilms(data);
	}

	async getMovieBySearch(searchParams) {
		this.#MovieApiService.itemToSearch = searchParams;
		const { data } = await this.#MovieApiService.fetchMoviesBySearch();
    return this._transformFilms(data);
	}
}

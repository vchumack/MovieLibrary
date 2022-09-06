API_KEY = '407d4e26fe6158c959ba633b835fa721';

export class MovieApiService {
  constructor() {
    this.itemToSearch = 'sherlock';
    this.page = 1;
  }

  _baseUrl = 'https:api.themoviedb.org';
  _genre = [];

  async fetchCards() {
    const films = await fetch(`${this._baseUrl}/3/search/movie?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`)
    const filmsData = await films.json();

    if (this._genre.length > 0) {
      return this._transformFilms(filmsData, this._genre)
    }

    const genres = await fetch(`${this._baseUrl}/3/genre/movie/list?api_key=${API_KEY}&query=${this.itemToSearch}&page=${this.page}`)
    const genresData = await genres.json();

    this._genre = genresData.genres
    return this._transformFilms(filmsData, this._genre)
  }

  _transformFilms(filmsData, genres) {
    // console.log(films);
    const films = filmsData.results

    const transormedFilms = films
      .map(({
        vote_average,
        vote_count,
        popularity,
        title,
        overview,
        release_date,
        poster_path,
        original_title,
        genre_ids,
      }) => {

        const genreNames = genres
          .filter((genre) => genre_ids.includes(genre.id)).map(genre => genre.name);

        return {
          genreNames,
          popularity,
          title,
          overview,
          voteAverage: vote_average,
          voteCount: vote_count,
          releaseDate: release_date,
          posterPath: poster_path,
          originalTitle: original_title,
        };
      })
    return {
      ...filmsData,
      results: transormedFilms,
    }
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
};
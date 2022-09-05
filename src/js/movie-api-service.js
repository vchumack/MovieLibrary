API_KEY = '407d4e26fe6158c959ba633b835fa721';

export default class MovieApiService {
  constructor() {
    this.itemToSearch = 'sherlock holmes';
    this.page = 1;
  }

  _baseUrl = 'https:api.themoviedb.org';

  fetchCards() {
    return fetch(`${this._baseUrl}/3/search/movie?api_key=${API_KEY}&query=${this.itemToSearch}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => {
        return data.results;
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
};
import {
  refs
} from './refs';
import {
  MovieApiService
} from './movie-api-service'

const movieApiService = new MovieApiService;

movieApiService.fetchCards().then(filmsData => filmCardsMarkup(filmsData.results))

export default function filmCardsMarkup(films) {
  const items = films
    .map(({
      genreNames,
      title,
      releaseDate = '--',
      posterPath,
    }) => {
      const imageSrc = posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : 'https://via.placeholder.com/395x574'
      return `
        <li class="films__item">
            <img 
                class="films__img" 
                src=${imageSrc}
                alt="${title}">
            <h3 class="films__title">${title}</h3>
            <p class="films__genre">${genreNames.join(', ')}</p>
            <p class="films__year">${releaseDate.slice(0, 4)}</p>
        </li>
      `;
    });

  refs.filmsUl.innerHTML = items.join('');
}
import {
  refs
} from './refs';
import {
  onModalOpen
} from './modal-fetch'

export default function filmCardsMarkup(films) {
  const items = films.map(
    ({
      genreNames,
      title,
      release_date = '--',
      poster_path,
      id
    }) => {
      const imageSrc = poster_path ?
        `https://image.tmdb.org/t/p/w500/${poster_path}` :
        `https://via.placeholder.com/395x574`;
      return `
        <li class="films__item" id=${id}>
            <img 
                class="films__img" 
                src=${imageSrc} 
                alt="${title}">
            <h3 class="films__title">${title}</h3>
            <p class="films__descr">${genreNames.join(
							', '
						)} | ${release_date.slice(0, 4)}</p>
        </li>
        `;
    }
  );

  refs.filmsUl.innerHTML = items.join('');
  refs.filmsUl.addEventListener('click', onModalOpen)

};
import { refs } from './refs';

export default function filmCardsMarkup(films) {
	const items = films.map(
		({ title, genre_ids, release_date = '--', poster_path }) => {
			return `
        <li class="films__item">
            <img 
                class="films__img" 
                src="https://image.tmdb.org/t/p/w500/${poster_path}" 
                alt="${title}">
            <h3 class="films__title">${title}</h3>
            <p class="films__descr">${genre_ids.join(
							', '
						)} | ${release_date.slice(0, 4)}</p>
        </li>
        `;
		}
	);

	refs.filmsUl.innerHTML = items.join('');
}
console.log(refs.filmsUl);
console.log('====>', refs.filmsItem);

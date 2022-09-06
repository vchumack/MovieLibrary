export default function filmCardsMarkup(films) {
  const items = films
    .map(({
      genreNames,
      title,
      releaseDate = '--',
      posterPath,
    }) => {
      return `
        <li class="films__item">
            <img 
                class="films__img" 
                src="https://image.tmdb.org/t/p/w500/${posterPath}" 
                alt="${title}">
            <h3 class="films__title">${title}</h3>
            <p class="films__genre">${genreNames.join(', ')}</p>
            <p class="films__year">${releaseDate.slice(0, 4)}</p>
        </li>
      `;
    })
    .join('');

  return `<ul class="films">${items}</ul>`;
}
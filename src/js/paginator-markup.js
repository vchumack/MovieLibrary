import {
  refs
} from './refs';
import {
  MovieApiService
} from './movie-api-service'
import filmCardsMarkup from './film-cards-markup';
// import Pagination from 'tui-pagination';


// const container = document.getElementById('pagination');

// var pagination2 = new tui.Pagination(document.getElementById('pagination2'), {
// 	totalItems: 500,
// 	itemsPerPage: 20,
// 	visiblePages: 5,
// 	centerAlign: true,
// });

const movieApiService = new MovieApiService();

movieApiService.fetchCards().then(({
  total_pages,
  page
}) => {
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
  console.log('hi - ');
  movieApiService.decrementPage();
  // здесь нужно отправлять запрос на список фильмов для следующей страницы
  movieApiService.fetchCards().then(filmsData => filmCardsMarkup(filmsData.results))
}

function onBtnForward() {
  console.log('gi +');
  movieApiService.incrementPage();
  // здесь нужно отправлять запрос на список фильмов для предыдущей страницы
  movieApiService.fetchCards().then(filmsData => filmCardsMarkup(filmsData.results))
}
console.log(refs.decrementBtn);
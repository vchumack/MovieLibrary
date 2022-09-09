import {
  refs
} from './refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export default function renderPaginatorMarkup(totalItems, cb) {
  document.getElementById('pagination').innerHTML = ''

  let pagination = new Pagination(refs.paginator, {
		totalItems,
		itemsPerPage: 20,
		visiblePages: 5,
		centerAlign: true,
	});

  pagination.on('afterMove', cb);
}
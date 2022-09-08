import { refs } from './refs';

window.addEventListener('keydown', onKeyClose);
refs.modalClose.addEventListener('click', onButtonClose);
refs.modal.addEventListener('click', onClickClose);

function onButtonClose(e) {
	refs.modal.classList.add('is-hidden');
	refs.body.classList.remove('stop-scroll');
}

function onKeyClose(e) {
	if (e.code === 'Escape') {
		console.log('почему не работает когда стоит слушатель на крестике ???');
		refs.modal.classList.add('is-hidden');
		refs.body.classList.remove('stop-scroll');
		modal.removeEventListener('keydown', onKeyClose);
	}
}

function onClickClose(e) {
	if (e.target === refs.modal) {
		refs.modal.classList.add('is-hidden');
		refs.body.classList.remove('stop-scroll');
	}
}

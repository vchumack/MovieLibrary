import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { refs } from './refs';

const googleAuthBtn = document.querySelector('#google');
const googleAuthDiv = document.querySelector('#google-box-id');
const KEY = 'UserData';

googleAuthBtn.addEventListener('click', onGoogleAuthBtnClick);

//авторизация
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyANn2NiMp7BG5ukicdSdAYXskV3voQ2PPM',
	authDomain: 'auth-f6ef0.firebaseapp.com',
	projectId: 'auth-f6ef0',
	storageBucket: 'auth-f6ef0.appspot.com',
	messagingSenderId: '820823860490',
	appId: '1:820823860490:web:3277c43ed44623d496c6f3',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function onGoogleAuthBtnClick() {
	const auth = getAuth();
	signInWithPopup(auth, provider)
		.then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);

			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(user);
			// ...

			if (user.emailVerified) {
				const userAuthData = {
					email: user.email,
					name: user.displayName,
				};
				setLocalStorageUser(KEY, userAuthData);
				googleAuthBtn.classList.add('button-hidden');
				googleAuthDiv.classList.add('google-box');
				markupUserAuth(user);
				const logoutBtn = document.querySelector('.google-btn--logout');
				logoutBtn.addEventListener('click', onLogoutClick);
			}
		})
		.catch(error => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
}

function markupUserAuth({ displayName, email, photoURL }) {
	googleAuthDiv.insertAdjacentHTML(
		'beforeend',
		`<div class="js-box-out">
   <img class='google-userpic' src=${photoURL} alt='${displayName}' width='30' height='30'>
   <div class='userdata-box'>
      <p class="google-username">${displayName}</p>
      <p class="google-email">${email}</p>
   </div>
   <div class="">
      <button type="button" id="google" class="google-btn--logout">Log out</button>
   </div>
   </div>`
	);
}

function setLocalStorageUser(KEY, data) {
	localStorage.setItem(KEY, JSON.stringify(data));
}

function getLocalStorageUser(KEY) {
	return JSON.parse(localStorage.getItem(KEY));
}

function onLogoutClick() {
	localStorage.removeItem(KEY);
	googleAuthDiv.classList.remove('google-box');
	document.querySelector('.js-box-out').remove();
	googleAuthBtn.classList.remove('button-hidden');
}

// засунуть проверку во все функции по клику кнопок
// if (!getLocalStorageUser()) {
// 	return console.log('Авторизуйтесь, пожалуйста');
// }

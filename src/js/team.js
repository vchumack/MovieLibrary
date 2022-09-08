import { refs } from './refs';
import team1 from '../images/team/pavlo.jpg';
import team2 from '../images/team/valeri.jpg';
import team3 from '../images/team/leonid.jpg';
import team4 from '../images/team/andriy.jpg';

refs.footerLink.addEventListener('click', onRenderTeamClick);

const gitIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
<title>linkedin</title>
<g id="icomoon-ignore">
</g>
<path d="M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"></path>
</svg>`;

const linIcon = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
<title>linkedin</title>
<g id="icomoon-ignore">
</g>
<path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"></path>
</svg>`;

function onRenderTeamClick(e) {
	e.preventDefault();
	refs.boxTeam.innerHTML = `<section class="team-section section">
   <div class="team-section__container">
      <h2 class="team-section__title">Our Team</h2>
      <ul class="team-list list">
         <li class="team-list__item">
            <img src=${team1} alt="Pavlo Vovzhynskyy" />
            <div class="team-list__description">
               <h3 class="team-list__title">Pavlo Vovzhynskyy</h3>
               <p lang="en" class="team-list__text">Team Lead</p>
               <ul class="social-icon__list">
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="https://github.com/Lluitiy">${gitIcon}
                     </a>
                  </li>
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="https://www.linkedin.com/in/pavlo-vovzhynskyy-3477601bb">${linIcon}
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
         </li>
         <li class="team-list__item">
            <img src=${team2} alt="Valeriya Druchinina" />
            <div class="team-list__description">
               <h3 class="team-list__title">Valeriya Druchinina</h3>
               <p lang="en" class="team-list__text">Scrum Master</p>
               <ul class="social-icon__list">
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="https://github.com/vchumack">                           
                           ${gitIcon}                       
                     </a>
                  </li>
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D1%87%D1%83%D0%BC%D0%B0%D0%BA-747ba9179">
                     ${linIcon}
                     </a>
                  </li>
               </ul>
            </div>
         </li>
         <li class="team-list__item">
            <img src=${team3} alt="Leonid Lukin" />
            <div class="team-list__description">
               <h3 class="team-list__title">Leonid Lukin</h3>
               <p lang="en" class="team-list__text">Frontend Developer</p>
               <ul class="social-icon__list">
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="">  ${gitIcon} 
                     </a>
                  </li>
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="">${linIcon}
                     </a>
                  </li>
               </ul>
            </div>
         </li>
         <li class="team-list__item">
            <img src=${team4} alt="Andrii Maliarenko" />
            <div class="team-list__description">
               <h3 class="team-list__title">Andrii Maliarenko</h3>
               <p lang="en" class="team-list__text">Frontend Developer</p>
               <ul class="social-icon__list">
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="">${gitIcon} 
                     </a>
                  </li>
                  <li class="social-icon__item">
                     <a class="social-icon__link" href="">${linIcon}
                     </a>
                  </li>
               </ul>
            </div>
         </li>
      </ul>
   </div>
</section>`;
}

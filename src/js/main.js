import openBtn from './modules/openBtn';
import burgerMenu from './modules/burgerMenu';


document.addEventListener('DOMContentLoaded', () => {
    openBtn('.features__btn', '.features__item', 'block');
    openBtn('.problems-btn', '.problems-list__item', 'block');
    openBtn('.clients-btn', '.clients__item', 'block');
    openBtn('.partners-btn', '.partners__item', 'flex');
    burgerMenu();
    


});
const burgerMenu = () => {
    const burger = document.querySelector('.burger-btn');
    const overlay = document.querySelector('.overlay');

    burger.addEventListener('click', () => {
        if (!burger.classList.contains('active')) {
            burger.classList.add('active');
            overlay.classList.add('active');
        }
        else {
            burger.classList.remove('active');
            overlay.classList.remove('active');
        }
    })
}

export default burgerMenu;
/*
<button class="hamburger hamburger--collapse" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner"></span>
    </span>
</button>
<nav class="menu">
    <a class="menu__item" href="#">Endless</a>
    <a class="menu__item" href="#">Menu</a>
    <a class="menu__item" href="#">Possibilities</a>
</nav>
*/

export default {
    name: 'hamburger',
    _hamburger: null,
    init() {
        this._hamburger = document.querySelector('.hamburger');
        if (!this._hamburger) {
            return; 
        }

        this._hamburger.addEventListener('click', () => {
            this._hamburger.classList.toggle('is-active');
            document.querySelector('.menu').classList.toggle('menu--active');
        });
    }
}
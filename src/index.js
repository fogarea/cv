import "./styles/style.scss";

const checkbox = document.querySelector('.switch-scheme__checkbox');
const logoRss = document.querySelector('.rss__img');
const logoGh = document.querySelector('.gh__img');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__link');

// site color scheme switcher
const setupScheme = () => {
    const colorScheme = getScheme();
    !colorScheme ? setDarkScheme() : setLightScheme();
    checkbox.addEventListener('change', function () {
        this.checked ? setLightScheme() : setDarkScheme();
        setScheme(this.checked);
    })
}

const setLightScheme = () => {
    document.body.classList.add('body--light');
    checkbox.checked = true;
    logoRss.classList.add('footer--invert');
    logoGh.classList.add('footer--invert');
}

const setDarkScheme = () => {
    document.body.classList.remove('body--light');
    checkbox.checked = false;
    logoRss.classList.remove('footer--invert');
    logoGh.classList.remove('footer--invert');
}

const getScheme = () => {
    return JSON.parse(localStorage.getItem('color-scheme'));
}

const setScheme = (scheme) => {
    localStorage.setItem('color-scheme', scheme);
}

setupScheme();

// show hide navigation
const handleBtnClick = () => {
    nav.classList.remove('header__nav--show')
    document.body.classList.remove('body--scroll__disable');
};

openBtn.addEventListener('click', () => {
    nav.classList.add('header__nav--show')
    document.body.classList.add('body--scroll__disable');
    for (let item of navItem) {
        item.addEventListener('click', handleBtnClick)
    }
});

closeBtn.addEventListener('click', handleBtnClick);
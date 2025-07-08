const htmlElement = document.querySelector('html');
const toggleBtnSm = document.querySelector('#toggle-sm');
const toggleBtnLg = document.querySelector('#toggle-lg');

toggleBtnSm.addEventListener('click', toggleDarkMode);
toggleBtnLg.addEventListener('click', toggleDarkMode);

function toggleDarkMode () {
    htmlElement.classList.toggle('dark');
}

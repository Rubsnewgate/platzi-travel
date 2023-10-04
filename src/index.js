const htmlElement = document.querySelector('html');
const toggleBtnSm = document.querySelector('#toggle-sm');
const toggleBtnlg = document.querySelector('#toggle-lg');

toggleBtnSm.addEventListener('click', toggleDarkmode);
toggleBtnlg.addEventListener('click', toggleDarkmode);

function toggleDarkmode () {
    htmlElement.classList.toggle('dark');
}
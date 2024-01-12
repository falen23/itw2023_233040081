const buttonToggle = document.querySelector('.nav-toggle span');
const ulList = document.querySelector('.nav-item');
let toggleOpen = false;

buttonToggle.addEventListener('click', () => {
    if (toggleOpen) {
        ulList.style.top = '0';
        buttonToggle.textContent = 'close';
        buttonToggle.style.color = 'white';
    } else {
        ulList.style.top = '-100vh';
        buttonToggle.textContent = 'menu';
        buttonToggle.style.color = '';
    }

    toggleOpen = !toggleOpen;
});
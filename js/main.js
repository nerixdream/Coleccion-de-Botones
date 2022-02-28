const button = document.querySelector('.btn');
const icon = document.querySelector('.icon');
let open = false;

button.addEventListener('click', () => {
    if (!open) {
        icon.style.transform = 'rotate(-90deg)';
        setTimeout(() => icon.setAttribute('class', 'fas fa-times icon'), 120);
        open = true;
    } else {
        icon.style.transform = 'rotate(0)';
        setTimeout(() => icon.setAttribute('class', 'fas fa-bars icon'), 120);
        open = false;
    }
});

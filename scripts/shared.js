let modal = document.querySelector('.modal')
let selectorPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal-action--negetive')

for (i = 0; i < selectorPlanBtn.length; i++) {
    selectorPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
    })
}

modalCloseBtn.addEventListener('click', closeModal)

function closeModal() {
    modal.style.display = 'none';
}
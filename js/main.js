const modalBtn = document.querySelector('.jsModalBtn')
const modalBtnClose = document.querySelector('.jsModalClose')
const bod = document.body

modalBtn.addEventListener('click', ()=> bod.classList.add('modal-is-open'))

modalBtnClose.addEventListener('click', ()=>bod.classList.remove('modal-is-open'))
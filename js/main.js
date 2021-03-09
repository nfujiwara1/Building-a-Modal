// const modalBtn = document.querySelector('.jsModalBtn')
// const modalBtnClose = document.querySelector('.jsModalClose')
// const bod = document.body
// const modalOverlay = document.querySelector('.modal-overlay')

// modalBtn.addEventListener('click', ()=> 
// bod.classList.add('modal-is-open'))

// modalBtnClose.addEventListener('click', ()=>bod.classList.remove('modal-is-open'))

// modalOverlay.addEventListener('click', function(e){
//   if(!e.target.closest('.modal')){
//     bod.classList.remove('modal-is-open')
//     console.log(e.target)
//     console.log(e.currentTarget)
//   }
//   // bod.classList.remove('modal-is-open')
//   // console.log(e.target)
//   // console.log(e.currentTarget)

// })

const modalBtn = document.querySelector('.jsModalBtn')
const modalCloseBtn = document.querySelector('.jsModalClose')
const bod = document.body
const modalOverlay = document.querySelector('.jsModalOverLay')

modalBtn.addEventListener('click', function(e){
  bod.classList.add('modal-is-open')
})

modalCloseBtn.addEventListener('click', function(e){
  bod.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', function(e){
    if(!e.target.closest('.modal')){
      bod.classList.remove('modal-is-open')
    }
    console.log(e.target)
})
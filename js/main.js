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

const modalBtn = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')
const bod = document.body
const modalOverlay = document.querySelector('.jsModalOverlay')

modalBtn.addEventListener('click', function(e){
  bod.classList.add('modal-is-open')
  wave()
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

const wavingHand = document.querySelector('.wave-hand')

const wave = ()=>{
  const tl = new TimelineMax({})
  tl.set(wavingHand, {transformOrigin: 'bottom center'})
  tl.from(wavingHand, .5, {
    scale: .25,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })
  tl.to(wavingHand, .2, {
    rotation: 15
  })
  tl.to(wavingHand, .2, {
    rotation: -15
  })
  tl.to(wavingHand, .2, {
    rotation: 15
  })
  tl.to(wavingHand, .2, {
    rotation: -15
  })
  tl.to(wavingHand, .2, {
    rotation: 0
  })

}


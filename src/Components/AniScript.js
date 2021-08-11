const cardContainer = document.querySelector('.Box')


cardContainer.addEventListener('click', e => {
  const cardInfoBtn = e.target.closest('.moreInfo')
  const cardLessBtn = e.target.closest('.lessInfo')
  
  if (cardInfoBtn) {
    cardInfoBtn.parentNode.parentNode.classList.add('movie--open')
  }
  
  if (cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('movie--open')
  }
})

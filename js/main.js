const opinionCards = document.querySelectorAll('.opinion__card');
opinionCards.forEach(card =>{
  card.addEventListener("mouseover", (e) =>{
    card.classList.add('active');
  })
})

opinionCards.forEach(card =>{
  card.addEventListener("mouseout", (e) =>{
    card.classList.remove('active')
  })
})
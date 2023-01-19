const cards = document.querySelectorAll('.expanding__cards')

cards.forEach((card) =>{
    card.addEventListener('click', () =>{
        removeExapndedClasses();
        card.classList.add('expanding__cards-expanded');
    })
})


function removeExapndedClasses(){
    cards.forEach(card =>{
        card.classList.remove('expanding__cards-expanded');
    })
}
const searchIcon = document.querySelector(".fa-magnifying-glass")
const searchInput = document.querySelector(".search__input")

searchIcon.addEventListener("click", () =>{
    searchInput.classList.toggle("search__input-disable")
})
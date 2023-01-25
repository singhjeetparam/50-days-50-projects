const rotateButton = document.querySelector(".circle")

const container = document.querySelector(".container");

const nav = document.querySelector(".nav")

rotateButton.addEventListener("click", ()=>{
    container.classList.toggle("rotated")
    nav.classList.toggle("hidden")
});
    



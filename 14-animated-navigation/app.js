const collapsebtn = document.getElementById("navigation__collapse") 

const nav = document.querySelector(".navigation");

collapsebtn.addEventListener("click", () =>{
    nav.classList.toggle("active")
})

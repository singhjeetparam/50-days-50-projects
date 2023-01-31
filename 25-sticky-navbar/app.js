const nav = document.querySelector(".nav")
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll>100){
        nav.classList.add("active")
    }
    if(scroll<100){
        nav.classList.remove("active")
    }
});


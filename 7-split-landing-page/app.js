const landingPage1 = document.querySelector(".landing__page__1")
const landingPage2 = document.querySelector(".landing__page__2")

landingPage1.addEventListener("mouseenter", () =>{
    landingPage1.style.width = `75%`;
    landingPage2.style.width = `25%`;

}) 

landingPage2.addEventListener("mouseenter", () =>{
    landingPage2.style.width = `75%`;
    landingPage1.style.width = `25%`;

})
landingPage1.addEventListener("mouseleave", () =>{
    landingPage1.style.width = `100%`;
    landingPage2.style.width = `100%`;

}) 

landingPage2.addEventListener("mouseleave", () =>{
    landingPage2.style.width = `100%`;
    landingPage1.style.width = `100%`;

})


landingPage1.style.transition = "all 2s"
landingPage2.style.transition = "all 2s"
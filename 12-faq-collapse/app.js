const faqCollapseBtn = document.querySelectorAll(".faq__collapse__btn")

faqCollapseBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        btn.parentNode.nextElementSibling.classList.toggle("hidden")
        btn.classList.toggle("inverted")
        btn.style.transition = "all 1s"
    })
})



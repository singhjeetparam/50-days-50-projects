const choiceString = document.querySelector(".rcg__textarea");
const choiceContainer = document.querySelector(".rcg__choices")

choiceString.addEventListener("input", (e) =>{
    let str = ""
    str = e.target.value.split(",")
    // console.log(e.target.value.split(","))

    for(let word of str){
        choiceContainer.innerHTML+=(`<div class="rcg__choice">${word}</div>`)
    }
    
})
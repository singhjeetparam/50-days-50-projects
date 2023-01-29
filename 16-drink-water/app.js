const jug = document.querySelector(".jug")
const glasses = document.querySelectorAll(".glass")
const highlightedGlasses  = document.querySelectorAll(".selected")
const jugFilled = document.querySelector(".jug__filled")
const jugPercentage = document.getElementById("jug__percentage")

updateJug();

glasses.forEach((glass, index) =>{
    glass.addEventListener("click", () =>{
        highlightGlass(index);
    })
})

function highlightGlass(index){
    // if(index === 7 && glasses[index].classList.contains("selected")){
    //     index--;
    // }

    if(glasses[index].classList.contains("selected") && !glasses[index].nextElementSibling.classList.contains("selected")){
        index--;
    }

    glasses.forEach((glass, index2) => {
        if(index2 <= index){
            glass.classList.add("selected")
            
        }
        else{
            glass.classList.remove("selected")

        }
    })

   updateJug()
}


function updateJug(){
   
    const fullGlasses = document.querySelectorAll(".glass.selected").length
    const totalGlasses = glasses.length
    
    if(fullGlasses === 0){
        jugFilled.style.height = 0;
        jugPercentage.textContent = `0%`
        
    }
    else{
        jugFilled.style.height = `${fullGlasses/totalGlasses*300}px`
        jugPercentage.textContent = `${fullGlasses/totalGlasses*100}%`
    }
}

jugFilled.style.transition = "all 1s"
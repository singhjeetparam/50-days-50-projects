const next = document.getElementById("next");
const prev =document.getElementById("prev");
const progressBar = document.getElementById
("progress");

const progressNumber = document.querySelectorAll(".progress__number");

let count = 1; 
let progressWidth = 0;


prev.addEventListener("click", () =>{
    if(count>=0 && progressWidth>0 ){
        count--;
        progressWidth-=33.3;
        // console.log(count)
    }
    
    changeWidthOfProgressBar(progressWidth);
    prevDisabled();
    // progressNumberRemoveAnimation();
    update();
})

next.addEventListener("click", () =>{
    if(count<=4 && progressWidth<99){
        count++;
        progressWidth+=33.3;
        // console.log(count)
        
    }
    
    changeWidthOfProgressBar(progressWidth);
    prevDisabled();
    // progressNumberAddAnimation();
    update();
})


function changeWidthOfProgressBar(progressWidth){
    progressBar.style.width = `${progressWidth}%`
}

function changeBorderOfProgressNumber(progressWidth){
    progressNumber.classList.add("border");
}

const prevDisabled = () => {
    if(progressWidth === 0){
        prev.setAttribute("disabled", "");
    //     console.log(progressWidth)
     }
   
    else{
        prev.removeAttribute("disabled", "")
        // console.log(progressWidth)
    }
}





function update() {
    progressNumber.forEach((circle, idx) => {
        if(idx < count) {
            circle.classList.add('border')
            console.log(idx)
        } else {
            circle.classList.remove('border')
            console.log(idx)
        }
    })
}


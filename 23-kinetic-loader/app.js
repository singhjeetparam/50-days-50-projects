const icon1 = document.querySelector("#icon-1");
const icon2 = document.querySelector("#icon-2");
let x = 0;
function rotateIcon(){
    
     icon1.classList.toggle("flip")
     icon2.classList.toggle("flip")

    console.log(x)
    
   

}

setInterval(rotateIcon, 500)
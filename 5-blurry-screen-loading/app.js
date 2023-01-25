//fetching the elements 
//this is our text
const loading__screen__number = document.querySelector(".loading__screen");
//this is our bg 
const bg = document.querySelector(".bg")

//variable
let load = 0;
//another variable with setInterval function
let int = setInterval(blurring, 30)

//blurring function
function blurring(){
    load++;

    if(load>99){
        clearInterval(int)
    }

    loading__screen__number.innerText = `${load}%`

    loading__screen__number.style.opacity = scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


//function to run the text from 0 to 100
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
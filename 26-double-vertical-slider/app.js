const up = document.querySelector(".bi-arrow-up")
const down = document.querySelector(".bi-arrow-down")
const images = document.querySelectorAll(".image")
const infos = document.querySelectorAll(".info")
const sliderContainer = document.querySelector(".wrapper")

let counter = 1;

up.addEventListener("click", () =>{
    counter++;
    if(counter>images.length-1){
      counter = 0;
    }
    changePos(counter)
})

down.addEventListener("click", () =>{
   
  counter--;
  if(counter<0){
    counter = images.length-1
  }
    changePos(counter)

})

function changePos(counter){
    const sliderHeight = sliderContainer.clientHeight;
    images.forEach((image) =>{
        image.style.transform = `translateY(${counter * sliderHeight}px)`
        console.log(counter)
    
    })
    infos.forEach((info) =>{
        info.style.transform = `translateY(-${counter * sliderHeight}px)`
        console.log(counter)
    
    })
    
}



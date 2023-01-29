const left = document.querySelector(".left__control")
const right = document.querySelector(".right__control")
const bg = document.querySelector(".bg__screen")
const bodyBG = document.body
const arrayOfImage = ["./assets/amr-taha-SMMqej67qjI-unsplash.jpg", "./assets/cafer-mert-ceyhan-LAY19dUD_ro-unsplash.jpg", "./assets/carl-raw-8Gdayy2Lhi0-unsplash.jpg", "./assets/carl-raw-m3hn2Kn5Bns-unsplash.jpg", "./assets/howard-bouchevereau-Ql4Y26OsEoY-unsplash.jpg"]

let counter = 0;
left.addEventListener("click", () =>{
    if(counter>0){
        --counter;
        console.log(counter)
        changeBG(counter);
    }
    disableArrows();
    
})

right.addEventListener("click", () =>{
    if(counter<4){
        ++counter;
        console.log(counter);
        changeBG(counter);
        right.classList.remove("disable")
    }
    disableArrows();
    
})

function changeBG(counter){
    bodyBG.style.backgroundImage = `url("${arrayOfImage[counter]}")`;
    bg.style.backgroundImage = `url("${arrayOfImage[counter]}")`;
    

}

function disableArrows(){
    if(counter===4){
        right.classList.toggle("disable")
    }
    if(counter>0 && counter<4){
        left.classList.remove("disable")
        right.classList.remove("disable")
    }
    if(counter === 0){
        left.classList.toggle("disable")
    }
}
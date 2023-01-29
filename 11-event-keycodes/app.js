const eventKey = document.querySelector(".event__key");
const eventKeyCode = document.querySelector(".event__keycode");
const eventCode = document.querySelector(".event__code");
const eventInfo = document.querySelector(".event__info")

window.addEventListener("keydown", (e) =>{
    eventInfo.classList.add("hidden");
    removeClass();
    eventCode.textContent = e.keyCode;
    eventKey.textContent = e.key;
    eventKeyCode.textContent = e.code;

    if(e.key === " "){
        eventKey.textContent = "Space"
    }

})

function removeClass(){
    eventCode.classList.remove("hidden");
    eventKeyCode.classList.remove("hidden");
    eventKey.classList.remove("hidden");
    
}


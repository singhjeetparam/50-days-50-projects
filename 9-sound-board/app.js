const whistle = new Audio("./assets/mixkit-retro-game-notification-212.wav");

const roar = new Audio("./assets/mixkit-aggressive-beast-roar-13.wav") 

const retro = new Audio("./assets/mixkit-retro-game-notification-212.wav")

const rocket = new Audio("./assets/mixkit-fast-rocket-whoosh-1714.wav")

const whistleButton = document.getElementById("whistle");

const roarButton = document.getElementById("roar")

const rocketButton = document.getElementById("rocket")

const retroButton = document.getElementById("retro")

whistleButton.addEventListener("click", () =>{
    whistle.play()
})
roarButton.addEventListener("click", () =>{
    roar.play()
})

retroButton.addEventListener("click", () =>{
    retro.play()
})

rocketButton.addEventListener("click", () =>{
    rocket.play()
})



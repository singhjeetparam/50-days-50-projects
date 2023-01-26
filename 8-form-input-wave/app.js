const emailLabel = document.getElementById
("email__label")

const passwordLabel = document.getElementById("password__label")

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password")
   


emailInput.addEventListener("click", (e) =>{ 
    emailLabel.style.top = `0px`
    textReturnTooriginal();
    e.stopPropagation();
    
})


passwordInput.addEventListener("click", (e) =>{
    passwordLabel.style.top = `0px`
    textReturnTooriginal();
    e.stopPropagation();
})

function textReturnTooriginal(){
    if(emailInput === document.activeElement){
        passwordLabel.style.top = `25px`;
    }
    if(passwordInput === document.activeElement){
        emailLabel.style.top = `25px`;
    }
    if(passwordInput.value!=""){
        passwordLabel.style.top = `0px`;
    }
    if(emailInput.value!=""){
        emailLabel.style.top = `0px`
    }
}

window.addEventListener("click", () =>{
        if(passwordInput.value==""){
            passwordLabel.style.top = `25px`;
        }
        if(emailInput.value==""){
            emailLabel.style.top = `25px`
        }
})

emailLabel.style.transition = "all 1s"
passwordLabel.style.transition = "all 1s"


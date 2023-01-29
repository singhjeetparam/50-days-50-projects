const choiceString = document.querySelector(".rcg__textarea");

const choiceContainer = document.querySelector(".rcg__choices")

// const choicesTag = document.querySelectorAll(".rcb__choice")

 //when we enter something in the textarea
choiceString.addEventListener("keyup", (e) =>{
    createChoices(e.target.value);
   
    if(e.key === "Enter"){
        setTimeout(( )=>{
            e.target.value = ""
        }, 10);
        randomSelect();
    }
})

//to create choice from input 
function createChoices(input){
    const choices = input.split(",").filter(choice => choice.trim() !== "").map(choice => choice.trim());

    choiceContainer.innerHTML = "";

    choices.forEach(choice => {
       const c =  document.createElement("span");
       c.classList.add("rcg__choice");
       c.textContent = choice;
       choiceContainer.append(c);
    });
}


//after clicking enter we will run the random function 
function randomSelect(){
    const times = 30; 
    const int = 100;
    const interval = setInterval(() =>{
        //randomly select a choice
        const randomChoice = pickRandomChoice();

        highlight(randomChoice);

        setTimeout(() =>{
            removeHighlight(randomChoice)
        }, int);

    }, int);


    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {

            // randomly select a tag
            const randomChoice = pickRandomChoice();

            //highlight 
            highlight(randomChoice);
            
        }, int);


    }, int * times)


}

function pickRandomChoice(){
    const choices = document.querySelectorAll(".rcg__choice")
    return choices[Math.floor(Math.random() * choices.length)]
}

function highlight(choice){
    choice.classList.add("highlight")
}

function removeHighlight(choice){
    choice.classList.remove("highlight")
}
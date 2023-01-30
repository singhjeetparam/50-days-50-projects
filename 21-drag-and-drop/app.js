const fill = document.querySelector(".box__fill")
const boxes = document.querySelectorAll(".box")

fill.addEventListener("dragstart", dragStart)

fill.addEventListener("dragend", dragEnd)

for(const box of boxes){
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", dragDrop);
}


function dragStart(){
    // this.className += " hold"
    this.classList.add("hold")
    setTimeout(() => this.className = " invisible", 0)
}

function dragEnd(){
    this.className = "box__fill";
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault()
    this.className += " hovered"
}

function dragLeave(){
    this.className = "box"
}

function dragDrop(){
        this.className = "box"
        this.append(fill)
}

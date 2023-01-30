const btn = document.querySelector(".btn")


btn.addEventListener("click", (e)=>{

    //coordinates of the cursor and only applicable for the inside of the button 
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y)
     
    //coordinates of the button 
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // console.log(buttonLeft,  buttonTop)

    //these are the inner coordinates of the click with respect to the button. 
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside)
    
    //crearting a new circle element
    const circle = document.createElement('span');
    //adding class to it 
    circle.classList.add("circle");
    //setting the coordinates of the circle like where it should be added inside the button 
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    //appending circle to the button in html file
    btn.appendChild(circle);


    //setTimeOut function to remove the added circle after 500ms
    setTimeout(() => circle.remove(), 500)


})
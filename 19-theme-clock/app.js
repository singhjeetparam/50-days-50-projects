const timeSpan = document.getElementById("time")

const d = new Date();
let timeT = d.getTime();

timeSpan.textContent = timeT;
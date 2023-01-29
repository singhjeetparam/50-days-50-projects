const button = document.querySelector(".wrapper__button")

const wrapperDesc = document.querySelector(".wrapper__desc")


button.addEventListener("click",  handleClick);




async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  }

async function handleClick() {
    const { joke } = await fetchJoke();
    wrapperDesc.textContent = joke;
  }
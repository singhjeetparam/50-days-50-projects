const button = document.querySelector(".button")
const notifications = document.querySelector(".notifications")

const notification = document.querySelector(".notification")

button.addEventListener("click", ()=>{
    addNotification();
    
})



function addNotification(){
    const notif = document.createElement('div')
    notif.classList.add('notification')
    notif.textContent = "Notification"
    notifications.appendChild(notif);
    setTimeout(() => {
        notif.remove()
    }, 3000)
}


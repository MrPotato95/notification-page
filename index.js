const bullets = document.querySelectorAll(".bullet")
const blueBackground = document.querySelectorAll(".bg-blue")
const counter = document.querySelector("#notification-counter")

function hideNotification() {
  for (let i = 0; i < bullets.length; i++) {
    let hideBullets = bullets[i]
    hideBullets.style.display = "none"
  }

  for (let i = 0; i < blueBackground.length; i++) {
    let hideBackground = blueBackground[i]
    hideBackground.style.backgroundColor = "white"
  }
  counter.style.display = "none"
}

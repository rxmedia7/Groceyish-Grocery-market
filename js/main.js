let modeswitch = document.querySelector("#modeswitcher");

modeswitch.addEventListener("pointerdown", () => {
    document.body.classList.toggle("daymode");
});

//countdown
let hours = 11;
let minutes = 0;
let seconds = 0;

const countdownFunction = setInterval(function () {
    document.getElementById("hours").innerText = hours.toString().padStart(2, "00");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "00");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "00");

    // Decrease time
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                hours = 11;
                minutes = 0;
                seconds = 0;
            }
        }
    }
}, 1000);

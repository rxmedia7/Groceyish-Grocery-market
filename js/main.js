let modeswitch = document.querySelector("#modeswitcher");
modeswitch.addEventListener("pointerdown", () => {
    document.body.classList.toggle("daymode");
});

let menus = document.querySelector(".home");
let ico = document.querySelector(".ico");
let hltxt = document.querySelector(".hl_txt");


menus.addEventListener("pointerdown", () => {
    ico.style = "color: #3BB77E";
});

// pages active

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".header_links div");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.toggle("active"));
        });
    });
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

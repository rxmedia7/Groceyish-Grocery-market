let modeswitch = document.querySelector("#modeswitcher");

modeswitch.addEventListener("pointerdown", () => {
    document.body.classList.toggle("daymode");
})

let hltext = document.querySelectorAll(".hl_txt");
let icon = document.querySelectorAll(".ico");


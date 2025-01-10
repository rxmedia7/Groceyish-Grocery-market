let modeswitch = document.querySelector("#modeswitcher");

modeswitch.addEventListener("pointerdown", () => {
    document.body.classList.toggle("daymode");
})

let hltext = document.querySelector("#hl_txt");
let icon = document.querySelector("#ico");

hltext.addEventListener("mouseover", () =>{
    icon.style.color = ("#3BB77E");
    hltext.style.color = ("#3BB77E");
})
icon.addEventListener("mouseover", () =>{
    icon.style.color = ("#3BB77E");
    hltext.style.color = ("#3BB77E");
})
hltext.addEventListener("mouseout", () =>{
    icon.style.color = ("");
    hltext.style.color = ("");
})
icon.addEventListener("mouseout", () =>{
    icon.style.color = ("");
    hltext.style.color = ("");
})
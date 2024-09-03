document.querySelector("img").onclick = function() {
    document.body.classList.toggle("dark-mode");
}

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

function cha () {
    let chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charsCount = 32;
    let ranSer = "";
    for (let i = 0; i < charsCount; i++) {
        ranSer += chars[Math.floor(Math.random() * chars.length)];
}
serialEl.innerHTML = ranSer;
navigator.clipboard.writeText(ranSer)
}

window.onload = cha;
btnEl.onclick = cha;
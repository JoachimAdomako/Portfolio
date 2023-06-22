const btn = document.getElementById("btnDarkMode");

/* tagnames */
const body = document.getElementById("body");
const header = document.getElementById("header");
const Box = document.getElementById("boxContainer");
const battlerlink = document.getElementById("battlerlink");
/* Darkmode button in actie */



const DarkMode = () => {
    body.style.backgroundColor = "#0A0A0A";
    header.style.color = '#8F8371';
    Box.style.color = '#8F8371';
    Box.style.backgroundColor = '#CCC3B7';
}

const ReverseLightMode = () => {
    body.style.backgroundColor = '#F5F5F5';
    header.style.color = '#707C8E';
    Box.style.color = '#707C8E';
    Box.style.backgroundColor = '#333C48';
}


btn.addEventListener("click", () => {
    if (body.style.backgroundColor === "rgb(245, 245, 245)") {
        DarkMode();
    } else {
        ReverseLightMode();
    }


})

battlerlink.addEventListener("click", () => {
    window.location.href = "http://localhost:3000/pokemonBattler"
})
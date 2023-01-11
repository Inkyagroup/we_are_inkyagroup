const music = new Audio ("mp3/kane.mp3");
// const button = document.getElementById("Push")

let x = -8;

function Music() {

    // button.setAttribute("disabled", true);
    music.play();
    // music.addEventListener("ended", () => {
    //     button.removeAttribute("disabled");
    // })
    x++;
    console.log(x);
}

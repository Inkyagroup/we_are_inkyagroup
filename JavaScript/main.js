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

function mail(){
    const formElements = document.forms.otoiawase;
    console.log(formElements);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "inkyagroup0603@gmail.com",
        Password : "24EF1E8A23BB634D52E6CA7344D228134061",
        To :"inkyagroup0603@gmail.com",
        From : "inkyagroup0603@gmail.com",
        Subject : formElements.title.value,
        Body : formElements.name.value + formElements.gender.value + formElements.message.value
    })
    .then(
        message => alert(message)
    );
}

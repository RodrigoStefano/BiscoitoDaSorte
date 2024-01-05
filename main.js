const screen01 = document.querySelector(".screen01");
const screen02 = document.querySelector(".screen02");

const btnCookie = document.querySelector("#btnCookie");
const btnReset = document.querySelector("#btnReset");

const fraseSorte = document.querySelector("#fraseSorte");

function ShowSentence(event){
    screen01.classList.toggle("hide");
    screen02.classList.toggle("hide");

    fraseSorte.classList.add("animationBoxSentence")
}

btnCookie.addEventListener(`click`, ShowSentence);
btnReset.addEventListener(`click`, function(){
    location.reload();
})
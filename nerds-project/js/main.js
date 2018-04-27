var link = document.querySelector(".contacts__link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__close");
var name = document.querySelector("input[name=name]");
var email = document.querySelector("input[name=email]");
var form = popup.querySelector("form");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
    // name.focus(); не робит((
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    popup.classList.remove("shake");
});


form.addEventListener("submit", function (evt) {

    evt.preventDefault();

    if ( !name.value || !email.value) {
        console.log("Форма не заполнена");
        popup.classList.add("shake");
    } else {
        console.log("Форма отправлена")
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal__show")) {
            popup.classList.remove("modal__show");
        }
    }
});
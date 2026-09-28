import { wyswietlUmiejetnosci } from "./display-skills.js";

const lista = document.querySelector("#lista-umiejetnosci");
lista.innerHTML = wyswietlUmiejetnosci();

let komunikat = document.querySelector("#komunikat");

document.addEventListener("submit", (event) => {
    event.preventDefault();
    komunikat.style.color = "var(--primary)";
    let formularz = document.querySelector("form");
    const dane = Object.fromEntries(new FormData(formularz));

    const {imie, email, temat, tresc} = dane;

    if (imie.trim() === "" || email.trim() === "") {
        komunikat.textContent = "Proszę wypełnić wszystkie wymagane pola (imię i email).";
        komunikat.style.color = "var(--error)";
        return;
    }


    komunikat.textContent = `Dziękuję za wiadomość ${dane.imie} w temacie ${dane.temat}.`;
    komunikat.style.color = "var(--success)";
    document.querySelector("form").reset();
});

/**
 * Zmienia motyw strony.
 */
let zmienMotywBtn = document.querySelector("#zmien-motyw");
zmienMotywBtn.addEventListener("click", (event) => {
    if (document.documentElement.getAttribute("data-theme") === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
});
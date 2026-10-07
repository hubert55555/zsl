import { umiejetnosci } from "./data.js";
import { budujListe, filtrujPoKategorii, podsumowanie } from "./display-skills.js";

const podsumowanieEl = document.querySelector("#podsumowanie");
const filtryEl = document.querySelector("#filtry");


const pokazUmiejetnosci = (kategoria = "wszystkie") => {
    const wybrane = filtrujPoKategorii(umiejetnosci, kategoria);
    listaEl.innerHTML = budujListe(wybrane);
    podsumowanieEl.textContent = podsumowanie(wybrane);
};

const listaEl = document.querySelector("#lista-umiejetnosci");
listaEl.innerHTML = budujListe(umiejetnosci);

filtryEl.addEventListener("click", (event) => {
    const przycisk = event.target.closest("button");
    if (!przycisk) {
        return;
    }
    filtryEl.querySelectorAll("button").forEach(b =>
        b.classList.remove("aktywny"));
    przycisk.classList.add("aktywny");
    pokazUmiejetnosci(przycisk.dataset.kategoria);
});

pokazUmiejetnosci();

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
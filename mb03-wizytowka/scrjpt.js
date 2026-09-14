const umiejetnosci = [
    "C++",
    "C#",
    "Python",
    "JavaScript",
    "HTML",
    "CSS"
];

let listaUmiejetnosci = document.querySelector("#lista-umiejetnosci");
for (let umiejetnosc of umiejetnosci) {
    let li = document.createElement("li");
    li.textContent = umiejetnosc;
    listaUmiejetnosci.appendChild(li);
}

let komunikat = document.querySelector("#komunikat");

document.addEventListener("submit", function (event) {
    event.preventDefault();
    komunikat.style.color = "var(--primary)";
    let imie = document.querySelector("#imie").value;
    let email = document.querySelector("#email").value;
    let temat = document.querySelector("#temat").value;
    let wiadomosc = document.querySelector("#wiadomosc").value;

    if (imie.trim() === "" || email.trim() === "") {
        komunikat.textContent = "Proszę wypełnić wszystkie wymagane pola (imię i email).";
        komunikat.style.color = "var(--error)";
        return;
    }

    let dane = {
        imie: imie,
        email: email,
        temat: temat,
        wiadomosc: wiadomosc
    };

    komunikat.textContent = `Dziękuję za wiadomość ${dane.imie} w temacie ${dane.temat}.`;
    document.querySelector("form").reset();
});
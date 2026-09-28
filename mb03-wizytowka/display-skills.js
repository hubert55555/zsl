import { umiejetnosci } from "./data.js";

export function wyswietlUmiejetnosci() {
    let listaUmiejetnosci = document.querySelector("#lista-umiejetnosci");
    for (let umiejetnosc of umiejetnosci) {
        let li = document.createElement("li");
        li.textContent = umiejetnosc;
        listaUmiejetnosci.appendChild(li);
    }
}
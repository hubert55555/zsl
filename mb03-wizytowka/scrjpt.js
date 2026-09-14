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
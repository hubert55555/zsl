const budujListe = (tablica) =>
    tablica.map(({ model, cena }) => 
    `<li class="${cena < 1000 ? 'wyrozniony' : ''}">
        ${model} - ${cena} zł
    </li>`
).join("");

const przefiltrowane = telefony.filter(({ cena }) => cena < 2000);

const sumaCen = przefiltrowane.reduce((acc, { cena }) => acc + cena, 0);
const sredniaCena = przefiltrowane.length > 0 ? sumaCen / przefiltrowane.length : 0;

document.querySelector("#lista").innerHTML = budujListe(przefiltrowane);

document.querySelector("#podsumowanie").textContent = 
    `Liczba wyświetlonych elementów: ${przefiltrowane.length},  średnia cena: ${sredniaCena} zł`;
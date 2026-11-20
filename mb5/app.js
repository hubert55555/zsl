import { wczytaj, zapisz } from "./magazyn.js";

// Pierwsze dwa elementy process.argv to ścieżki do Node i do skryptu — pomijamy je.
const [, , komenda, argument] = process.argv;

// Wypisuje wszystkie zadania, numerowane od 1.
const pokazListe = async () => {
    const zadania = await wczytaj();
    
    if (zadania.length === 0) {
        console.log("Brak zadań.");
        return;
    }
    zadania.forEach(({ tekst, zrobione }, i) => {
        console.log(`${i + 1}. [${zrobione ? "x" : " "}] ${tekst}`);
    });
};

// Dodaje nowe zadanie na koniec listy.
const dodajZadanie = async (tekst) => {
    if (!tekst || tekst.trim() === "") {
        console.error('Błąd: podaj treść zadania, np. npm run dodaj -- "Kupić mleko"');
        return;
    }
    const zadania = await wczytaj();
    const nowe = [...zadania, { tekst: tekst.trim(), zrobione: false }];
    await zapisz(nowe);
    console.log(`Dodano zadanie nr ${nowe.length}: ${tekst.trim()}`);
};

switch (komenda) {
    case "lista":
        await pokazListe();
        break;
    case "dodaj":
        await dodajZadanie(argument);
        break;
}
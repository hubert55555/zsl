import { umiejetnosci } from "./data.js";


export const wyswietlUmiejetnosci = () =>
    umiejetnosci.map(({nazwa, poziom}) =>
        `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5" style="margin-left: 20px;">
                    ${"O".repeat(poziom)}
                    ${"o".repeat(5-poziom)}
                </span>
            </li>
            `
        ).join("");
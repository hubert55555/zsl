/**
 * Zwraca umiejętności należące do wskazanej kategorii.
 *
 * @param {Array<Object>} lista - pełna lista umiejętności
 * @param {string} kategoria - nazwa kategorii albo "wszystkie"
 * @returns {Array<Object>} nowa tablica; pusta, gdy nic nie pasuje
 */
export const filtrujPoKategorii = (lista, kategoria) =>
    kategoria === "wszystkie"
        ? [...lista]
        : lista.filter(u => u.kategoria === kategoria);


/**
 * Oblicza średni poziom umiejętności zaokrąglony do jednego miejsca po przecinku.
 *
 * @param {Array<Object>} lista - umiejętności z polem poziom
 * @returns {number} średni poziom; 0, gdy lista jest pusta
 */
export const sredniPoziom = (lista) => {
    if (lista.length === 0) {
        return 0;
    }

    const suma = lista.reduce((razem, { poziom }) => razem + poziom,
        0);
    return Math.round((suma / lista.length) * 10) / 10;
};


/**
 * Tworzy tekst z liczbą umiejętności i ich średnim poziomem.
 *
 * @param {Array<Object>} lista - umiejętności do podsumowania
 * @returns {string} tekst podsumowania; komunikat o braku umiejętności, gdy lista jest pusta
 */
export const podsumowanie = (lista) =>
    lista.length === 0
        ? "Brak umiejętności w tej kategorii."
        : `Umiejętności: ${lista.length} · średni poziom:
${sredniPoziom(lista)}`;


/**
 * Buduje kod HTML elementów listy z nazwą umiejętności i poziomem pokazanym kółkami.
 *
 * @param {Array<Object>} lista - umiejętności do wyświetlenia
 * @returns {string} kod HTML elementów li; pusty napis, gdy lista jest pusta
 */
export const budujListe = (lista) =>
    lista.map(({nazwa, poziom}) =>
        `
            <li>
                <span class="nazwa">${nazwa}</span>
                <span class="poziom" title="Poziom ${poziom} z 5" style="margin-left: 20px;">
                    ${"●".repeat(poziom)}${"○".repeat(5-poziom)}
                </span>
            </li>
            `
        ).join("");
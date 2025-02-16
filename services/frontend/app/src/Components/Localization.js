import { useState, useEffect } from "react";
import LocalizedStrings from "react-localization";
import { FetchLang } from "./FetchLang";

let localizationInstance = new LocalizedStrings({fi: {}});
let isLoaded = false; // Muuttuja latauksen tilan seuraamiseen

async function fetchLanguage(lang = "fi") {
    if (!isLoaded) {
        try {
            const langData = await FetchLang(lang);
            localizationInstance.setContent(langData);
            isLoaded = true;
        } catch (error) {
            throw new Error(`HTTP virhe! Tila: ${error}`);
        }
    }
}

export function useLocalization(lang = "fi") {
    const [strings, setStrings] = useState(null); // Odotetaan latausta

    useEffect(() => {
        async function updateStrings() {
            await fetchLanguage(lang);
            setStrings(localizationInstance);
        }

        if (!isLoaded) {
            updateStrings();
        } else {
            setStrings(localizationInstance);
        }
    }, [lang]);

    return strings; // Jos kieli ei ole ladattu, palauttaa `null`
}

export async function getLocalization(lang = "fi") {
    await fetchLanguage(lang); // Odotetaan, että tiedot latautuvat
    return localizationInstance;
}

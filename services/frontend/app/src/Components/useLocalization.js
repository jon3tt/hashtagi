import { useState, useEffect } from "react";
import { FetchLang } from "./FetchLang";
import { useCookie } from "./Cookie";

import LocalizedStrings from "react-localization";


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

export function useLocalization() {
    const [lang, setLang] = useCookie("language", "/"); // Haetaan kieli evästeestä
    const [strings, setStrings] = useState(null);

    useEffect(() => {
        const selectedLang = lang || "fi"; // Oletuskieli "fi", jos ei löydy evästeestä

        async function updateStrings() {
            await fetchLanguage(selectedLang);
            setStrings(localizationInstance);
        }

        updateStrings();
    }, [lang]); // Lataa kielitiedoston aina, kun `lang` muuttuu

    return { strings, lang, setLang }; // Palauttaa kielitiedot ja kielen asetusfunktion
}


export async function getLocalization(lang = "fi") {
    await fetchLanguage(lang); // Odotetaan, että tiedot latautuvat
    return localizationInstance;
}

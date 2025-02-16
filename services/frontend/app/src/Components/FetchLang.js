export async function FetchLang(lang = "fi") {
    const response = await fetch(`/ui/lang/${lang}.json`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}
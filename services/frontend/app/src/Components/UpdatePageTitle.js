export function UpdatePageTitle(title){
    const pageName = document.getElementById("page-name");
    const separator = " | ";
    const titleParts = pageName.innerText.split(separator);
    pageName.innerText = titleParts[0] + separator + title;

}
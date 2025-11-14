// uiComponent.js



// Skapar rubrik
export function createHeader() {
    const h1 = document.createElement("h1");
    h1.textContent = "Välkommen till butiken!";
    return h1;
}

// Skapa input
export function createSearchInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Sök efter produkt...";
    input.id = "searchInput";
    input.setAttribute("aria-label", "Sök efter produkt");
    return input;
    
}
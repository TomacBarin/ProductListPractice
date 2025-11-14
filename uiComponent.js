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

// Visa produkter
export function createProductCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";

    article.innerHTML = `<img src="${product.image}" alt="${product.title}" loading="lazy" />
    <h3>${product.title}</h3>
    <p class="price">$${product.price}</p>`;

    return article;
}
// main.js

import { createHeader, createProductCard } from "./uiComponent.js";
import { createSearchInput } from "./uiComponent.js";
import { getProducts } from "./apiService.js";


const headerHtml = document.querySelector("#header");
const searchSectionHtml = document.querySelector("#searchSection");
const productListHtml = document.getElementById("productList");

headerHtml.appendChild(createHeader())
searchSectionHtml.appendChild(createSearchInput())

// Visa produker
async function displayProducts() {
    try {
        productListHtml.innerHTML = "<p>Laddar produkter...</p>"
        
        const products = await getProducts();
        console.log("Hämtade produkter:", products);

        productListHtml.innerHTML = "";

        // LÄGGER TILL KORT! 
        products.forEach(product => {
            const card = createProductCard(product);
            productListHtml.appendChild(card);
        })

    
        productListHtml.innerHTML = "";
    } catch (error) {
        productListHtml.innerHTML = `<p style="color: red;">Fel: ${error.message}</p>`;
    }

}

displayProducts();
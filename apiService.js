// apiService.js

export async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Kunde inte hämta produkter från servern");
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error("API-fel", error);
        throw error;
    }

}
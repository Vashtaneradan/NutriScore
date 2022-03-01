async function getNutrition(barcode) {
    let url = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
let resultContainer;
let lastResult, countResults = 0;
let html5QrcodeScanner;

async function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;

        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult);
        html5QrcodeScanner.clear();

        const responseProduct = await getNutrition(decodedText);
        const product = responseProduct.product;
        displayScannerResult(product);
        closeForm();
       }
}

function initScanner() {
    resultContainer = document.querySelector('#qr-reader-results');
    lastResult = 0;
    countResults = 0;
    html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
}

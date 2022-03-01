function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    const navItems = document.querySelectorAll('.nav__item');
    const forms = document.querySelectorAll('form');

    navItems.forEach(item => item.addEventListener('click', (e) => {
        clearClasses();
        let currentForm = document.querySelector('.form--' + e.target.dataset.form);
        currentForm.classList.add('active');
        e.target.classList.add('active');
    }));

    function clearClasses() {
        navItems.forEach(item => item.classList.remove('active'));
        forms.forEach(item => item.classList.remove('active'));
    }
});

function changeLanguage()
{
    if(document.querySelector('#lang').classList.contains('de')){
        window.location.replace('index.html');
    }
    if(document.querySelector('#lang').classList.contains('en')){
        window.location.replace('indexDE.html');
    }
}

function openForm() {
    document.querySelector('#myForm').style.display = "block";
}

function closeForm() {
    document.querySelector('#myForm').style.display = "none";
}

function displayScannerResult(product) {
    const nutriments = product.nutriments;

    document.querySelector('.scannerResult').innerHTML = `
        <p>Produkt: ${product.product_name_de}</p>
        <p>Marke: ${product.brand}</p>
        <p>Füllmenge: ${product.quantity}</p>
        <p>eco score: ${product.ecoscore_grade}</p>
        <img src="${product.image_front_small_url}" alt="product image">`
    ;

    document.querySelector('#kj').value = nutriments.energy_100g || "";
    document.querySelector('#fat').value = nutriments['saturated-fat_100g'] || "";
    document.querySelector('#sugar').value = nutriments.sugars_100g || "";
    document.querySelector('#salt').value = nutriments.salt_100g || "";

    document.querySelector('#extras').value = nutriments['fruits-vegetables-nuts-estimate-from-ingredients_100g'] || "";
    document.querySelector('#fibres').value = nutriments.fiber_100g || "";
    document.querySelector('#proteins').value = nutriments.proteins_100g || "";

    let event = new Event('change');
    document.querySelector('#kj').dispatchEvent(event);
    document.querySelector('#fat').dispatchEvent(event);
    document.querySelector('#sugar').dispatchEvent(event);
    document.querySelector('#salt').dispatchEvent(event);
    document.querySelector('#extras').dispatchEvent(event);
    document.querySelector('#fibres').dispatchEvent(event);
    document.querySelector('#proteins').dispatchEvent(event);
}
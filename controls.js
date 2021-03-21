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
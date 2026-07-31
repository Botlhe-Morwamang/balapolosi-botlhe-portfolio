console.log("Hello from my portfolio");
let name = "Balapolosi Botlhe Morwamang";
console.log("My name is " + name);
let age = 2026 - 2000;
console.log("I am " + age + " years old.");

let toggleButton = document.getElementById("nav-toggle");
let navMenu = document.querySelector("nav");

toggleButton.addEventListener("click", function() {
    navMenu.classList.toggle("nav-open");
});

let themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
const form = document.querySelector('#contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // stops the page from reloading

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const errorBox = document.querySelector('#form-error');

    if (name === '') {
        errorBox.textContent = 'Please enter your name.';
        return;
    }

    if (!email.includes('@')) {
        errorBox.textContent = 'Please enter a valid email.';
        return;
    }

    if (message === '') {
        errorBox.textContent = 'Please enter a message.';
        return;
    }

    errorBox.textContent = "Thanks! (This form doesn't actually send anywhere yet — that comes with Flask in Mission 04.)";
});
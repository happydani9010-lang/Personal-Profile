// Say Hello Button

const helloBtn = document.getElementById("helloBtn");
const helloMessage = document.getElementById("helloMessage");

helloBtn.addEventListener("click", function () {

    helloMessage.textContent = "Hello! Welcome to my profile.";

});


// Contact Form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});
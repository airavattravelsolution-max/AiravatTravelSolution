const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
}

// WhatsApp Form
const form = document.getElementById('contactForm');

if(form){
form.addEventListener('submit', function(e){
e.preventDefault();

const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;

const text = `Name: ${name}%0APhone: ${phone}%0ARequirement: ${message}`;
window.open(`https://wa.me/919167101212?text=${text}`);
});
}

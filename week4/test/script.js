const form = document.getElementById('registration-form');
const fullName = document.getElementById("full-name");
const phoneNumber = document.querySelector('#phone-number');
const email = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(fullName.value === '') {
        alert('Full name is required');
        return;
    }
    if(phoneNumber.value === '') {
        alert('Phone number is required');
        return;
    }
    // check if phonenumber contain only digit or not
    if(isNaN(phoneNumber.value)) {
        alert('Phone number is invalid');
        return;
    }
    if(phoneNumber.value.length < 10 || phoneNumber.value.length > 11) {
        alert('Phone number is invalid');
        return;
    }
    if(email.value === '') {
        alert('Email is required');
        return;
    }
    if(!email.value.includes('@')) {
        alert('Email is invalid');
        return;
    }
});
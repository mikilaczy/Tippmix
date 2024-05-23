// Globális változó a regisztrált felhasználók tárolására
let registeredUsers = {};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');

    // Bejelentkezés form megjelenítése
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
    });

    // Regisztráció form megjelenítése
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    // Regisztráció kezelése
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = signupForm.elements['new-username'].value;
        const password = signupForm.elements['new-password'].value;

        // Regisztrációs adatok mentése
        registeredUsers[username] = password;

        console.log('Regisztráció: Felhasználónév:', username, 'Jelszó:', password);
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
    });

    // Bejelentkezés form kezelése
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.elements['username'].value;
        const password = loginForm.elements['password'].value;

        // Ellenőrizzük, hogy a felhasználónév és jelszó páros szerepel-e a regisztrált felhasználók között
        if (registeredUsers.hasOwnProperty(username) && registeredUsers[username] === password) {
            console.log('Sikeres bejelentkezés: Felhasználónév:', username, 'Jelszó:', password);
            window.location.href = 'tippek.html';
        } else {
            console.log('Hibás felhasználónév vagy jelszó.');
            alert('Hibás felhasználónév vagy jelszó.');
        }
    });

    // Sikeres bejelentkezés oldal kezelése
    const emailForm = document.getElementById('email-form');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailForm.elements['email'].value;
        console.log('E-mail elküldve a következő címre:', email);
        alert('Az e-mail elküldve a következő címre: ' + email);
    });
});


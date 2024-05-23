// Egyszerű objektum a regisztrált felhasználók tárolására
const registeredUsers = {};

// Regisztráció funkció
function register(username, password) {
    if (registeredUsers.hasOwnProperty(username)) {
        console.log('Ez a felhasználónév már foglalt.');
        return false;
    } else {
        registeredUsers[username] = password;
        console.log('Sikeres regisztráció. Felhasználónév:', username);
        return true;
    }
}

// Bejelentkezés funkció
function login(username, password) {
    if (registeredUsers.hasOwnProperty(username)) {
        if (registeredUsers[username] === password) {
            console.log('Sikeres bejelentkezés. Üdvözöllek,', username);
            return true;
        } else {
            console.log('Hibás jelszó.');
            return false;
        }
    } else {
        console.log('Nincs ilyen felhasználó regisztrálva.');
        return false;
    }
}

// Példa regisztráció és bejelentkezés
register('user1', 'password1');
register('user2', 'password2');
login('user1', 'password1');
login('user1', 'password2');
login('user3', 'password3'); // Nem létező felhasználó

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
        // Itt hajtható végre a regisztrációs logika, például AJAX hívás a szerver felé
        console.log('Regisztráció: Felhasználónév:', username, 'Jelszó:', password);
        // További logika a sikeres regisztráció kezelésére, pl. átirányítás a bejelentkezésre
        // Frissítés az új regisztrációs adatokkal
        registeredUsers[username] = password;
        // Bejelentkezés form megjelenítése a regisztráció után
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
    });
});

// Bejelentkezés form kezelése
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;
    // Itt hajtható végre a bejelentkezési logika, például AJAX hívás a szerver felé
    console.log('Bejelentkezés: Felhasználónév:', username, 'Jelszó:', password);
    // Átirányítás a sikeres bejelentkezés oldalra
    window.location.href = 'index2.html';
});

// Sikeres bejelentkezés oldal kezelése
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-form');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailForm.elements['email'].value;
        // Itt hajtható végre az e-mail küldése, például AJAX hívás a szerver felé
        console.log('E-mail elküldve a következő címre:', email);
        // Itt átirányíthatod az oldalt vagy más lépéseket hajthatsz végre
        alert('Az e-mail elküldve a következő címre: ' + email);
    });
});


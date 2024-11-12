// login.js

// Liste des utilisateurs pour le test (à remplacer par une base de données ou un système d'authentification réel)
// Liste des utilisateurs pour le test (à remplacer par une base de données ou un système d'authentification réel)
const users = [
    { email: 'test1@example.com', password: 'password123', username: 'menuisier1' },
    { email: 'test2@example.com', password: 'password456', username: 'menuisier2' },
    { email: 'test3@example.com', password: 'password789', username: 'menuisier3' },
    { email: 'test4@example.com', password: 'passwordabc', username: 'menuisier4' },
    { email: 'test5@example.com', password: 'passworddef', username: 'menuisier5' }
];

// Fonction de connexion avec des messages pour le débogage
function loginUser(email, password) {
    console.log("Tentative de connexion avec l'email : ", email, " et le mot de passe : ", password);
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        console.log("Utilisateur trouvé :", user);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', user.username);
        window.location.href = 'home.html'; // Redirige vers la page d'accueil
    } else {
        console.log("Utilisateur non trouvé ou informations incorrectes.");
        alert('Informations de connexion incorrectes.');
    }
}

// Gérer la soumission du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    loginUser(email, password); // Appel de la fonction de connexion
});


// Fonction de gestion de l'inscription
function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

    alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    window.location.href = 'index.html';
}

// Fonction de gestion de la connexion
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (email === registeredEmail && password === registeredPassword) {
        alert("Connexion réussie !");
        window.location.href = 'home.html';
    } else {
        alert("Informations de connexion incorrectes.");
    }
}

// Associer l'événement de soumission au formulaire d'inscription et de connexion
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

});


// Gestion du formulaire de connexion
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêche l'envoi du formulaire
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            loginUser(email, password); // Vérifie les informations
        });
    }
});
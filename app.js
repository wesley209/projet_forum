// app.js

// Données utilisateur simulées
const users = [
    { email: 'test@example.com', password: 'password123', username: 'menuisier1' }
];

// Déconnexion de l'utilisateur
function logoutUser() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html'; // Redirection vers la page de connexion
}

// Vérifier si l'utilisateur est connecté
function checkIfLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Rediriger l'utilisateur non connecté vers la page de connexion
function redirectIfNotLoggedIn() {
    if (!checkIfLoggedIn()) {
        window.location.href = 'index.html';
    }
}

// Afficher le nom de l'utilisateur sur la page d'accueil
function displayUsername() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }
}

// Initialiser les vérifications et les affichages
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('homePage')) {
        redirectIfNotLoggedIn();
        displayUsername();
    }
});

function createPost() {
    // Code pour ajouter un nouveau post (à implémenter)
    alert("Nouvelle publication ajoutée !");
}

function toggleLike(icon) {
    icon.classList.toggle('liked');
}

function toggleComments(icon) {
    const commentsSection = icon.closest('.post').querySelector('.comments');
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(button) {
    const commentText = button.previousElementSibling.value;
    if (commentText) {
        const commentsSection = button.closest('.post').querySelector('.comments');
        const newComment = document.createElement('p');
        newComment.innerHTML = `<strong>menuisier1:</strong> ${commentText}`;
        commentsSection.appendChild(newComment);
        button.previousElementSibling.value = '';
    }
}


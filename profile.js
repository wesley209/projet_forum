// Sélectionne les éléments nécessaires
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');
const postImageInput = document.getElementById('postImageInput');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
const imagePreview = document.getElementById('imagePreview');

// Charger les publications existantes depuis le stockage local lors du chargement de la page
window.onload = loadPosts;

// Fonction pour afficher un aperçu de l'image
postImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreviewContainer.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Fonction pour créer une nouvelle publication
function createPost() {
    const content = postContent.value.trim(); // Récupère le contenu du textarea
    const imageSrc = imagePreview.src; // Récupère la source de l'image (base64) si une image est sélectionnée

    if (content || imageSrc) { // Vérifie qu'il y a du contenu ou une image
        const post = {
            content: content,
            image: imageSrc || null, // Ajoute l'image seulement si elle est sélectionnée
            date: new Date().toLocaleString()
        };

        // Sauvegarder la publication dans le stockage local
        savePost(post);

        // Afficher la nouvelle publication
        displayPost(post);

        // Réinitialiser le formulaire
        postContent.value = '';
        imagePreviewContainer.style.display = "none";
        postImageInput.value = ''; // Reset le champ d'upload d'image
    }
}

// Fonction pour sauvegarder une publication dans le stockage local
function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Fonction pour charger et afficher toutes les publications
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => displayPost(post));
}

// Fonction pour afficher une publication dans le DOM
function displayPost(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    // Crée l'élément HTML pour la publication
    postElement.innerHTML = `
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Image de la publication" style="max-width: 100%; margin-top: 10px;">` : ''}
        <span>${post.date}</span>
    `;

    postsContainer.appendChild(postElement);
}

function loadUserProfile() {
    const currentUserEmail = localStorage.getItem('currentUser');
    const currentUser = users.find(u => u.email === currentUserEmail);

    if (currentUser) {
        document.getElementById('profile-username').textContent = currentUser.username;
        displayUserPosts(currentUser.posts);
    }
}


// Gestion de l'aperçu de l'image de profil
const profileImageInput = document.getElementById('profileImageInput');
const profileImage = document.getElementById('profileImage');

profileImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


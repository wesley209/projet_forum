// feed.js

// Tableau pour stocker les publications
let posts = [];

// Fonction pour créer un nouveau post
function createPost() {
    const content = document.getElementById('newPostContent').value;
    if (content.trim() === "") return alert("Veuillez écrire quelque chose !");

    const newPost = {
        id: posts.length + 1,
        content: content,
        likes: 0,
        hasLiked: false,
        comments: []
    };

    posts.unshift(newPost); // Ajouter au début du tableau pour les posts les plus récents
    document.getElementById('newPostContent').value = ""; // Vider le champ de texte
    renderPosts();
}

// Fonction pour afficher les posts
function renderPosts() {
    const postFeed = document.getElementById('postFeed');
    postFeed.innerHTML = ""; // Vider le fil d'actualité pour le recréer

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <span class="like-button" onclick="toggleLike(${post.id})">
                    ❤️ ${post.likes} J'aime
                </span>
                <span class="comment-button" onclick="showCommentBox(${post.id})">💬 Commenter</span>
            </div>
            <div class="comment-section" id="comments-${post.id}">
                ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                <div class="comment-box" style="display: none;">
                    <input type="text" placeholder="Votre commentaire..." onkeydown="addComment(event, ${post.id})">
                </div>
            </div>
        `;

        postFeed.appendChild(postElement);
    });
}

// Fonction pour gérer les likes
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post.hasLiked) {
        post.likes--;
        post.hasLiked = false;
    } else {
        post.likes++;
        post.hasLiked = true;
    }
    renderPosts();
}

// Fonction pour afficher la zone de commentaire
function showCommentBox(postId) {
    const commentBox = document.querySelector(`#comments-${postId} .comment-box`);
    commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
}

// Fonction pour ajouter un commentaire
function addComment(event, postId) {
    if (event.key === "Enter") {
        const comment = event.target.value;
        if (comment.trim() !== "") {
            const post = posts.find(p => p.id === postId);
            post.comments.push(comment);
            event.target.value = ""; // Vider le champ de commentaire
            renderPosts();
        }
    }
}

// Initialiser le fil d'actualité
renderPosts();

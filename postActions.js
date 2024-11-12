// Fonction pour liker un post
function likePost(button) {
    const likeCount = button.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
}

// Fonction pour afficher/masquer la section de commentaire
function toggleCommentSection(button) {
    const commentSection = button.closest('.post').querySelector('.comment-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

// Fonction pour ajouter un commentaire
function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentsContainer = button.closest('.post').querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsContainer.appendChild(newComment);
        commentInput.value = ''; // Clear input after posting
    } else {
        alert('Veuillez entrer un commentaire avant de publier.');
    }
}

// Enregistrement des likes pour chaque utilisateur (simulateur)
const likedPosts = new Set();

// Fonction pour liker un post
function likePost(element) {
    const postId = element.closest('.post').getAttribute('data-post-id');

    if (!likedPosts.has(postId)) {
        const likeCount = element.nextElementSibling;
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = count;

        // Ajout du post aux likes de l'utilisateur
        likedPosts.add(postId);
        element.classList.add('liked'); // Changer l'icône pour indiquer le like
    } else {
        alert("Vous avez déjà liké cette publication.");
    }
}

// Fonction pour afficher/masquer la section de commentaire
function toggleCommentSection(element) {
    const commentSection = element.closest('.post').querySelector('.comment-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

// Fonction pour ajouter un commentaire
function addComment(button) {
    const commentInput = button.previousElementSibling;
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentsContainer = button.closest('.post').querySelector('.comments');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentsContainer.appendChild(newComment);
        commentInput.value = ''; // Vider le champ après la publication
    } else {
        alert('Veuillez entrer un commentaire avant de publier.');
    }
}

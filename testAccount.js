// Création de cinq comptes de test
const testAccounts = [
    { username: "Menuisier1", email: "menuisier1@test.com", password: "password1" },
    { username: "Menuisier2", email: "menuisier2@test.com", password: "password2" },
    { username: "Menuisier3", email: "menuisier3@test.com", password: "password3" },
    { username: "Menuisier4", email: "menuisier4@test.com", password: "password4" },
    { username: "Menuisier5", email: "menuisier5@test.com", password: "password5" }
];

// Fonction pour enregistrer les comptes dans le stockage local
function initializeTestAccounts() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(testAccounts));
        console.log("Comptes de test créés avec succès !");
    } else {
        console.log("Les comptes de test existent déjà.");
    }
}

// Initialiser les comptes de test
initializeTestAccounts();

// Funktion, um den URL-Parameter auszulesen
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Den Rezept-Parameter aus der URL holen
const recipeId = getUrlParameter('recipe');

// JSON-Datei laden
fetch('rezepte.json')
    .then(response => response.json())
    .then(recipes => {
        const recipe = recipes.find(r => r.id === recipeId);  // Rezept anhand der ID finden

        if (recipe) {
            // Rezeptdaten in die Detailseite einfügen
            const container = document.getElementById('recipeDetail');
            container.innerHTML = `
                <h1>${recipe.title}</h1>
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <h2>Zutaten</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h2>Zubereitung</h2>
                <ol>
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            `;
        } else {
            console.error('Rezept nicht gefunden!');
            document.getElementById('recipeDetail').innerHTML = '<p>Rezept nicht gefunden.</p>';
        }
    })
    .catch(error => {
        console.error('Fehler:', error);
        document.getElementById('recipeDetail').innerHTML = '<p>Fehler beim Laden der Rezeptdetails.</p>';
    });

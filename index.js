// Container-Element abrufen
const recipeContainer = document.getElementById('recipeContainer');

// Funktion zum Anzeigen der Rezepte
function displayRecipes(recipes) {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = ''; // Container leeren, falls nötig
    recipes.forEach(recipe => {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        tile.innerHTML = `
            <div class="tile-picture">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="tile-text">
                <h3>${recipe.title}</h3>
                <a href="${recipe.link}">zum Rezept</a>
            </div>
        `;

        container.appendChild(tile);
    });
}

// Rezepte aus JSON laden und die Anzeige starten
fetch('rezepte.json')
    .then(response => response.json())
    .then(recipes => {
        const container = document.getElementById('recipeContainer');
        recipes.forEach(recipe => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerHTML = `
                <div class="tile-picture">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="tile-text">
                    <h3>${recipe.title}</h3>
                    <!-- Detail-Link führt auf die einzige Detailseite mit einem Rezept-ID-Parameter -->
                    <a href="rezeptDetailSeite.html?recipe=${recipe.id}">Zum Rezept</a>
                </div>
            `;
            container.appendChild(tile);
        });
    })
    .catch(error => {
        console.error('Fehler:', error);
        const container = document.getElementById('recipeContainer');
        container.innerHTML = '<p>Rezepte konnten nicht geladen werden.</p>';
    });




//###### Overlay ########
document.addEventListener("DOMContentLoaded", function() {
    const openOverlayButton = document.getElementById("openOverlay");
    const closeOverlayButton = document.getElementById("closeOverlay");
    const overlay = document.getElementById("overlay");

    if (openOverlayButton) {
        openOverlayButton.onclick = function(event) {
            event.preventDefault();
            overlay.style.display = "block";
            console.log("Overlay geöffnet"); // Testausgabe
        }
    } else {
        console.error("Element mit ID 'openOverlay' nicht gefunden.");
    }

    if (closeOverlayButton) {
        closeOverlayButton.onclick = function() {
            overlay.style.display = "none";
            console.log("Overlay geschlossen"); // Testausgabe
        }
    } else {
        console.error("Element mit ID 'closeOverlay' nicht gefunden.");
    }

    window.onclick = function(event) {
        if (event.target == overlay) {
            overlay.style.display = "none";
            console.log("Overlay durch Klick außerhalb geschlossen"); // Testausgabe
        }
    }
});



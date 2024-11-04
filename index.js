//###### Rezeptliste ########
const recipes = [
    {
        title: "Bauerneintopf",
        image: "/images/gemueseeintopf-mit-wintergemuese-featured-720x720.jpg",
        link: "rezeptseite.html"
    },
    {
        title: "Gemüseauflauf",
        image: "/images/gemueseauflauf_1.jpg",
        link: "#"
    },
    {
        title: "Kartoffelsalat",
        image: "/images/kartoffelsalat_mit_joghurt_8947.jpg",
        link: "#"
    }
];

function displayRecipes() {
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
                <a href="${recipe.link}">zum Rezept</a>
            </div>
        `;

        container.appendChild(tile);
    });
}

displayRecipes();


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



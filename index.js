const recipes = [
    {
        title: "Bauerneintopf",
        image: "/images/gemueseeintopf-mit-wintergemuese-featured-720x720.jpg",
        link: "#"
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

// URL Parameter holen (?recipe=lasagne)
const params = new URLSearchParams(window.location.search);
const recipeName = params.get("recipe");

// JSON laden
fetch("recipes.json")
  .then(res => res.json())
  .then(data => {
    const recipe = data[recipeName];

    // Titel
    document.getElementById("recipe-title").textContent = recipe.title;

    // Bild
    document.getElementById("recipe-img").src = recipe.image;

    // Beschreibung
    document.getElementById("recipe-description").textContent = recipe.description;

    // Zutaten
    const ingredientsList = document.getElementById("ingredients-list");
    recipe.ingredients.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientsList.appendChild(li);
    });

    // Vorbereitung
    const prepList = document.getElementById("preparation-list");
    recipe.preparation.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      prepList.appendChild(li);
    });
    document.getElementById("recipe-tip").textContent = recipe.pro-tip;
  });
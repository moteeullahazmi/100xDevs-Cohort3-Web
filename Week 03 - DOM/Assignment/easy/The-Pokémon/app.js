document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pokemonForm");
  const cardsContainer = document.getElementById("cardsContainer");
  const categorySelect = document.getElementById("category");

  // Fetch and populate Pokémon categories
  fetch("https://pokeapi.co/api/v2/type/")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((type) => {
        const option = document.createElement("option");
        option.value = type.name;
        option.textContent =
          type.name.charAt(0).toUpperCase() + type.name.slice(1);
        categorySelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching categories:", error));

  // Form submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user inputs
    const numCards = parseInt(document.getElementById("numCards").value);
    const category = categorySelect.value;

    // Clear any previous results
    cardsContainer.innerHTML = "";

    // Fetch Pokémon based on selected category
    fetch(`https://pokeapi.co/api/v2/type/${category}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemonList = data.pokemon.slice(0, numCards); // Limit to number requested

        // Fetch details for each Pokémon
        pokemonList.forEach((pokemon) => {
          const pokemonId = pokemon.pokemon.url
            .split("/")
            .filter(Boolean)
            .pop();

          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((response) => response.json())
            .then((pokemonData) => {
              displayPokemonCard(pokemonData);
            })
            .catch((error) => console.error("Error fetching Pokémon:", error));
        });
      })
      .catch((error) =>
        console.error("Error fetching Pokémon category:", error)
      );
  });

  // Display a single Pokémon card
  function displayPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
    `;
    cardsContainer.appendChild(card);
  }
});

function searchPokemon() {
    const searchInput = getSearchInput();
    const pokemonCards = getAllPokemonCards();

    if (!highlightMatchingPokemon(pokemonCards, searchInput)) {
        handleNoMatch();
    }
}

function getSearchInput() {
    return document.querySelector(".search-input").value.toLowerCase();
}

function getAllPokemonCards() {
    return document.getElementsByClassName("pokemon-card");
}

function highlightMatchingPokemon(cards, input) {
    for (let card of cards) {
        const pokemonName = card.getAttribute("data-pokemon").toLowerCase();
        if (pokemonName.startsWith(input)) {
            highlightCard(card);
            return true; // Treffer gefunden
        }
    }
    return false; // Kein Treffer gefunden
}

function highlightCard(card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("highlight");
    setTimeout(() => card.classList.remove("highlight"), 2000);
}

function handleNoMatch() {
    alert("Pokémon nicht gefunden!");
}
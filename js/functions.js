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

function searchPokemon() {
    const searchInput = document.querySelector(".search-input").value.toLowerCase();
    if (!isValidSearch(searchInput)) return;
  
    const pokemonCards = document.querySelectorAll(".pokemon-card");
    resetHighlights(pokemonCards);
  
    const found = highlightMatchingCards(pokemonCards, searchInput);
    if (!found) console.log("Kein Pokémon gefunden!");
  }
  
  function isValidSearch(input) {
    if (input.length < 3) {
      console.log("Bitte mindestens 3 Buchstaben eingeben");
      return false;
    }
    return true;
  }
  
  function resetHighlights(cards) {
    cards.forEach((card) => card.classList.remove("highlight"));
  }
  
  function highlightMatchingCards(cards, input) {
    let found = false;
    cards.forEach((card) => {
      if (card.dataset.name.toLowerCase().startsWith(input)) {
        card.classList.add("highlight");
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        found = true;
      }
    });
    return found;
  }  

  function applyCategoryButtonColors(data) {
    const typeColor = getTypeColor(data.types[0]?.type.name || "normal");
    document.querySelectorAll(".category-button").forEach((btn) => {
      styleButton(btn, typeColor);
    });
  }
  
  function styleButton(button, color) {
    button.style.backgroundColor = color;
    button.style.color = "white";
    button.onmouseover = () => updateButtonStyle(button, "white", color);
    button.onmouseout = () => updateButtonStyle(button, color, "white");
  }
  
  function updateButtonStyle(button, bgColor, textColor) {
    button.style.backgroundColor = bgColor;
    button.style.color = textColor;
  }  

  function hideAllSections() {
    const allSections = document.querySelectorAll(".content-section");
    allSections.forEach((section) => {
      section.style.display = "none";
    });
  }

  function showCategoryContent(category) {
    hideAllSections();
    highlightActiveSection(category);
    updateActiveButton(category);
  }
  
  function highlightActiveSection(category) {
    const activeSection = document.getElementById(`${category}-content`);
    if (activeSection) {
      activeSection.style.display = "block";
    }
  }
  
  function updateActiveButton(category) {
    const allButtons = document.querySelectorAll(".category-button");
    allButtons.forEach((button) => button.classList.remove("active"));
  
    const activeButton = document.querySelector(
      `.category-button[data-category="${category}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }
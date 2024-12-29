function init() {
}

function showPokemonOverlay(pokemonElement) {
  if (removeExistingOverlay()) return;
  const { image, name, type } = getPokemonDetails(pokemonElement);
  const mappedName = pokemonNameMap[name] || "bulbasaur";
  const overlay = createOverlay(image, name, type);
  document.body.appendChild(overlay);
  loadPokemonData(mappedName);
  showCategoryContent("main");
}

async function loadPokemonData(nameOrId) {
  try {
    const pokemonData = await fetchPokemonData(nameOrId);
    const officialArtUrl = pokemonData.sprites?.other?.["official-artwork"]?.front_default;
    updateOverlayImage(officialArtUrl);
    fillMainSection(pokemonData);
    fillStatsSection(pokemonData);
    const speciesData = await fetchPokemonSpecies(nameOrId);
    const evoChainData = await fetchEvolutionChain(speciesData.evolution_chain.url);
    fillEvoChainSection(evoChainData);
  } catch (error) {
    console.error(error);
  }
}

function fillMainSection(pokemonData) {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;
  const height = pokemonData.height;
  const weight = pokemonData.weight;
  const types = pokemonData.types.map(t => t.type.name);
  const abilities = pokemonData.abilities.map(a => a.ability.name);
  mainContent.innerHTML = `
    <h3>Main</h3>
    <p>Height: ${height} dm</p>
    <p>Weight: ${weight} hg</p>
    <p>Type: <span>${types.join(", ")}</span></p>
    <p>
      Abilities: ${abilities[0] || "???"}
      <button class="info-button" onclick="showAbilityInfo('${abilities[0]}')">?</button>
    </p>
  `;
}

function fillStatsSection(pokemonData) {
  const statsContent = document.getElementById("stats-content");
  if (!statsContent) return;
  const statsArray = pokemonData.stats;
  let statsHtml = "<h3>Stats</h3>";
  const statColorMap = {
    hp: "#FF5959",
    attack: "#F5AC78",
    defense: "#FAE078",
    "special-attack": "#9DB7F5",
    "special-defense": "#A7DB8D",
    speed: "#FA92B2"
  };
  statsArray.forEach(statObj => {
    const statName = statObj.stat.name.toUpperCase();
    const statValue = statObj.base_stat;
    const percentage = Math.round((statValue / 255) * 100);
    const statKey = statObj.stat.name.toLowerCase();
    const statColor = statColorMap[statKey] || "#CCCCCC";
    statsHtml += `
      <div class="stat-bar" style="--stat-value: ${percentage}%; --stat-color: ${statColor};">
        <span class="stat-name">${statName}</span>
        <span class="stat-value">${statValue}</span>
      </div>
    `;
  });
  statsContent.innerHTML = statsHtml;
}

async function fillEvoChainSection(evoChainData) {
  const chainContainer = document.getElementById("chain-container");
  if (!chainContainer) return;
  const evoNames = extractEvolutionNames(evoChainData);
  let html = "";
  for (const evoName of evoNames) {
    const data = await fetchPokemonData(evoName);
    const artwork = data.sprites.other['official-artwork']?.front_default || "/img/placeholder.png";
    html += `
      <div class="evo-stage">
        <img src="${artwork}" alt="${evoName}">
        <p>${evoName}</p>
      </div>
    `;
  }
  chainContainer.innerHTML = html;
}

function extractEvolutionNames(evoChainData) {
  const evoNames = [];
  let current = evoChainData.chain;
  while (current) {
    evoNames.push(current.species.name);
    if (current.evolves_to && current.evolves_to.length > 0) {
      current = current.evolves_to[0];
    } else {
      current = null;
    }
  }
  return evoNames;
}

function updateOverlayImage(newImageUrl) {
  const overlayImg = document.querySelector(".pokemon-image");
  if (overlayImg && newImageUrl) {
    overlayImg.src = newImageUrl;
  }
}

function removeExistingOverlay() {
  const existingOverlay = document.getElementById("pokemon-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
    return true;
  }
  return false;
}

function getPokemonDetails(pokemonElement) {
  return {
    image: pokemonElement.querySelector("img").src,
    name: pokemonElement.querySelector("p").textContent,
    type: Array.from(pokemonElement.classList).find(cls => cls.startsWith("type-"))
  };
}

function createOverlay(image, name, type) {
  const backgroundColor = getBackgroundColor(type);
  const overlay = document.createElement("div");
  overlay.id = "pokemon-overlay";
  overlay.classList.add("overlay");
  overlay.innerHTML = `
    <div class="overlay-content" style="background-color: ${backgroundColor};">
      <div class="pokemon-display">
        <img class="pokemon-image" src="${image}" alt="${name}">
      </div>
      <div class="pokemon-info">
        <button class="close-button" onclick="closeOverlay()">X</button>
        <h2 class="pokemon-name" style="color: ${backgroundColor};">${name}</h2>
        <div class="category-buttons">
          <button class="category-button" onclick="showCategoryContent('main')" style="background-color: ${backgroundColor}; color: white;">Main</button>
          <button class="category-button" onclick="showCategoryContent('stats')" style="background-color: ${backgroundColor}; color: white;">Stats</button>
          <button class="category-button" onclick="showCategoryContent('evo-chain')" style="background-color: ${backgroundColor}; color: white;">Evo Chain</button>
        </div>
        <div class="category-content">
          <div id="main-content" class="content-section"></div>
          <div id="stats-content" class="content-section" style="display: none;"></div>
          <div id="evo-chain-content" class="content-section" style="display: none;">
            <h3>Evolution Chain</h3>
            <div class="evo-images" id="chain-container"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  return overlay;
}

function getBackgroundColor(typeClass) {
  const colors = {
    "type-plant": "#1A8755",
    "type-water": "#0D6EFD",
    "type-fire": "#E04D59",
    "type-electric": "#FFC105",
    "type-rock": "#6C757D"
  };
  return colors[typeClass] || "#FFF";
}

function closeOverlay() {
  const overlay = document.getElementById("pokemon-overlay");
  if (overlay) {
    overlay.remove();
  }
}

function showCategoryContent(category) {
  const allSections = document.querySelectorAll(".content-section");
  allSections.forEach(section => {
    section.style.display = "none";
  });
  const activeSection = document.getElementById(`${category}-content`);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

function showAbilityInfo(abilityName) {
  if (!abilityName) {
    alert("Keine Ability gefunden!");
  } else {
    alert(`${abilityName} increases the power of Grass-type moves when HP is low.`);
  }
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  init();
  renderPokemonCards(pokemonList.slice(0, 20)); // Zeige die ersten 20 Pokémon
});

// Variable zur Verfolgung des aktuellen Ladefortschritts
let loadedPokemonCount = 20; // Bereits geladene Pokémon
const loadBatchSize = 20; // Anzahl der Pokémon pro Batch
const maxLoads = 3; // Maximale Anzahl der Load More-Aktionen
let loadAttempts = 0; // Zähler für Load More-Klicks

// Funktion zur Initialisierung (falls benötigt)
function init() {
  // Event Listener für Load More Button
  document.getElementById('load-more-button').addEventListener('click', loadMorePokemon);
}

function renderPokemonCards(pokemonArray) {
  const container = document.querySelector('#pokemon-container .pokemon-row'); // Korrigierter Selektor
  if (!container) {
    console.error("Container '#pokemon-container .pokemon-row' nicht gefunden.");
    return;
  }
  console.log(`Appending ${pokemonArray.length} Pokémon-Karten zum Container.`);
  pokemonArray.forEach(pokemon => {
    const card = createPokemonCard(pokemon);
    container.appendChild(card);
  });
}

// Funktion zum Erstellen einer einzelnen Pokémon-Karte
function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card', `type-${pokemon.type}`);
  card.setAttribute('data-pokemon', pokemon.name);
  
  card.innerHTML = `
    <img src="${pokemon.img}" alt="${pokemon.name}">
    <p>${pokemon.name}</p>
  `;

  // Event Listener für die Overlay-Funktion
  card.addEventListener('click', () => showPokemonOverlay(card));

  return card;
}

// Funktion zum Laden weiterer Pokémon
async function loadMorePokemon() {
  if (loadAttempts >= maxLoads) {
    alert("Du hast das Maximum an Load-More-Vorgängen erreicht.");
    return;
  }

  // Überprüfen, ob genügend Pokémon vorhanden sind
  if (loadedPokemonCount >= pokemonList.length) {
    alert("Keine weiteren Pokémon verfügbar.");
    return;
  }

  // Erhöhe den Zähler für Load More-Aktionen
  loadAttempts++;

  // Zeige den Spinner
  showSpinner();

  // Simuliere eine Ladezeit (optional)
  // await new Promise(resolve => setTimeout(resolve, 1000));

  // Lade die nächsten 20 Pokémon
  const nextBatch = pokemonList.slice(loadedPokemonCount, loadedPokemonCount + loadBatchSize);
  
  // Warte darauf, dass alle Bilder geladen sind (optional)
  await loadImages(nextBatch.map(p => p.img));

  // Render die neuen Pokémon-Karten
  renderPokemonCards(nextBatch);

  // Aktualisiere den geladenen Pokémon-Zähler
  loadedPokemonCount += loadBatchSize;

  // Verstecke den Spinner
  hideSpinner();

  // Wenn das Maximum erreicht ist oder keine weiteren Pokémon, entferne den Button
  if (loadAttempts >= maxLoads || loadedPokemonCount >= pokemonList.length) {
    document.getElementById('load-more-button').style.display = 'none';
  }
}

// Funktion zum Anzeigen des Spinners
function showSpinner() {
  document.getElementById('spinner').style.display = 'flex';
  document.getElementById('load-more-button').disabled = true; // Button deaktivieren während des Ladens
}

// Funktion zum Verstecken des Spinners
function hideSpinner() {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('load-more-button').disabled = false; // Button wieder aktivieren
}

// Funktion zum Vorab-Laden von Bildern (optional)
function loadImages(imageUrls) {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
}

// Suchfunktion (wie bereits implementiert)
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
  let found = false;
  for (let card of cards) {
    const pokemonName = card.getAttribute("data-pokemon").toLowerCase();
    if (pokemonName.startsWith(input)) {
      highlightCard(card);
      found = true;
      break; // Nur das erste passende Pokémon hervorheben
    }
  }
  return found;
}

function highlightCard(card) {
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.classList.add("highlight");
  setTimeout(() => card.classList.remove("highlight"), 2000);
}

function handleNoMatch() {
  alert("Pokémon nicht gefunden!");
}
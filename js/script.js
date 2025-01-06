document.addEventListener("DOMContentLoaded", init);

async function init() {
  const container = document.getElementById("pokemon-container");
  const loadMoreButton = document.getElementById("load-more-button");
  let offset = 0;
  const limit = 20;
  const loadedPokemonNames = new Set();

  async function loadPokemon() {
    try {
      const sortedPokemonList = await fetchAndSortPokemonList(offset, limit);
      await processPokemonList(sortedPokemonList, offset);
      offset += limit;
    } catch (error) {
      console.error("Fehler beim Laden der Pokémon:", error);
    }
  }

  async function processPokemonList(pokemonList, startIndex) {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      if (!isDuplicatePokemon(pokemon.name)) {
        await loadPokemonData(pokemon.name, startIndex + i);
      }
    }
  }

  function isDuplicatePokemon(pokemonName) {
    return loadedPokemonNames.has(pokemonName.toLowerCase());
  }

  async function loadPokemonData(pokemonName, orderIndex) {
    try {
      const data = await fetchPokemonData(pokemonName);
      addPokemonCard(data, orderIndex);
      loadedPokemonNames.add(pokemonName.toLowerCase());
    } catch (error) {
      console.error(`Fehler beim Laden der Daten für ${pokemonName}:`, error);
    }
  }

  function addPokemonCard(data, orderIndex) {
    const card = createPokemonCard(data);
    if (card) {
      container.insertBefore(card, container.children[orderIndex] || null);
    }
  }

  // Button-Event für das Laden weiterer Pokémon
  loadMoreButton.addEventListener("click", loadPokemon);

  // Initiales Laden der Pokémon
  loadPokemon();
}

function createPokemonCard(data) {
  if (isCardExisting(data.name)) return null;
  const card = buildCardElement(data);
  addCardEventListener(card, data);
  return card;
}

function isCardExisting(name) {
  return document.querySelector(
    `.pokemon-card[data-name="${name.toLowerCase()}"]`
  );
}

function buildCardElement(data) {
  const card = document.createElement("div");
  const pokemonType = data.types[0]?.type.name || "normal";
  card.classList.add("pokemon-card", `type-${pokemonType}`);
  card.dataset.name = data.name.toLowerCase();
  card.innerHTML = `
    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" />
    <p>${data.name}</p>
  `;
  return card;
}

function addCardEventListener(card, data) {
  card.addEventListener("click", () => showPokemonOverlay(data));
}

const typeIconMap = {
  fire: "🔥",
  water: "💧",
  grass: "🌿",
  electric: "⚡",
  rock: "🪨",
  psychic: "🔮",
  ice: "❄️",
  dragon: "🐉",
  dark: "🌑",
  fairy: "✨",
  fighting: "🥊",
  poison: "☠️",
  bug: "🐛",
  ghost: "👻",
  steel: "⚙️",
  ground: "🏔️",
  normal: "⚪",
  flying: "🕊️",
};

function showPokemonOverlay(data) {
  const overlay = document.getElementById("pokemon-overlay");
  if (!overlay) {
    console.error("Overlay element not found!");
    return;
  }

  populateOverlayDetails(data); // Details des Overlays setzen
  overlay.style.display = "flex"; // Overlay sichtbar machen
  blockScroll(true); // Scrollen blockieren
  addOverlayEventListeners(); // Event-Listener für Schließen hinzufügen
}

function closeOverlay() {
  const overlay = document.getElementById("pokemon-overlay");
  if (overlay) {
    overlay.style.display = "none";
    blockScroll(false); // Scrollen wieder aktivieren
  }
}

function blockScroll(shouldBlock) {
  if (shouldBlock) {
    document.body.style.overflow = "hidden"; // Scrollen deaktivieren
    document.body.style.position = "fixed"; // Verhindert Scrollen
    document.body.style.width = "100%"; // Verhindert horizontales Scrollen
  } else {
    document.body.style.overflow = ""; // Scrollen aktivieren
    document.body.style.position = ""; // Zurücksetzen
    document.body.style.width = ""; // Zurücksetzen
  }
}
function populateOverlayDetails(data) {
  const typesWithIcons = generateTypeIcons(data.types);
  setOverlayTextContent(data, typesWithIcons);
  document.getElementById("overlay-image").src =
    data.sprites.other["official-artwork"].front_default;
  document.getElementById("stats-content").innerHTML = generateStatsHTML(
    data.stats
  );
  applyStatColors(data);
  applyCategoryButtonColors(data);
  loadEvolutionChain(data.id);
}

function generateTypeIcons(types) {
  return types
    .map((t) => `${typeIconMap[t.type.name] || "❓"} ${t.type.name}`)
    .join(", ");
}

function setOverlayTextContent(data, typesWithIcons) {
  document.getElementById("overlay-name").innerText = data.name;
  document.getElementById("overlay-type").innerHTML = `Type: ${typesWithIcons}`;
  document.getElementById("overlay-height").innerText = `Height: ${
    data.height / 10
  } m`;
  document.getElementById("overlay-weight").innerText = `Weight: ${
    data.weight / 10
  } kg`;
}

function loadEvolutionChain(pokemonId) {
  const evoChainContent = document.getElementById("evo-chain-content");
  evoChainContent.innerHTML = "<p>Loading evolution chain...</p>";

  fetchPokemonSpecies(pokemonId).then((speciesData) => {
    fetchEvolutionChain(speciesData.evolution_chain.url).then((evoData) => {
      fillEvoChainSection(evoData);
    });
  });
}

function addOverlayEventListeners() {
  const overlay = document.getElementById("pokemon-overlay");
  const overlayContent = document.querySelector(".overlay-content");
  overlay.addEventListener("click", (event) => {
    if (!overlayContent.contains(event.target)) {
      closeOverlay();
    }
  });

  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closeOverlay);
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("pokemon-overlay");
  overlay.style.display = "none"; // Overlay initial ausblenden
});

function applyDynamicColors(type) {
  const color = getTypeColor(type);
  styleCategoryButtons(color);
  styleEvolutionChain(color);
  styleStatBars(color);
}

function applyStatColors(data) {
  const primaryType = data.types[0]?.type.name || "normal";
  const typeColor = getTypeColor(primaryType);
  document.querySelectorAll(".stat-bar").forEach((bar) => {
    bar.style.setProperty("--stat-color", typeColor);
  });
}

function getTypeColor(type) {
  const typeColors = {
    water: "#0D6EFD",
    fire: "#E04D59",
    grass: "#1A8755",
    electric: "#FFC105",
    normal: "#A8A77A",
    rock: "#6C757D",
    ground: "#DA7C32",
    bug: "#A6B91A",
    ghost: "#7B62A3",
    fairy: "#EC8FE6",
    psychic: "#F95587",
    dark: "#4F4F4F",
    dragon: "#0F6AC0",
    fighting: "#D3425F",
    poison: "#A33EA1",
    ice: "#61CEC0",
    flying: "#A98FF3",
    steel: "#5A5A5A",
  };
  return typeColors[type] || "#212529";
}

function styleCategoryButtons(color) {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.style.backgroundColor = color;
    button.style.color = "white";
    button.onmouseover = () => {
      button.style.backgroundColor = "white";
      button.style.color = color;
    };
    button.onmouseout = () => {
      button.style.backgroundColor = color;
      button.style.color = "white";
    };
  });
}

function styleEvolutionChain(color) {
  document.querySelectorAll(".evo-stage img").forEach((img) => {
    img.style.borderColor = color;
  });
}

function styleStatBars(color) {
  document.querySelectorAll(".stat-bar").forEach((bar) => {
    bar.style.setProperty("--stat-color", color);
  });
}

function handleOutsideClick(event) {
  const overlayContent = document.querySelector(".overlay-content");
  if (!overlayContent.contains(event.target)) {
    closeOverlay();
  }
}

async function fillEvoChainSection(evoData) {
  const chainContainer = document.getElementById("evo-chain-content");
  if (!chainContainer) return;

  const evoNames = extractEvolutionNames(evoData);
  const evoHTML = await generateEvolutionHTML(evoNames);
  chainContainer.innerHTML = `<div class="evo-chain">${evoHTML}</div>`;
}

function extractEvolutionNames(evoChainData) {
  const evoNames = [];
  let current = evoChainData.chain;
  while (current) {
    evoNames.push(current.species.name);
    current = current.evolves_to[0] || null;
  }
  return evoNames;
}

async function generateEvolutionHTML(evoNames) {
  return Promise.all(
    evoNames.map(async (name) => {
      try {
        const data = await fetchPokemonData(name);
        return createEvolutionStageHTML(data);
      } catch (error) {
        console.error(
          `Fehler beim Laden der Evolutionsdaten für ${name}:`,
          error
        );
        return `<div class="evo-stage"><p>${name}</p></div>`;
      }
    })
  ).then((stages) => stages.join(""));
}

function createEvolutionStageHTML(data) {
  const imageUrl = data.sprites.other["official-artwork"].front_default;
  const pokemonType = data.types[0]?.type.name || "normal";
  const borderColor = getTypeBorderColor(pokemonType);

  return `
    <div class="evo-stage" style="--type-border-color: ${borderColor}; --type-border-color-hover: ${borderColor};">
      <img src="${imageUrl}" alt="${data.name}" class="evo-image" />
      <p>${data.name}</p>
    </div>
  `;
}

function getTypeBorderColor(type) {
  const typeColorMap = {
    fire: "#E04D59",
    water: "#0D6EFD",
    grass: "#1A8755",
    electric: "#FFC105",
    rock: "#6C757D",
    psychic: "#F95587",
    ice: "#61CEC0",
    dragon: "#0F6AC0",
    dark: "#4F4F4F",
    fairy: "#EC8FE6",
    fighting: "#D3425F",
    poison: "#A33EA1",
    bug: "#A6B91A",
    ghost: "#7B62A3",
    steel: "#5A5A5A",
    ground: "#DA7C32",
    normal: "#A8A77A",
    flying: "#A98FF3",
  };
  return typeColorMap[type] || "#ddd";
}

function extractEvolutionNames(evoChainData) {
  const evoNames = [];
  let current = evoChainData.chain;
  while (current) {
    evoNames.push(current.species.name);
    current = current.evolves_to[0] || null;
  }
  return evoNames;
}

function generateStatsHTML(stats) {
  const statColorMap = getStatColorMap();
  return stats.map((stat) => generateStatBar(stat, statColorMap)).join("");
}

function getStatColorMap() {
  return {
    hp: "#FF5959",
    attack: "#F5AC78",
    defense: "#FAE078",
    "special-attack": "#9DB7F5",
    "special-defense": "#A7DB8D",
    speed: "#FA92B2",
  };
}

function generateStatBar(stat, statColorMap) {
  const statName = formatStatName(stat.stat.name);
  const statValue = stat.base_stat;
  const percentage = calculatePercentage(statValue);
  const statColor = getStatColor(stat.stat.name, statColorMap);
  return createStatBarHTML(statName, statValue, percentage, statColor);
}

function formatStatName(statName) {
  return statName.toUpperCase();
}

function calculatePercentage(value) {
  return Math.round((value / 255) * 100);
}

function getStatColor(statName, statColorMap) {
  return statColorMap[statName.toLowerCase()] || "#CCCCCC";
}

function createStatBarHTML(name, value, percentage, color) {
  return `
    <div class="stat-bar" style="--stat-value: ${percentage}%; --stat-color: ${color};">
      <span class="stat-name">${name}</span>
      <span class="stat-value">${value}</span>
    </div>
  `;
}

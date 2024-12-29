const pokemonNameMap = {
  // Bestehende Zuordnungen
  Bisasam: "bulbasaur",
  Endivie: "chikorita",
  Knofensa: "bellsprout",
  Kokowei: "exeggutor",
  Schiggy: "squirtle",
  Krabby: "krabby",
  Enton: "psyduck",
  Sterndu: "staryu",
  Glumanda: "charmander",
  Vulpix: "vulpix",
  Fukano: "growlithe",
  Hunduster: "houndour",
  Pikachu: "pikachu",
  Blitza: "jolteon",
  Magnetilo: "magnemite",
  Voltobal: "voltorb",
  Kleinstein: "geodude",
  Kabuto: "kabuto",
  Digda: "diglett",
  Onyx: "onix",

  // Neue Zuordnungen aus deiner aktuellen `pokemonList`
  Evoli: "eevee",
  Pummeluff: "jigglypuff",
  Abra: "abra",
  Machollo: "machop",
  Tentacha: "tentacool",
  Rettan: "gastly",
  Piepi: "clefairy",
  Zubat: "zubat",
  Smettbo: "scyther",
  Rattfratz: "rattata",
  Simsala: "alakazam",
  Ponita: "ponyta",
  Kleiner: "meowth",
  Schnappi: "totodile",
  Flamara: "flareon",
  Falkner: "fearow",
  Machomei: "machamp",
  Knogga: "rhydon",
  Mauzi: "persian",
  Rattikarl: "raticate",
  Skarmory: "skarmory",
  Schorpio: "scizor",
  Tauros: "tauros",
  Venusaure: "venusaur",
  Glurak: "charizard",
  Aquana: "vaporeon",
  Magnezone: "magnezone",
  Geowaz: "graveler",
  Rotom: "rotom",
  Gallopa: "rapidash",
  Gengar: "gengar",
  Arbok: "arbok",
  Tentoxa: "tentacruel",
  Lapras: "lapras",
};

function getBackgroundColor(type) {
  const colors = {
    "plant": "#1A8755",
    "water": "#0D6EFD",
    "fire": "#E04D59",
    "electric": "#FFC105",
    "rock": "#6C757D",
    "dark": "#4F4F4F",
    "ghost": "#7B62A3",
    "steel": "#5A5A5A",
    "fighting": "#D3425F",
    "poison": "#A33EA1",
    "psychic": "#F95587",
    "fairy": "#EC8FE6",
    "bug": "#A6B91A",
    "flying": "#A98FF3",
    "normal": "#A8A77A",
    "ice": "#61CEC0",
    "dragon": "#0F6AC0",
    "ground": "#DA7C32",
    // Weitere Typen hinzufügen, falls benötigt
  };
  return colors[type] || "#FFFFFF"; // Standardfarbe weiß
}
  
  const pokemonList = [
  // Zusätzliche 34 Pokémon (bereinigt)
  { name: "Evoli", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", type: "normal" },
  { name: "Pummeluff", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png", type: "fairy" },
  { name: "Abra", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png", type: "psychic" },
  { name: "Machollo", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png", type: "fighting" },
  { name: "Tentacha", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png", type: "poison" },
  { name: "Rettan", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png", type: "ghost" },
  { name: "Piepi", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png", type: "fairy" },
  { name: "Zubat", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png", type: "poison" },
  { name: "Smettbo", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png", type: "bug" },
  { name: "Rattfratz", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png", type: "normal" },
  { name: "Simsala", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png", type: "psychic" },
  { name: "Ponita", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png", type: "fire" },
  { name: "Kleiner", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png", type: "normal" },
  { name: "Schnappi", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png", type: "water" }, // Annahme: Totodile
  { name: "Flamara", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png", type: "fire" }, // Flareon
  { name: "Falkner", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png", type: "flying" }, // Annahme: Fearow
  { name: "Machomei", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png", type: "fighting" }, // Machamp
  { name: "Knogga", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png", type: "rock" }, // Rhydon
  { name: "Mauzi", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png", type: "normal" }, // Persian
  { name: "Rattikarl", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png", type: "normal" }, // Raticate
  { name: "Skarmory", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png", type: "steel" },
  { name: "Schorpio", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png", type: "poison" }, // Scizor
  { name: "Tauros", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png", type: "normal" },
  { name: "Venusaure", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png", type: "plant" }, // Venusaur
  { name: "Glurak", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", type: "fire" }, // Charizard
  { name: "Aquana", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png", type: "water" }, // Vaporeon
  { name: "Magnezone", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png", type: "electric" },
  { name: "Geowaz", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png", type: "rock" }, // Graveler
  { name: "Rotom", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png", type: "electric" },
  { name: "Gallopa", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png", type: "flying" }, // Rapidash
  { name: "Gengar", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png", type: "ghost" },
  { name: "Arbok", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png", type: "poison" },
  { name: "Tentoxa", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png", type: "poison" }, // Tentacruel
  { name: "Lapras", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png", type: "water" },
];

async function fetchPokemonData(nameOrId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  if (!response.ok) {
    throw new Error(`Fehler beim Laden der Pokémon-Daten: ${response.status}`);
  }
  return response.json();
}

async function fetchPokemonSpecies(nameOrId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${nameOrId}`
  );
  if (!response.ok) {
    throw new Error(
      `Fehler beim Laden der Pokémon-Spezies: ${response.status}`
    );
  }
  return response.json();
}

async function fetchEvolutionChain(chainUrl) {
  const response = await fetch(chainUrl);
  if (!response.ok) {
    throw new Error(
      `Fehler beim Laden der Evolution-Chain: ${response.status}`
    );
  }
  return response.json();
}

async function fillEvoChainSection(evoChainData) {
  const chainContainer = document.getElementById("chain-container");
  if (!chainContainer) return;

  // Array der Evolutionsnamen, z. B. ["bulbasaur", "ivysaur", "venusaur"]
  const evoNames = extractEvolutionNames(evoChainData);

  let html = "";

  // Für jede Evolutionsstufe erneut Daten holen
  for (const evoName of evoNames) {
    // API-Call: Hole Hauptdaten des Pokémon
    const data = await fetchPokemonData(evoName);

    // Official Artwork
    const artwork =
      data.sprites.other["official-artwork"]?.front_default ||
      "/img/placeholder.png"; // Fallback-Bild

    html += `
      <div class="evo-stage">
        <img src="${artwork}" alt="${evoName}">
        <p>${evoName}</p>
      </div>
    `;
  }

  chainContainer.innerHTML = html;
}
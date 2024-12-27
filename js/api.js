const pokemonNameMap = {
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
};

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

const pokemonList = [
  // Erste 20 Pokémon
  { name: "Bisasam", img: "/img/bisasam.png", type: "plant" },
  { name: "Endivie", img: "/img/endivie.png", type: "plant" },
  { name: "Knofensa", img: "/img/knofensa.png", type: "plant" },
  { name: "Kokowei", img: "/img/kokowei.png", type: "plant" },
  { name: "Schiggy", img: "/img/schiggy.png", type: "water" },
  { name: "Krabby", img: "/img/krabby.png", type: "water" },
  { name: "Enton", img: "/img/enton.png", type: "water" },
  { name: "Sterndu", img: "/img/sterndu.png", type: "water" },
  { name: "Glumanda", img: "/img/glumanda.png", type: "fire" },
  { name: "Vulpix", img: "/img/vulpix.png", type: "fire" },
  { name: "Fukano", img: "/img/fukano.png", type: "fire" },
  { name: "Hunduster", img: "/img/hunduster.png", type: "fire" },
  { name: "Pikachu", img: "/img/pikachu.png", type: "electric" },
  { name: "Blitza", img: "/img/blitza.png", type: "electric" },
  { name: "Magnetilo", img: "/img/magnetilo.png", type: "electric" },
  { name: "Voltobal", img: "/img/voltobal.png", type: "electric" },
  { name: "Kleinstein", img: "/img/kleinstein.png", type: "rock" },
  { name: "Kabuto", img: "/img/kabuto.png", type: "rock" },
  { name: "Digda", img: "/img/digda.png", type: "rock" },
  { name: "Onyx", img: "/img/onyx.png", type: "rock" },
  { name: "Evoli", img: "/img/evoli.png", type: "normal" },
  { name: "Pummeluff", img: "/img/pummeluff.png", type: "fairy" },
  { name: "Abra", img: "/img/abra.png", type: "psychic" },
  { name: "Machollo", img: "/img/machollo.png", type: "fighting" },
  { name: "Tentacha", img: "/img/tentacha.png", type: "poison" },
  { name: "Rettan", img: "/img/rettan.png", type: "ghost" },
  { name: "Piepi", img: "/img/piepi.png", type: "fairy" },
  { name: "Zubat", img: "/img/zubat.png", type: "poison" },
  { name: "Smettbo", img: "/img/smettbo.png", type: "bug" },
  { name: "Rattfratz", img: "/img/rattfratz.png", type: "normal" },
  { name: "Simsala", img: "/img/simsala.png", type: "psychic" },
  { name: "Ponita", img: "/img/ponita.png", type: "fire" },
  { name: "Glutexo", img: "/img/glutexo.png", type: "fire" },
  { name: "Gastly", img: "/img/gastly.png", type: "ghost" },
  { name: "Porygon", img: "/img/porygon.png", type: "normal" },
  { name: "Vulpix", img: "/img/vulpix.png", type: "fire" },
  { name: "Kleiner", img: "/img/kleiner.png", type: "normal" },
  { name: "Psyduck", img: "/img/psyduck.png", type: "water" },
  { name: "Schnappi", img: "/img/schnappi.png", type: "water" },
  { name: "Flamara", img: "/img/flamara.png", type: "fire" },
  { name: "Falkner", img: "/img/falkner.png", type: "flying" },
  { name: "Machomei", img: "/img/machomei.png", type: "fighting" },
  { name: "Knogga", img: "/img/knogga.png", type: "rock" },
  { name: "Mauzi", img: "/img/mauzi.png", type: "normal" },
  { name: "Rattikarl", img: "/img/rattikarl.png", type: "normal" },
  { name: "Flegmon", img: "/img/flegmon.png", type: "water" },
  { name: "Skarmory", img: "/img/skarmory.png", type: "steel" },
  { name: "Schorpio", img: "/img/schorpio.png", type: "poison" },
  { name: "Tauros", img: "/img/tauros.png", type: "normal" },
  { name: "Venusaure", img: "/img/venusaure.png", type: "plant" },
  { name: "Glurak", img: "/img/glurak.png", type: "fire" },
  { name: "Blitza", img: "/img/blitza.png", type: "electric" },
  { name: "Aquana", img: "/img/aquana.png", type: "water" },
  { name: "Magnezone", img: "/img/magnezone.png", type: "electric" },
  { name: "Geowaz", img: "/img/geowaz.png", type: "rock" },
  { name: "Rotom", img: "/img/rotom.png", type: "electric" },
  { name: "Gallopa", img: "/img/gallopa.png", type: "flying" },
  { name: "Gengar", img: "/img/gengar.png", type: "ghost" },
  { name: "Arbok", img: "/img/arbok.png", type: "poison" },
  { name: "Tentoxa", img: "/img/tentoxa.png", type: "poison" },
  { name: "Lapras", img: "/img/lapras.png", type: "water" },
];
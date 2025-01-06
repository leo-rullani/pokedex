async function fetchPokemonList(offset = 0, limit = 20) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Fehler beim Abrufen der Pokémon-Liste: ${response.status}`
    );
  }
  const data = await response.json();
  return data.results;
}

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

async function fetchAndSortPokemonList(offset = 0, limit = 20) {
  const pokemonList = await fetchPokemonList(offset, limit);

  // Sortiere die Liste nach ID
  const sortedPokemonList = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const data = await fetchPokemonData(pokemon.name);
      return { id: data.id, name: data.name, url: pokemon.url };
    })
  );

  return sortedPokemonList.sort((a, b) => a.id - b.id); // Sortiere nach ID
}
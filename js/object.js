const pokemonList = [
  // Erste 20 Pokémon
  { id: 1, name: "Bisasam", type: "plant", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { id: 152, name: "Endivie", type: "plant", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png" },
  { id: 69, name: "Knofensa", type: "plant", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png" },
  { id: 103, name: "Kokowei", type: "plant", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png" },
  { id: 7, name: "Schiggy", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { id: 98, name: "Krabby", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png" },
  { id: 54, name: "Enton", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" },
  { id: 120, name: "Sterndu", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png" },
  { id: 4, name: "Glumanda", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { id: 37, name: "Vulpix", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png" },
  { id: 58, name: "Fukano", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png" },
  { id: 228, name: "Hunduster", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png" },
  { id: 25, name: "Pikachu", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { id: 135, name: "Blitza", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png" },
  { id: 81, name: "Magnetilo", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png" },
  { id: 100, name: "Voltobal", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png" },
  { id: 74, name: "Kleinstein", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png" },
  { id: 140, name: "Kabuto", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png" },
  { id: 50, name: "Digda", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png" },
  { id: 95, name: "Onyx", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png" },

  // Zusätzliche 40 Pokémon (insgesamt 60)
  { id: 133, name: "Evoli", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
  { id: 39, name: "Pummeluff", type: "fairy", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" },
  { id: 63, name: "Abra", type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png" },
  { id: 66, name: "Machollo", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png" },
  { id: 72, name: "Tentacha", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png" },
  { id: 355, name: "Rettan", type: "ghost", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png" },
  { id: 35, name: "Piepi", type: "fairy", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png" },
  { id: 41, name: "Zubat", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png" },
  { id: 12, name: "Smettbo", type: "bug", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png" },
  { id: 19, name: "Rattfratz", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png" },
  { id: 65, name: "Simsala", type: "psychic", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
  { id: 77, name: "Ponita", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png" },
  { id: 78, name: "Glutexo", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png" },
  { id: 92, name: "Gastly", type: "ghost", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png" },
  { id: 137, name: "Porygon", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png" },
  { id: 21, name: "Kleiner", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png" },
  { id: 54, name: "Psyduck", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" },
  { id: 209, name: "Schnappi", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png" },
  { id: 136, name: "Flamara", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png" },
  { id: 663, name: "Falkner", type: "flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png" }, // Talonflame
  { id: 68, name: "Machomei", type: "fighting", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png" },
  { id: 74, name: "Knogga", type: "rock", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png" }, // Geodude
  { id: 52, name: "Mauzi", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png" },
  { id: 20, name: "Rattikarl", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png" },
  { id: 80, name: "Flegmon", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png" },
  { id: 227, name: "Skarmory", type: "steel", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png" },
  { id: 545, name: "Schorpio", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png" },
  { id: 128, name: "Tauros", type: "normal", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png" },
  { id: 3, name: "Venusaure", type: "plant", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" },
  { id: 6, name: "Glurak", type: "fire", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
  { id: 134, name: "Aquana", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" },
  { id: 462, name: "Magnezone", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png" },
  { id: 479, name: "Rotom", type: "electric", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png" },
  { id: 78, name: "Gallopa", type: "flying", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png" }, // Rapidash
  { id: 94, name: "Gengar", type: "ghost", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
  { id: 24, name: "Arbok", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png" },
  { id: 73, name: "Tentoxa", type: "poison", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png" },
  { id: 131, name: "Lapras", type: "water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png" },
];

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card', `type-${pokemon.type}`);
  card.setAttribute('data-pokemon', pokemon.name);
  
  card.innerHTML = `
    <img src="${pokemon.img}" alt="${pokemon.name}" onerror="this.src='/img/placeholder.png'">
    <p>${pokemon.name}</p>
  `;

  // Event Listener für die Overlay-Funktion
  card.addEventListener('click', () => showPokemonOverlay(card));

  return card;
}
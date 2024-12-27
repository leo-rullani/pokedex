const pokemonList = [
  // Plant Type
  { name: "Bisasam", img: "/img/bisasam.png", type: "plant" },
  { name: "Endivie", img: "/img/endivie.png", type: "plant" },
  { name: "Knofensa", img: "/img/knofensa.png", type: "plant" },
  { name: "Kokowei", img: "/img/kokowei.png", type: "plant" },

  // Water Type
  { name: "Schiggy", img: "/img/schiggy.png", type: "water" },
  { name: "Krabby", img: "/img/krabby.png", type: "water" },
  { name: "Enton", img: "/img/enton.png", type: "water" },
  { name: "Sterndu", img: "/img/sterndu.png", type: "water" },

  // Fire Type
  { name: "Glumanda", img: "/img/glumanda.png", type: "fire" },
  { name: "Vulpix", img: "/img/vulpix.png", type: "fire" },
  { name: "Fukano", img: "/img/fukano.png", type: "fire" },
  { name: "Hunduster", img: "/img/hunduster.png", type: "fire" },

  // Electric Type
  { name: "Pikachu", img: "/img/pikachu.png", type: "electric" },
  { name: "Blitza", img: "/img/blitza.png", type: "electric" },
  { name: "Magnetilo", img: "/img/magnetilo.png", type: "electric" },
  { name: "Voltobal", img: "/img/voltobal.png", type: "electric" },

  // Rock Type
  { name: "Kleinstein", img: "/img/kleinstein.png", type: "rock" },
  { name: "Kabuto", img: "/img/kabuto.png", type: "rock" },
  { name: "Digda", img: "/img/digda.png", type: "rock" },
  { name: "Onyx", img: "/img/onyx.png", type: "rock" },
];

// Wir gehen davon aus, dass pokemonList bereits definiert ist (aus Schritt 1).
// Außerdem gibt es einen Container in der HTML mit der ID "pokemon-container".

// 1) Container referenzieren
const pokemonContainer = document.getElementById("pokemon-container");

// 2) Über das Array pokemonList iterieren und für jedes Pokémon eine Karte erstellen
pokemonList.forEach(({ name, img, type }) => {
  // 3) Ein <div> für die Karte erstellen
  const card = document.createElement("div");
  // 3a) Klassen: "pokemon-card" + dem jeweiligen Typ (z. B. "type-plant")
  card.classList.add("pokemon-card", `type-${type}`);
  // 3b) data-Attribut für den Pokémon-Namen
  card.dataset.pokemon = name;

  // 4) Klick-Event auf die Karte (Overlay anzeigen)
  card.setAttribute("onclick", "showPokemonOverlay(this)");

  // 5) Inneres HTML: Bild + Name
  card.innerHTML = `
    <img src="${img}" alt="${name}">
    <p class="pokemon-name">${name}</p>
  `;

  // 6) Karte in den Container einfügen
  pokemonContainer.appendChild(card);
});
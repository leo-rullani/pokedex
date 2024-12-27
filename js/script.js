function init() {
    // Falls etwas initialisiert werden muss
}

function init() {
    // Falls etwas initialisiert werden muss
}

function showPokemonOverlay(pokemonElement) {
    // Entferne ein vorhandenes Overlay
    if (removeExistingOverlay()) return;

    // Extrahiere die notwendigen Details des Pokémon
    const { image, name, type } = getPokemonDetails(pokemonElement);

    // Erstelle das Overlay
    const overlay = createOverlay(image, name, type);
    document.body.appendChild(overlay);

    // Standardmäßig die "Main"-Kategorie anzeigen
    showCategoryContent("main");
}

function removeExistingOverlay() {
    const existingOverlay = document.getElementById("pokemon-overlay");
    if (existingOverlay) {
        existingOverlay.remove(); // Entfernt das Overlay
        return true;
    }
    return false;
}

function getPokemonDetails(pokemonElement) {
    return {
        image: pokemonElement.querySelector("img").src, // Pokémon-Bild
        name: pokemonElement.querySelector("p").textContent, // Pokémon-Name
        type: Array.from(pokemonElement.classList).find(cls => cls.startsWith("type-")) // Typ-Klasse
    };
}

function createOverlay(image, name, type) {
    const backgroundColor = getBackgroundColor(type);
    const buttonColor = backgroundColor; // Dynamische Farbe basierend auf Typ

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
                <h2 class="pokemon-name" style="color: ${buttonColor};">${name}</h2>
                <div class="category-buttons">
                    <button class="category-button" onclick="showCategoryContent('main')" style="background-color: ${buttonColor}; color: white;">Main</button>
                    <button class="category-button" onclick="showCategoryContent('stats')" style="background-color: ${buttonColor}; color: white;">Stats</button>
                    <button class="category-button" onclick="showCategoryContent('evo-chain')" style="background-color: ${buttonColor}; color: white;">Evo Chain</button>
                </div>
                <div class="category-content">
                    <div id="main-content" class="content-section">
                        <h3>Main</h3>
                        <p>Height: 10 dm</p>
                        <p>Weight: 60 kg</p>
                        <p>Type: <span style="color: ${buttonColor};">Grass</span></p>
                        <p>
                            Abilities: Overgrow 
                            <button class="info-button" onclick="showAbilityInfo()">?</button>
                        </p>
                    </div>
                    <div id="stats-content" class="content-section" style="display: none;">
                        <h3>Stats</h3>
                        <div class="stat-bar" style="--stat-value: 80%; --stat-color: ${buttonColor};">HP: 80</div>
                        <div class="stat-bar" style="--stat-value: 60%; --stat-color: ${buttonColor};">Attack: 60</div>
                        <div class="stat-bar" style="--stat-value: 70%; --stat-color: ${buttonColor};">Defense: 70</div>
                        <div class="stat-bar" style="--stat-value: 90%; --stat-color: ${buttonColor};">Special Attack: 90</div>
                        <div class="stat-bar" style="--stat-value: 65%; --stat-color: ${buttonColor};">Special Defense: 65</div>
                        <div class="stat-bar" style="--stat-value: 50%; --stat-color: ${buttonColor};">Speed: 50</div>
                    </div>
                    <div id="evo-chain-content" class="content-section" style="display: none;">
                        <h3>Evolution Chain</h3>
                        <div class="evo-images">
                            <div class="evo-stage"><img src="/img/stage1.png" alt="Stage 1"><p>Stage 1</p></div>
                            <div class="evo-stage current"><img src="/img/stage2.png" alt="Stage 2"><p>Stage 2</p></div>
                            <div class="evo-stage"><img src="/img/stage3.png" alt="Stage 3"><p>Stage 3</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return overlay;
}

function getBackgroundColor(typeClass) {
    const colors = {
        "type-plant": "#1A8755", // Grün für Pflanzen
        "type-water": "#0D6EFD", // Blau für Wasser
        "type-fire": "#E04D59", // Rot für Feuer
        "type-electric": "#FFC105", // Gelb für Elektrizität
        "type-rock": "#6C757D" // Grau für Gestein
    };
    return colors[typeClass] || "#FFF"; // Standardfarbe
}

function closeOverlay() {
    const overlay = document.getElementById("pokemon-overlay");
    if (overlay) {
        overlay.remove(); // Entfernt das Overlay
    }
}

function showCategoryContent(category) {
    // Alle Inhalte ausblenden
    const allSections = document.querySelectorAll(".content-section");
    allSections.forEach(section => {
        section.style.display = "none";
    });

    // Nur die gewählte Kategorie anzeigen
    const activeSection = document.getElementById(`${category}-content`);
    if (activeSection) {
        activeSection.style.display = "block";
    }
}

function showAbilityInfo() {
    alert("Overgrow increases the power of Grass-type moves when the Pokémon's HP is low.");
}
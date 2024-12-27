function generateOverlayContent(pokemon) {
    return `
        <div class="pokemon-overlay-content">
            <div class="pokemon-header">
                <img src="/img/${pokemon.name}.png" alt="${pokemon.name}">
            </div>
            <div class="tab-menu">
                <button class="tab active-tab" data-category="main" onclick="switchCategory('main')">Main</button>
                <button class="tab" data-category="stats" onclick="switchCategory('stats')">Stats</button>
                <button class="tab" data-category="evo" onclick="switchCategory('evo')">Evolution Chain</button>
            </div>
            <div id="category-container">
                <div id="main" class="category active-category">
                    <h3>Main</h3>
                    <p>Height: ${pokemon.height}</p>
                    <p>Weight: ${pokemon.weight}</p>
                    <p>Base Experience: ${pokemon.baseExperience}</p>
                    <p>Abilities: ${pokemon.abilities.join(", ")}</p>
                </div>
                <div id="stats" class="category">
                    <h3>Stats</h3>
                    ${pokemon.stats
                        .map(
                            (stat) => `
                        <div class="stat">
                            <p>${stat.name}: ${stat.value}</p>
                            <div class="stat-bar"><div style="width: ${stat.value}%;"></div></div>
                        </div>`
                        )
                        .join("")}
                </div>
                <div id="evo" class="category">
                    <h3>Evolution Chain</h3>
                    <div class="evo-images">
                        <div><img src="/img/stage1.png" alt="Stage 1"><p>Bulbasaur</p></div>
                        <div><img src="/img/stage2.png" alt="Stage 2"><p>Ivysaur</p></div>
                        <div><img src="/img/stage3.png" alt="Stage 3"><p>Venusaur</p></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
async function loadCards() {
  const major = await fetch("cards/major.json").then(r => r.json());
  const minor = await fetch("cards/minor.json").then(r => r.json());
  return [...major, ...minor];
}

async function drawCard() {
  const cards = await loadCards();
  const card = cards[Math.floor(Math.random() * cards.length)];
  displayCard(card);
}

function displayCard(card) {
  const display = document.getElementById("cardDisplay");
  display.innerHTML = `
    <div class="card">
      <h2>${card.name}</h2>
      <p>${card.description}</p>
    </div>
  `;
}

document.getElementById("drawButton").addEventListener("click", drawCard);

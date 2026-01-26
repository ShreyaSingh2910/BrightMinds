const data = {
  physics: {
    title: "Physics Profile",
    score: 89,
    rank: "#3",
    played: 24,
    badge: "Motion Master"
  },
  math: {
    title: "Math Profile",
    score: 95,
    rank: "#1",
    played: 40,
    badge: "Fraction Master"
  },
  english: {
    title: "English Profile",
    score: 78,
    rank: "#4",
    played: 18,
    badge: "Word Wizard"
  },
  social: {
    title: "Social Science Profile",
    score: 72,
    rank: "#6",
    played: 15,
    badge: "History Hero"
  },
  memory: {
    title: "Memory Profile",
    score: 92,
    rank: "#2",
    played: 30,
    badge: "Memory King"
  }
};

const globalRecentGames = [
  { name: "Fraction Builder", subject: "Math" },
  { name: "Spell Bee", subject: "English" },
  { name: "Force Quiz", subject: "Science" },
  { name: "Card Flip", subject: "Memory" },
  { name: "Map Quest", subject: "Social Science" }
];

function loadGame(game, event) {
  document.querySelectorAll(".menu").forEach(m => m.classList.remove("active"));
  event.target.classList.add("active");

  const g = data[game];

  document.getElementById("gameTitle").innerText = g.title;
  document.getElementById("rank").innerText = g.rank;
  document.getElementById("played").innerText = g.played;
  document.getElementById("badge").innerText = g.badge;
  document.getElementById("scoreBig").innerText = g.score;
}

function loadGlobalRecent() {
  const ul = document.getElementById("recentGames");
  ul.innerHTML = "";

  const game =
    globalRecentGames[Math.floor(Math.random() * globalRecentGames.length)];

  const li = document.createElement("li");
  li.innerHTML = `
    ${game.name}
   
  `;
  ul.appendChild(li);
}

loadGlobalRecent();

loadGame("physics", { target: document.querySelector(".menu.active") });
loadGlobalRecent();

function goBack() {
  window.location.href = "../index.html";
}

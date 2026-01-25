const data = {
  physics: {
    title: "Physics Profile",
    score: 89,
    rank: "#3",
    played: 24,
    badge: "Motion Master",
    recent: ["Laws of Motion", "Force Quiz"]
  },
  math: {
    title: "Math Profile",
    score: 95,
    rank: "#1",
    played: 40,
    badge: "Fraction Master",
    recent: ["Fraction Builder", "Speed Math"]
  },
  english: {
    title: "English Profile",
    score: 78,
    rank: "#4",
    played: 18,
    badge: "Word Wizard",
    recent: ["Spell Bee", "Grammar Fix"]
  },
  social: {
    title: "Social Science Profile",
    score: 72,
    rank: "#6",
    played: 15,
    badge: "History Hero",
    recent: ["Map Quest", "Timeline Game"]
  },
  memory: {
    title: "Memory Profile",
    score: 92,
    rank: "#2",
    played: 30,
    badge: "Memory King",
    recent: ["Card Flip", "Pattern Match"]
  }
};

function loadGame(game) {
  document.querySelectorAll(".menu").forEach(m => m.classList.remove("active"));
  event.target.classList.add("active");

  const g = data[game];
  document.getElementById("gameTitle").innerText = g.title;
  document.getElementById("rank").innerText = g.rank;
  document.getElementById("played").innerText = g.played;
  document.getElementById("badge").innerText = g.badge;
  document.getElementById("scoreBig").innerText = g.score;

  const ul = document.getElementById("recentGames");
  ul.innerHTML = "";
  g.recent.forEach(r => {
    const li = document.createElement("li");
    li.innerText = r;
    ul.appendChild(li);
  });
}

function goBack() {
  window.history.back();
  OR: window.location.href = "../index.html";
}

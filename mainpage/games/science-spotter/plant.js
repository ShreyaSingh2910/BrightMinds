/*********************************
 🔊 AUDIO SETUP
**********************************/
const bgMusic = document.getElementById("bgMusic");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
let correctCount = 0;
const TOTAL_PARTS = document.querySelectorAll(".drop-zone").length;


bgMusic.volume = 0.30;
correctSound.volume = 1;
wrongSound.volume = 1;

let audioStarted = false;

// Unlock & start background music on first interaction
function startAudio() {
  if (audioStarted) return;
  audioStarted = true;

  // unlock sounds silently
  [correctSound, wrongSound].forEach(sound => {
    sound.muted = true;
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
      sound.muted = false;
    }).catch(() => {});
  });

  bgMusic.play().catch(() => {});
}

// Any first click/touch
window.addEventListener("pointerdown", startAudio, { once: true });

/*********************************
 🎯 DRAG & DROP LOGIC
**********************************/
let dragged = null;

document.querySelectorAll(".label").forEach(label => {
  label.addEventListener("dragstart", () => {
    dragged = label;
  });
});

document.querySelectorAll(".drop-zone").forEach(zone => {

  zone.addEventListener("dragover", e => e.preventDefault());

  zone.addEventListener("drop", () => {
    if (!dragged) return;

    const answer = zone.dataset.answer;

    // ✅ CORRECT
    if (dragged.dataset.name === answer && !zone.classList.contains("filled")) {
  zone.textContent = dragged.textContent;
  zone.classList.add("filled");

  correctSound.currentTime = 0;
  correctSound.play().catch(() => {});

  dragged.remove();
  correctCount++;

  // 🎉 SHOW CELEBRATION WHEN ALL DONE
  if (correctCount === TOTAL_PARTS) {
    setTimeout(showCelebration, 600);
  }
}
    // ❌ WRONG
    else {
      wrongSound.currentTime = 0;
      wrongSound.play().catch(() => {});
    }

    dragged = null;
  });
});

/*********************************
 ⬅ BACK BUTTON LOGIC
**********************************/
function goBack() {
  // change this to your category / topic page
  window.location.href = "topic.html";
}

/*********************************
 📘 LEARN PANEL LOGIC
**********************************/
function openLearn() {
  document.getElementById("learnPanel").classList.remove("hidden");
}

function closeLearn() {
  document.getElementById("learnPanel").classList.add("hidden");
}

function showCelebration() {
  document.getElementById("celebration").classList.remove("hidden");

  lottie.loadAnimation({
    container: document.getElementById("celebrateAnim"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/celebration2.json"
  });
}

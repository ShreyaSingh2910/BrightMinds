document.addEventListener("DOMContentLoaded", () => {

  /* 🌍 Earth */
  lottie.loadAnimation({
    container: document.getElementById("earth-bg"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/earth.json"
  });

  /* Left */
  lottie.loadAnimation({
    container: document.getElementById("left-lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/Science.json"
  });

  /* Right */
  lottie.loadAnimation({
    container: document.getElementById("right-lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "lottie/Energy-Rocket.json"
  });

  /* Entrance animation */
  gsap.timeline()
    .from(".title", { y: -60, opacity: 0, duration: 0.8 })
    .from(".card", {
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3");

  /* Corner animation */
  gsap.to(".corner.left", {
    y: -25,
    rotation: -5,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut"
  });

  gsap.to(".corner.right", {
    y: -30,
    rotation: 6,
    repeat: -1,
    yoyo: true,
    duration: 3.5,
    ease: "sine.inOut"
  });

  /* ✅ Tilt ONLY on inner */
  VanillaTilt.init(document.querySelectorAll(".card-inner"), {
    max: 10,
    speed: 500,
    glare: true,
    "max-glare": 0.2
  });

});
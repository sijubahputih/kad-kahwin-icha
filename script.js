function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").style.display = "flex";

  const music = document.getElementById("bgMusic");

  music.play().catch(function(error) {
    alert("Tekan sekali lagi untuk hidupkan lagu.");
    console.log(error);
  });
}

const weddingDate = new Date("December 20, 2026 11:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  document.getElementById("days").innerText =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerText =
    Math.floor((distance / (1000 * 60)) % 60);

  document.getElementById("seconds").innerText =
    Math.floor((distance / 1000) % 60);
}, 1000);
const flowers = document.getElementById("flowers");

for (let i = 0; i < 35; i++) {

  const flower = document.createElement("div");

  flower.classList.add("flower");

  flower.innerHTML =
["🌸","✨","🌺","❀","✦","💮"][Math.floor(Math.random()*6)];

  flower.style.left = Math.random() * 100 + "%";

  flower.style.animationDuration =
    (5 + Math.random() * 8) + "s";

  flower.style.animationDelay =
    Math.random() * 5 + "s";

  flowers.appendChild(flower);
}

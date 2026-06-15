function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").style.display = "flex";
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

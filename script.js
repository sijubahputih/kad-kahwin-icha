function openInvitation() {
  document.body.classList.add("open-door");

  const music = document.getElementById("bgMusic");

  setTimeout(function () {
    document.getElementById("cover").style.display = "none";
    document.getElementById("main").style.display = "flex";

    music.play().catch(function(error) {
      console.log(error);
    });
  }, 1800);
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
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
  document.getElementById("guestName").innerText = guest;
}
function sendRSVP() {
  const name = document.getElementById("rsvpName").value;
  const pax = document.getElementById("rsvpPax").value;
  const status = document.getElementById("rsvpStatus").value;

  if (name === "" || pax === "" || status === "") {
    alert("Sila lengkapkan nama, bilangan tetamu dan status kehadiran.");
    return;
  }

  const phone = "601135705157";

  const message =
    "Assalamualaikum, saya ingin RSVP majlis perkahwinan.%0A%0A" +
    "Nama: " + name + "%0A" +
    "Bilangan Tetamu: " + pax + "%0A" +
    "Status Kehadiran: " + status;

  const url = "https://wa.me/" + phone + "?text=" + message;

  window.open(url, "_blank");
}
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".card-box").forEach(function(card) {
  observer.observe(card);
});

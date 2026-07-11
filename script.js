
document.getElementById("groomName").innerHTML =
    wedding.groomFirst +
    "<span>" +
    wedding.groomLast +
    "</span>";

document.getElementById("brideName").innerHTML =
    wedding.brideFirst +
    "<span>" +
    wedding.brideLast +
    "</span>";

document.getElementById("groomName2").innerHTML =
    wedding.groomFirst +
    "<span>" +
    wedding.groomLast +
    "</span>";

document.getElementById("brideName2").innerHTML =
    wedding.brideFirst +
    "<span>" +
    wedding.brideLast +
    "</span>";
async function openInvitation() {
  const cover = document.getElementById("cover");
  const mainPage = document.getElementById("main");
  const introMusic = document.getElementById("introMusic");
  const mainMusic = document.getElementById("mainMusic");

  document.body.classList.add("open-door");

  try {
    introMusic.currentTime = 0;
    introMusic.volume = 0.6;
    await introMusic.play();
  } catch (error) {
    console.error("Intro gagal dimainkan:", error);
  }

  setTimeout(async function () {
    introMusic.pause();
    introMusic.currentTime = 0;

    cover.style.display = "none";
    mainPage.style.display = "flex";

    try {
      mainMusic.currentTime = 0;
      mainMusic.volume = 0.5;
      await mainMusic.play();
    } catch (error) {
      console.error("Lagu utama gagal dimainkan:", error);
      alert("Tekan butang muzik untuk memainkan lagu.");
    }
  }, 1800);
}

const weddingDate = new Date("December 19, 2026 11:00:00").getTime();

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

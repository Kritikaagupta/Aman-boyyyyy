// typing
let text = "Hey you 💖";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

// page switch
function showStep(stepId) {
  document.querySelectorAll(".box").forEach(b => b.classList.remove("active"));
  document.getElementById(stepId).classList.add("active");
}

function nextStep() { showStep("step2"); }
function nextStep2() { showStep("step3"); }

// Aman grows + other shrinks smoothly 😭💖
const aman = document.getElementById("amanBtn");
const other = document.getElementById("otherBtn");

let amanSize = 1;
let otherSize = 1;

document.addEventListener("mousemove", () => {

  if (amanSize < 1.8) {
    amanSize += 0.01;
    aman.style.transform = `scale(${amanSize})`;
  }

  if (otherSize > 0.5) {
    otherSize -= 0.01;
    other.style.transform = `scale(${otherSize})`;
  }

});

// running buttons 😂
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

// Aman click
function chooseAman() {
  showFinal();
}

// final message
function showFinal() {
  showStep("step4");

  document.getElementById("finalText").innerHTML =
    "It was always you 💖<br><br>The most precious thing in my life is you.";

  startConfetti();
}

// smooth heart confetti 💗
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  for (let i = 0; i < 80; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 12 + 6,
      speed: Math.random() * 1 + 0.3,
      angle: Math.random() * Math.PI
    });
  }

  function drawHeart(x, y, size) {
    ctx.fillStyle = "#ff6b9d";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size/2, y - size/2, x - size, y + size/3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size/3, x + size/2, y - size/2, x, y);
    ctx.fill();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      h.y += h.speed;
      h.angle += 0.01;
      h.x += Math.sin(h.angle) * 0.5;

      if (h.y > canvas.height) {
        h.y = -10;
        h.x = Math.random() * canvas.width;
      }

      drawHeart(h.x, h.y, h.size);
    });

    requestAnimationFrame(update);
  }

  update();
}

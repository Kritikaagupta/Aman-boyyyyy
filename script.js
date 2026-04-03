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

// Aman grows 💖
const amanBtn = document.getElementById("amanBtn");

function chooseAman() {
  let size = 16;

  let grow = setInterval(() => {
    size += 5;
    amanBtn.style.fontSize = size + "px";

    if (size > 65) {
      clearInterval(grow);
      showFinal();
    }
  }, 100);
}

// run buttons 😂
const otherBtn = document.getElementById("otherBtn");
const noBtn = document.getElementById("noBtn");

[otherBtn, noBtn].forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
  });
});

// final
function showFinal() {
  showStep("step4");

  document.getElementById("finalText").innerHTML =
    "It was always you 💖<br><br>The most precious thing in my life is you.";

  startConfetti();
}

// 💗 smooth heart confetti
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  for (let i = 0; i < 120; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 15 + 8,
      speed: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI
    });
  }

  function drawHeart(x, y, size) {
    ctx.fillStyle = "#ff4f81";
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
      h.angle += 0.02;
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

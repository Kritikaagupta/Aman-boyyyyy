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
  document.querySelectorAll(".box").forEach(box => {
    box.classList.remove("active");
  });
  document.getElementById(stepId).classList.add("active");
}

function nextStep() {
  showStep("step2");
}

function nextStep2() {
  showStep("step3");
}

// Aman grows 💖
const amanBtn = document.getElementById("amanBtn");

function chooseAman() {
  let size = 16;

  let grow = setInterval(() => {
    size += 5;
    amanBtn.style.fontSize = size + "px";

    if (size > 60) {
      clearInterval(grow);
      showFinal();
    }
  }, 100);
}

// other runs 😂
const otherBtn = document.getElementById("otherBtn");

otherBtn.addEventListener("mouseover", () => {
  otherBtn.style.position = "absolute";
  otherBtn.style.top = Math.random() * 80 + "%";
  otherBtn.style.left = Math.random() * 80 + "%";
});

// also make NO run
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

// final
function showFinal() {
  showStep("step4");

  document.getElementById("finalText").innerHTML =
    "It was always you 💖<br><br>The most precious thing in my life is you.";

  startConfetti();
}

// 💗 HEART CONFETTI
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
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      opacity: Math.random()
    });
  }

  function drawHeart(x, y, size, opacity) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#ff4f81";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fill();

    ctx.globalAlpha = 1;
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      h.y += h.speed;

      if (h.y > canvas.height) {
        h.y = 0;
        h.x = Math.random() * canvas.width;
      }

      drawHeart(h.x, h.y, h.size, h.opacity);
    });

    requestAnimationFrame(update);
  }

  update();
}

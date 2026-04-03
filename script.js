body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f8d7da;
  overflow: hidden;
}

/* center card */
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff0f3;
  padding: 40px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  width: 320px;
}

/* headings */
h1 {
  color: #ff4f81;
}

h2 {
  color: #444;
}

/* button */
button {
  margin-top: 15px;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, #ff4f81, #ff758c);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

.hidden {
  display: none;
}

/* floating hearts */
.hearts::before {
  content: "💖 💕 💗 💘 💝";
  position: absolute;
  font-size: 24px;
  width: 100%;
  height: 100%;
  animation: float 10s linear infinite;
  opacity: 0.4;
}

@keyframes float {
  0% { transform: translateY(100vh); }
  100% { transform: translateY(-10vh); }
}

/* confetti canvas */
#confetti {
  position: fixed;
  width: 100%;
  height: 100%;
}

const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

let mass1 = document.getElementById("mass1").value;
let mass2 = document.getElementById("mass2").value;
let distance = document.getElementById("distance").value;

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startSimulation);

function startSimulation() {
  // Lógica para iniciar la simulación con los parámetros de masa y distancia
  let x1 = 100, y1 = 300; // posición de la masa 1
  let x2 = 700, y2 = 300; // posición de la masa 2
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

  // Dibujar partículas y mostrar las trayectorias
  drawParticle(x1, y1, mass1);
  drawParticle(x2, y2, mass2);
  // Lógica de movimiento y gravedad...
}

function drawParticle(x, y, mass) {
  ctx.beginPath();
  ctx.arc(x, y, Math.sqrt(mass), 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.stroke();
}

// Función para preguntar a la IA
function askAI() {
  const userQuestion = document.getElementById("userQuestion").value;
  const aiResponse = document.getElementById("aiResponse");
  // Enlace con la API de IA, como OpenAI o TensorFlow.js
  aiResponse.innerText = "Esperando respuesta de la IA...";
}

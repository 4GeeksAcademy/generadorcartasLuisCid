function generateCard() {
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const palos = ["♠", "♦", "♥"];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const palo = palos[Math.floor(Math.random() * palos.length)];

  
  document.getElementById("card-value").textContent = valor;
  document.getElementById("card-suit-top-left").textContent = palo;
  document.getElementById("card-suit-bottom-right").textContent = palo;

  
  const color = (palo === "♦" || palo === "♥") ? "red" : "black";
  document.getElementById("card-suit-top-left").style.color = color;
  document.getElementById("card-suit-bottom-right").style.color = color;
}

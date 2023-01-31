// ESERCIZIO Palidroma -------------------------------------------------------------------------------------------------------

function palidromaFunction() {

  var inputEx1 = document.getElementById("input_ex1").value;
  var outputEx1 = document.getElementById("output_ex1");

  // Divisione parola input in una array di lettere
  let paroladivisaEx1 = inputEx1.split("");
  // Metodo reverse per invertire l'array
  paroladivisaEx1 = paroladivisaEx1.reverse();
  // Unione delle lettere nell'array invertito
  paroladivisaEx1 = paroladivisaEx1.join("");

  // Verifica se la parola invertita è uguale a quella iniziale
  if (paroladivisaEx1 == inputEx1) {
    outputEx1.innerHTML = "La parola è palindroma";
  } else {
    outputEx1.innerHTML = "La parola non è palindroma";
  }
}
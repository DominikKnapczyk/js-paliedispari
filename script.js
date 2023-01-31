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





// ESERCIZIO Pari o Dispari -------------------------------------------------------------------------------------------------------

function pari_dipariFunction() {

  var userNumber = document.getElementById("quantity").value;
  userNumber = parseInt(userNumber);
  var outputEx2 = document.getElementById("output_ex2");

  var pari_ = document.getElementById("pari");
  var dispari_ = document.getElementById("dispari");

  console.log(userNumber)

  // Verifica se l'utente ha selezionato pari o dispati 
  
  if (pari_.checked) {
   pari_ = true;
  } else if (dispari_.checked) {
    pari_ = false;
  } else {
    pari_ = null;
  }
 

  
  // Verifica se il numero dell'utente è valido
  if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    outputEx2.innerHTML = "Numero inserito non valido";
  } 
  // Verifica se il numero l'utente non ha selezionare ne pari ne dispari
  else if (pari_ == null) {
    outputEx2.innerHTML = "Seleziona pari o dispari";
  } 
  // Se l'utente non è un ........
  else {
  // Generazione numero casuale del computer
  let computerNumber = Math.floor(Math.random() * (5)) + 1;
  // Somma dei 2 numeri
  userNumber += computerNumber;
  
    // Verifica vincitore
    if (userNumber % 2 == 0 && pari_ == true) {
      outputEx2.innerHTML = "Hai vinto! Il numero che ha generato il computer è " + computerNumber + " e perciò la somma è pari " + userNumber;
    } else if (userNumber % 2 == 0 && pari_ == false) {
      outputEx2.innerHTML = "Hai Perso! Il numero che ha generato il computer è " + computerNumber + " e perciò la somma è dispari " + userNumber;
    } else if (userNumber % 2 != 0 && pari_ == true) {
      outputEx2.innerHTML = "Hai Perso! Il numero che ha generato il computer è " + computerNumber + " e perciò la somma è dispari " + userNumber;
    } else { // (userNumber % 2 != 0 && pari_ == flase)
      outputEx2.innerHTML = "Hai Vinto! Il numero che ha generato il computer è " + computerNumber + " e perciò la somma è dispari " + userNumber;
    }   
  }
}
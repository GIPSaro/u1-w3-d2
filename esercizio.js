console.dir(document);
console.dir(document.body);

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
console.log("ESERCIZIO 1");

const changeTitle = function () {
  const h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = "NEW TITLE";
};

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
console.log("ESERCIZIO 2");

const addClassToTitle = function () {
  const h1 = document.getElementsByTagName("h1")[0];
  h1.classList.add("myHeading");
  console.log(h1);
};

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
console.log("ESERCIZIO 3");
/* const p = document.querySelectorAll("div p");
  p.forEach((p) => {
    p.innerText = "NUOVO PARAGRAFO";
  });*/
const changePcontent = function () {
  const p = document.querySelectorAll("div p");
  p.forEach((element) => {
    element.innerText = "NUOVO PARAGRAFO";
  });
};
/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
console.log("ESERCIZIO 4");

const changeUrls = function () {
  const newUrl = "https://www.google.com";
  document.querySelector("a").href = newUrl;
};

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
console.log("ESERCIZIO 5");
const addToList = document.getElementById("secondList");
console.log(addToList);

const addToTheSecond = function () {
  for (let i = 0; i < addToList; i++) {
    console.log("list item", li);
  }
  addToList.appendChild(document.createTextNode("4rd"));
};

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
console.log("ESERCIZIO 6");

const addParagraph = function () {
  const newP = document.createElement("p");
  newP.appendChild(document.createTextNode("terzo paragrafo"));
  document.querySelector("div").appendChild(newP);
};
addParagraph();
/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const ul = document.getElementById("firstList");
  ul.remove();
};

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
console.log("ESERCIZIO 8");

const paintItGreen = function () {
  const ul = document.querySelectorAll("ul");
  ul.forEach((element) => {
    element.style.backgroundColor = "green";
  });
};

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
console.log("ESERCIZIO 9");

const makeItClickable = function () {
  const h1 = document.getElementsByTagName("h1")[0];
  h1.onclick = function () {
    const newH1 = h1.textContent.slice(0, -1);
    h1.innerText = newH1;
  };
};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
console.log("ESERCIZIO 10");

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.style.cursor = "pointer";
  footer.onclick = function () {
    const link = document.querySelector("footer a");
    const url = link.getAttribute("href");
    alert(url);
  };
};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
console.log("ESERCIZIO 15");

const changeColorWithRandom = function () {
  const changeColor = document.getElementById("changeMyColor");
  changeColor.onclick = function () {
    let coloreCasuale = "#" + Math.floor(Math.random() * 16777215).toString(16);
    changeColor.style.color = coloreCasuale;
  };
};
changeColorWithRandom();
/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};

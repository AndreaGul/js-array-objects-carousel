'use strict';
//dopo 3 secondi le immagini cambiano automaticamente
let avanti = setInterval(fnAvanti, 3000);
let indietro;

const back = document.getElementById('back');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

//Al click faccio scorrere le immagini
start.addEventListener('click', function () {
  clearInterval(avanti);
  clearInterval(indietro);
  avanti = setInterval(fnAvanti, 3000);
});

//Al click faccio scorrere le immagini
back.addEventListener('click', function () {
  clearInterval(indietro);
  clearInterval(avanti);
  indietro = setInterval(fnIndietro, 3000);
});

//Al click su stop fermo lo scorrimento delle immagini
stop.addEventListener('click', function () {
  clearInterval(avanti);
  clearInterval(indietro);
});

function fnAvanti() {
  // Dobbiamo tener conto della quantita di elementi contenuti in domItem per fermare lo scorrimento delle immagini una volta arrivati all'ultima

  if (elementActive < domItem.length - 1) {
    //nella posizione attuale data da domItem[elementActive] andiamo a rimuovere la classe active con classList.remove

    domItem[elementActive].classList.remove('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('on-focus');
    domSideBox[elementActive].classList.add('off-focus');
    //BONUS 2

    // arrivati a cio incrementiamo il valore di elementActive

    elementActive++;

    //e andiamo a inserire nelle classi di quest'alto elemento domItem[elmentActive] la classe active

    domItem[elementActive].classList.add('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('off-focus');
    domSideBox[elementActive].classList.remove('on-focus');
    //BONUS 2
  }

  // BONUS 1:
  // Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

  // inseriamo una condizione dove se elementActive è uguale alla lunghezza di domItem
  else if (elementActive === domItem.length - 1) {
    //All'item attuale leviamo la classe active.
    domItem[elementActive].classList.remove('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('on-focus');
    domSideBox[elementActive].classList.add('off-focus');
    //BONUS 2

    //Poniamo elementActive uguale a 0.
    elementActive = 0;

    //All'item con la classe active sarà quello in posizione 0 usando elementActive come indice di posizione nell'insieme di nodi.
    domItem[elementActive].classList.add('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('off-focus');
    domSideBox[elementActive].classList.remove('on-focus');
    //BONUS 2
  }
}

function fnIndietro() {
  // Dobbiamo tener conto della quantita di elementi contenuti in domItem per fermare lo scorrimento delle immagini una volta arrivati alla prima

  if (elementActive > 0) {
    //nella posizione attuale data da domItem[elementActive] andiamo a rimuovere la classe active con classList.remove

    domItem[elementActive].classList.remove('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('on-focus');
    domSideBox[elementActive].classList.add('off-focus');
    //BONUS 2

    // arrivati a cio decrementiamo il valore di elementActive

    elementActive--;

    //e andiamo a inserire nelle classi di quest'alto elemento domItem[elmentActive] la classe active

    domItem[elementActive].classList.add('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('off-focus');
    domSideBox[elementActive].classList.remove('on-focus');
    //BONUS 2
  }

  // BONUS 1:
  // Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

  // inseriamo una condizione dove se elementActive è uguale alla lunghezza di domItem
  else if (elementActive === 0) {
    //All'item attuale leviamo la classe active.
    domItem[elementActive].classList.remove('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('on-focus');
    domSideBox[elementActive].classList.add('off-focus');
    //BONUS 2

    //Poniamo elementActive uguale alla lunghezza del domItem
    elementActive = domItem.length - 1;

    //All'item con la classe active sarà quello in posizione (domItem.length) usando elementActive come indice di posizione nell'insieme di nodi
    domItem[elementActive].classList.add('active');

    //BONUS 2
    domSideBox[elementActive].classList.remove('off-focus');
    domSideBox[elementActive].classList.remove('on-focus');
    //BONUS 2
  }
}

const elementItems = document.querySelector('.items');

//  dichiaro una variabile che sarà definita con una array che al suo interno avra i nomi delle immagini

const banner = [
  {
    img: '01.jpg',
    title: 'titolo1',
    description: 'descrizione1',
  },
  {
    img: '02.jpg',
    title: 'titolo2',
    description: 'descrizione2',
  },
  {
    img: '03.jpg',
    title: 'titolo3',
    description: 'descrizione3',
  },
  {
    img: '04.jpg',
    title: 'titolo4',
    description: 'descrizione4',
  },
  {
    img: '05.jpg',
    title: 'titolo51',
    description: 'descrizione5',
  },
];

// prima e fuori dal ciclo for dichiaro una variabile active e la definisco con il valore 0.
let elementActive = 0;

// tramite un ciclo for posso far scorrere i valori all'interno del'array immagini cosi facendo ad ogni ciclo nel template literal ci sarà un immagine diversa
// (la quantita di cicli sarà definita dalla lunchezza dell'array immagini)

for (let i = 0; i < banner.length; i++) {
  // con un inner html nella classe items inserisco un template literal che conterra un div con classe item che a sua volta avrà un immagine al suo interno

  // Tramite una condizione all'interno del ciclo vado a inserire la classe active in item grazie alla posizione attuale data da i(contatore del ciclo) e elementActive
  if (i === elementActive) {
    elementItems.innerHTML += `
      <div class="item active">
        <img src="./img/${banner[i].img} " alt="" />
         <div class="text">
          <h2>${banner[i].title}</h2>
          <p>${banner[i].description}</p>
          </div>
      </div>
      `;
  } else {
    elementItems.innerHTML =
      elementItems.innerHTML +
      `
        <div class="item ">
          <img src="./img/${banner[i].img} " alt="" />
          <div class="text">
          <h2>${banner[i].title}</h2>
          <p>${banner[i].description}</p>
          </div>
        </div>
        `;
  }
}

// BONUS 2;
// Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.

// const elementSideBox = document.querySelector('.side-box');

//aggiunta degli elementi side-box prev e next nella pagina dopo che abbiamo inserito le immagini principali
const elementSideBox = document.createElement('div');
elementSideBox.classList.add('side-box');

elementItems.append(elementSideBox);

const elementSideBoxPrev = document.createElement('div');
elementSideBoxPrev.classList.add('prev');
const elementSideBoxNext = document.createElement('div');
elementSideBoxNext.classList.add('next');
elementSideBox.append(elementSideBoxPrev);
elementSideBox.append(elementSideBoxNext);

for (let i = 0; i < banner.length; i++) {
  // nel caso dell'immagine on-focus aggiungeremo un bordo al box piccolo

  if (i === elementActive) {
    elementSideBox.innerHTML += `
      <div class="item">
          <div class="on-focus"></div>
            <img src="./img/${banner[i].img} " alt="" />
            
          </div>
      `;
  }

  // per rendere le immmagini scure creeremo un elemento che avra una classe off-focus
  else {
    elementSideBox.innerHTML += `
      <div class="item">
          <div class="off-focus"></div>
            <img src="./img/${banner[i].img} " alt="" />
            
          </div>
      `;
  }
}

//dichiariamo una variabile domItem che sara definita con tutti gli elementi che hanno classe item

const domItem = document.querySelectorAll('.items>.item');

// Bonus 2
const domSideBox = document.querySelectorAll('.side-box> .item > div');
// BONUS 2

//BONUS 3
const domClickSideBox = document.querySelectorAll('.side-box> .item ');

for (let i = 0; i < 5; i++) {
  domClickSideBox[i].addEventListener('click', function () {
    domItem[elementActive].classList.remove('active');

    domSideBox[elementActive].classList.remove('on-focus');
    domSideBox[elementActive].classList.add('off-focus');

    elementActive = i;

    domItem[elementActive].classList.add('active');

    domSideBox[elementActive].classList.remove('off-focus');
    domSideBox[elementActive].classList.remove('on-focus');
  });
}

//BONUS 3

// utilizzando il valore di elementActive noi possiamo spostarci tra i nodi contenuti in domItem
/*Considerazioni
    grazie al loop precedente la classe active e sempre presente sul primo item  grazie al controllo fatto con elementActive
*/

//Grazie ad event listener possiamo scatenare questo evento una volta cliccata la freccia
const next = document.querySelector('.next');

next.addEventListener('click', function () {
  fnAvanti();
});

const prev = document.querySelector('.prev');

prev.addEventListener('click', function () {
  fnIndietro();
});

// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// nelle condizioni in cui cambio la posizione della classe active, possiamo rimuovere la classe off-focus e inserire la classe on-focus delle miniature a destra.
// ci creiammo anche qui una variabile domMiniature con tutte le miniature dentro e la usiamo come domItem

//PROVA MIA (non funzionante: ho cercato di scomporre il progetto in passagi per poi unirli, ma non riesco a capire dove devo ciclare l'array per poter far funzionare le varie parti)
//ho fatto diverse altre prove: ho preso la più pulita così che puoi capire dove sbaglio nella logica per potermi poi correggere

// let card = document.querySelectorAll(".card");
// console.log(card);

// let cardWon = [];
// let cardCheck = [];
// let cardOne;
// let cardTwo;

// //1 check carte

// function checkCarte(e) {
//   card = e.target;
//   card.classList.toggle("check");
//   console.log(card);
//   if (card.classList.contains("check")) {
//     card.classList.remove("hiddens");
//   }
// }
// //2 prenderne 2 e confrontarle
// function matchCarte() {
//   //function matchCarte(card)?
//   //card;??
//   for (let i = 0; i < card.length; i++) {
//     if (card[i].classList.contains("check")) {
//       cardOne = card[i];
//       cardTwo = card[i + 1];
//       cardCheck.push(cardOne);
//       cardCheck.push(cardTwo);
//       console.log(cardCheck);
//     }
//     //3 se sono uguali rimangono visibili ed entrano in un array cardWon
//     // altrimenti si rinascondono
//     if (cardOne === cardTwo) {
//       cardWon.push(cardOne);
//       cardWon.push(cardTwo);
//     } else {
//       cardOne.classList.remove("check");
//       cardTwo.classList.remove("check");
//     }
//     //4 se sono tutte nell'array cardWon allora game win
//     if (cardWon.length === card.length) {
//       alert("Hai VINTO!");
//     }
//   }
// }

// PROVA CON TUTORIAL YOUTUBE (con qualche bug da migliorare)

// const cardArray = [
//   {
//     name: "bsgloria",
//     img: "/assets/media/img1-bs.jpg",
//   },
//   {
//     name: "bsgloria",
//     img: "/assets/media/img1-bs.jpg",
//   },
//   {
//     name: "django",
//     img: "/assets/media/img2-dj.jpg",
//   },
//   {
//     name: "django",
//     img: "/assets/media/img2-dj.jpg",
//   },
//   {
//     name: "grindhouse",
//     img: "/assets/media/img3-gh.jpg",
//   },
//   {
//     name: "grindhouse",
//     img: "/assets/media/img3-gh.jpg",
//   },
//   {
//     name: "hollywood",
//     img: "/assets/media/img4-uoh.jpg",
//   },
//   {
//     name: "hollywood",
//     img: "/assets/media/img4-uoh.jpg",
//   },
//   {
//     name: "jackiebrown",
//     img: "/assets/media/img5-jb.jpg",
//   },
//   {
//     name: "jackiebrown",
//     img: "/assets/media/img5-jb.jpg",
//   },
//   {
//     name: "killbill",
//     img: "/assets/media/img6-kb.jpg",
//   },
//   {
//     name: "killbill",
//     img: "/assets/media/img6-kb.jpg",
//   },
//   {
//     name: "leiene",
//     img: "/assets/media/img7-li.jpg",
//   },
//   {
//     name: "leiene",
//     img: "/assets/media/img7-li.jpg",
//   },
//   {
//     name: "pulpfiction",
//     img: "/assets/media/img8-pf.jpg",
//   },
//   {
//     name: "pulpfiction",
//     img: "/assets/media/img8-pf.jpg",
//   },
//   {
//     name: "hateful",
//     img: "/assets/media/img9-he.jpg",
//   },
//   {
//     name: "hateful",
//     img: "/assets/media/img9-he.jpg",
//   },
//   {
//     name: "dancegif",
//     img: "assets/media/dance.gif",
//   },
//   {
//     name: "dancegif",
//     img: "assets/media/dance.gif",
//   },
// ];

// cardArray.sort(() => 0.5 - Math.random());

// const grid = document.querySelector(".grid");
// const resultDisplay = document.querySelector("#result");
// let cardChosen = [];
// let cardChosenId = [];
// let cardsWon = [];

// function createBoard() {
//   for (let i = 0; i < cardArray.length; i++) {
//     let card = document.createElement("img");
//     card.setAttribute("src", "/assets/media/img-sfondo.jpg");
//     card.setAttribute("data-id", i);
//     card.addEventListener("click", flipCard);
//     grid.appendChild(card);
//   }
// }

// function checkForMatch() {
//   let cards = document.querySelectorAll("img");
//   const optionOneId = cardChosenId[0];
//   const optionTwoId = cardChosenId[1];
//   if (cardChosen[0] === cardChosen[1]) {
//     alert("Match");
//     cards[optionOneId].setAttribute("src", "/assets/media/img-ok.jpg");
//     cards[optionTwoId].setAttribute("src", "/assets/media/img-ok.jpg");
//     cardsWon.push(cardChosen);
//   } else {
//     cards[optionOneId].setAttribute("src", "/assets/media/img-sfondo.jpg");
//     cards[optionTwoId].setAttribute("src", "/assets/media/img-sfondo.jpg");
//     alert("Try again!");
//   }
//   cardChosen = [];
//   cardChosenId = [];
//   resultDisplay.textContent = cardsWon.length;
//   if (cardsWon.length === cardArray.length / 2) {
//     resultDisplay.textContent = "You won!!";
//   }
// }

// function flipCard() {
//   let cardId = this.getAttribute("data-id");
//   cardChosen.push(cardArray[cardId].name);
//   cardChosenId.push(cardId);
//   this.setAttribute("src", cardArray[cardId].img);
//   if (cardChosen.length === 2) {
//     setTimeout(checkForMatch, 500);
//   }
// }

// createBoard();

document.addEventListener("DOMContentLoaded", () => {
  // opciones de artas
  const cardArray = [
    {
      name: "fries",
      img: "/images/fries.png",
    },
    {
      name: "fries",
      img: "/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "/images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "/images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "/images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "/images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "/images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "/images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "/images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "/images/milkshake.png",
    },
    {
      name: "pizza",
      img: "/images/pizza.png",
    },
    {
      name: "pizza",
      img: "/images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChoseId = [];
  let cardsWon = [];
  // create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "/images/bgcards.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check your matches

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChoseId[0];
    const optionTwoId = cardsChoseId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/bgcards.png");
      cards[optionTwoId].setAttribute("src", "images/bgcards.png");
    }
    cardsChosen = [];
    cardsChoseId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Felicidades Marinero!!!! encontraste todas las cartas";
    }
  }

  // flip yourCard

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChoseId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

let boton = document.getElementById("grid");
let musica = document.getElementById("song");
boton.addEventListener("click", function () {
  musica.play();
});

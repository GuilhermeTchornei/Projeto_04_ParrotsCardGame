let cardsNum = 1;
let cardsHTML = [];
const cardsStyle = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let playsCount = 0;
let selectedCards = [];
const cardsContainer = document.querySelector(".cards-container");


while (cardsNum < 4 || cardsNum > 14 ||cardsNum % 2 !== 0)
{
    cardsNum = Number(prompt("Digite o número de cartas: (Deve ser número par entre 4-14)"));
}

for (let i = 0; i < cardsNum / 2; i++)
{
    for (let x = 0; x < 2; x++)
    {
        cardsHTML.push(
            `<div class="card ${cardsStyle[i]}" onclick="turnCard(this)">
                <div>
                    <img src="./Files/back.png" class="back">
                </div>
                <div>
                    <img src="./Files/${cardsStyle[i]}parrot.gif" class="front">
                </div>
            </div>`
        );
    }
}

cardsHTML.sort(comparator);

for (let i = 0; i < cardsHTML.length; i++)
{
    cardsContainer.innerHTML += cardsHTML[i];
}

function turnCard(card) {
    if (selectedCards.length === 2 || card.classList.contains("turn")) return;

    card.classList.toggle("turn");
    playsCount++;
    selectedCards.push(card);

    if (selectedCards.length === 2)
    {
        if (selectedCards[0].classList[1] !== selectedCards[1].classList[1])
        {
            setTimeout(wrongMove, 1000);
        }
        else if (document.querySelectorAll(".turn").length === cardsNum)
        {
            setTimeout(endGame, 500);
        }
        else
        {
            selectedCards = [];
        }
    }
}

function wrongMove() {
    for (let i = 0; i < selectedCards.length; i++)
    {
        selectedCards[i].classList.toggle("turn");
    }
    selectedCards = [];
}

function endGame() {
    alert(`Você ganhou em ${playsCount} jogadas!`);
}

function comparator() {
    return Math.random() - 0.5;
}
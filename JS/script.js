const button = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");

button.addEventListener("click", function () {

    menu.classList.toggle("hidden-menu");

    if (menu.classList.contains("hidden-menu")) {
        button.textContent = "☰";
    } else {
        button.textContent = "✖️";
    }

});







const form = document.querySelector("form");

const modal = document.getElementById("tarot-modal");
const tarotResult = document.getElementById("tarot-result");
const closeButton = document.getElementById("close-modal");

const cards = [
    {
        name: "Blázon",
        image: "assets/img/blazon.jpg"
    },
    {
        name: "Mag",
        image: "assets/img/mag.jpg"
    },
    {
        name: "Veľkňažka",
        image: "assets/img/velknazka.jpg"
    },
    {
        name: "Cisárovná",
        image: "assets/img/cisarovna.jpg"
    },
    {
        name: "Cisár",
        image: "assets/img/cisar.jpg"
    },
    {
        name: "Hierofant",
        image: "assets/img/velknaz.jpg"
    },
    {
        name: "Milenci",
        image: "assets/img/milenci.jpg"
    },
    {
        name: "Voz",
        image: "assets/img/voz.jpg"
    },
    {
        name: "Sila",
        image: "assets/img/sila.jpg"
    },
    {
        name: "Pustovník",
        image: "assets/img/pustovnik.jpg"
    },
    {
        name: "Koleso šťastia",
        image: "assets/img/koleso.jpg"
    },
    {
        name: "Spravodlivosť",
        image: "assets/img/spravodlivost.jpg"
    },
    {
        name: "Obesenec",
        image: "assets/img/obesenec.jpg"
    },
    {
        name: "Smrť",
        image: "assets/img/smrt.jpg"
    },
    {
        name: "Miernosť",
        image: "assets/img/miernost.jpg"
    },
    {
        name: "Diabol",
        image: "assets/img/diavol.jpg"
    },
    {
        name: "Veža",
        image: "assets/img/veza.jpg"
    },
    {
        name: "Hviezda",
        image: "assets/img/hviezda.jpg"
    },
    {
        name: "Mesiac",
        image: "assets/img/mesiac.jpg"
    },
    {
        name: "Slnko",
        image: "assets/img/slnko.jpg"
    },
    {
        name: "Súd",
        image: "assets/img/sud.jpg"
    },
    {
        name: "Svet",
        image: "assets/img/svet.jpg"
    }
];

form.addEventListener("submit", function (event) {

    event.preventDefault();
    const name = document.getElementById("name").value;
    const randomIndex =
        Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    result.innerHTML = `
        <div class="daily-card">
            <h3>✨ Vitaj, ${name}!</h3>
            <p>Tvoja karta dňa:</p>
            <img src="${card.image}" alt="${card.name}">
            <h4>${card.name}</h4>
            <p>
                Dnes ti táto karta prináša malé posolstvo.
                Dôveruj svojej intuícii a maj krásny deň.
            </p>
            <p>🔮 Veľa šťastia! 🔮</p>
        </div>
    `;
    modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});



const oracleButton = document.querySelector(".oracle-button");
const oracleResult = document.getElementById("result");


oracleButton.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    oracleResult.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
    `;
});

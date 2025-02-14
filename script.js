(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    document.getElementById('question').innerText = "Yay! I knew it, Tiss! 💖";
    document.querySelector('.buttons').innerHTML = 
        '<button class="flower-button" onclick="showFlowerAndRedirect()">Here\'s a Flower 🌸</button>';
    document.getElementById('background-music').play();
}

// Menampilkan bunga dulu, baru redirect ke halaman lain
function showFlowerAndRedirect() {
    showFlower(); // Menampilkan bunga

    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 3000); // Redirect setelah 3 detik
}

function showFlower() {
    const flowerContainer = document.createElement("div");
    flowerContainer.classList.add("flower-container");

    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = "🌸";

    flowerContainer.appendChild(flower);
    document.body.appendChild(flowerContainer);

    // Animasi bunga mekar
    flower.style.animation = "bloom 1.5s ease-in-out forwards";

    // Efek kelopak jatuh
    for (let i = 0; i < 10; i++) {
        createFallingPetal();
    }

    setTimeout(() => flowerContainer.remove(), 3000);
}

// Fungsi untuk menampilkan kelopak jatuh
function createFallingPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.textContent = "🌸";

    document.body.appendChild(petal);

    const startPosX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2; // Antara 2-5 detik

    petal.style.left = `${startPosX}px`;
    petal.style.animation = `fall ${duration}s linear forwards`;

    setTimeout(() => petal.remove(), duration * 1000);
}

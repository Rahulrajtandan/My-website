// CHANGE DETAILS HERE 👇
const GIRL_NAME = "Riddhi";
const SPECIAL_DATE = "20 December 2025";

// Prompt Lock
window.onload = () => {
    let answer = prompt("💌 Hey Riddhi, Happy Birthday Babe😘 And I love you 💌");

    if (answer === "I love you too") {
        document.getElementById("lockScreen").style.display = "none";
        document.querySelector(".container").style.display = "flex";
        document.getElementById("playBtn").style.display = "block";

        startRain();
        startHearts();
        slideshow();
        fireworks();

        // Surprise popup after 3 sec
        setTimeout(() => {
            document.getElementById("popup").style.display = "flex";
        }, 3000);
    } else {
        alert("Wrong words 💔");
        location.reload();
    }
};

// Music
document.getElementById("playBtn").onclick = () => {
    document.getElementById("bgMusic").play();
};

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Rain
function startRain() {
    for (let i = 0; i < 35; i++) {
        let s = document.createElement("span");
        s.innerText = "Happy Birthday 🎂";
        s.style.left = Math.random() * 100 + "vw";
        s.style.animationDuration = (3 + Math.random() * 4) + "s";
        document.querySelector(".rain").appendChild(s);
    }
}

// Hearts
function startHearts() {
    setInterval(() => {
        let h = document.createElement("span");
        h.innerText = "❤️";
        h.style.left = Math.random() * 100 + "vw";
        document.querySelector(".hearts").appendChild(h);
        setTimeout(() => h.remove(), 6000);
    }, 300);
}

// Slideshow
function slideshow() {
    document.querySelectorAll(".slideshow").forEach(box => {
        let imgs = box.querySelectorAll("img");
        let i = 0;
        imgs.forEach((img, index) => img.style.display = index === 0 ? "inline-block" : "none");

        setInterval(() => {
            imgs.forEach(img => img.style.display = "none");
            imgs[i].style.display = "inline-block";
            i = (i + 1) % imgs.length;
        }, 2000);
    });
}

// Fireworks (lightweight)
function fireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 30; i++) {
            ctx.beginPath();
            ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height/2, 2, 0, Math.PI*2);
            ctx.fillStyle = "white";
            ctx.fill();
        }
    }, 400);
}

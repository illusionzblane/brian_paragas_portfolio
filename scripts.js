const smallBall = document.querySelector(".cursor__ball--small");
const bigBall = document.querySelector(".cursor__ball--big");
const projectsContainer = document.querySelector(".projectsContainer");

let smallX = 0, smallY = 0;
let bigX = 0, bigY = 0;
let targetX = 0, targetY = 0;
const yOffset = 4;

document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animateCursor() {
    smallX += (targetX - smallX) * 1;
    smallY += (targetY - smallY) * 1;

    bigX += (targetX - bigX) * 0.1; 
    bigY += (targetY - bigY) * 0.1;

    const smallBallSize = smallBall.offsetWidth / 2;
    const bigBallSize = bigBall.offsetWidth / 2;

    smallBall.style.transform = `translate(${smallX - smallBallSize}px, ${smallY - smallBallSize - yOffset}px)`;
    bigBall.style.transform = `translate(${bigX - bigBallSize}px, ${bigY - bigBallSize - yOffset}px)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Smooth scrolling for "scrollDown" button
document.querySelector(".scrollDown").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollBy({
        top: 860,
        behavior: "smooth"
    });
});
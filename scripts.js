const smallBall = document.querySelector(".cursor__ball--small");
const bigBall = document.querySelector(".cursor__ball--big");
const projectsContainer = document.querySelector(".projectsContainer");

let smallX = 0, smallY = 0;
let bigX = 0, bigY = 0;
let targetX = 0, targetY = 0;
const yOffset = 68;

document.addEventListener("mousemove", (e) => {
    targetX = e.pageX;
    targetY = e.pageY;
});

function animateCursor() {
    smallX += (targetX - smallX) * 1; // Small ball follows instantly
    smallY += (targetY - smallY) * 1;

    bigX += (targetX - bigX) * 0.1; // Big ball follows with delay
    bigY += (targetY - bigY) * 0.1;

    const smallBallSize = smallBall.offsetWidth / 2;
    const bigBallSize = bigBall.offsetWidth / 2;

    smallBall.style.transform = `translate(${smallX - smallBallSize}px, ${smallY - smallBallSize - yOffset}px)`;
    bigBall.style.transform = `translate(${bigX - bigBallSize}px, ${bigY - bigBallSize - yOffset}px)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effects to enlarge the big ball
function onMouseHover() {
    bigBall.style.transform += ' scale(4)';
}

function onMouseHoverOut() {
    bigBall.style.transform = bigBall.style.transform.replace(' scale(4)', '');
}

// Handle cursor inside and outside projectsContainer
projectsContainer.addEventListener("mouseenter", () => {
    // Keep custom cursor balls visible when inside projectsContainer
    smallBall.style.display = "block";
    bigBall.style.display = "block";
});

projectsContainer.addEventListener("mouseleave", () => {
    // Keep custom cursor balls visible when leaving projectsContainer
    smallBall.style.display = "block";
    bigBall.style.display = "block";
});

// Smooth scrolling for "scrollDown" button
document.querySelector(".scrollDown").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollBy({
        top: 100,
        behavior: "smooth"
    });
});

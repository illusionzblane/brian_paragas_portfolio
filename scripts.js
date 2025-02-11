const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');


document.body.addEventListener('mousemove', onMouseMove);
hoverables.forEach(el => {
  el.addEventListener('mouseenter', onMouseHover);
  el.addEventListener('mouseleave', onMouseHoverOut);
});


function onMouseMove(e) {
    const bigBallSize = bigBall.offsetWidth / 2; 
    const smallBallSize = smallBall.offsetWidth / 2; 
    const yOffset = 68;
  
    bigBall.style.transform = `translate(${e.pageX - bigBallSize}px, ${e.pageY - bigBallSize - yOffset}px)`;
    smallBall.style.transform = `translate(${e.pageX - smallBallSize}px, ${e.pageY - smallBallSize - yOffset}px)`;
  }
  

function onMouseHover() {
  bigBall.style.transform += ' scale(4)';
}

function onMouseHoverOut() {
  bigBall.style.transform = bigBall.style.transform.replace(' scale(4)', '');
}

document.querySelector(".scrollDown").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollBy({
        top: 100,
        behavior: "smooth"
    });
});

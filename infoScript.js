const textSection = document.getElementById("textSection");
const words = textSection.querySelectorAll("span");

let lastScrollTop = 0;

const highlightWords = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  const viewportMiddle = scrollTop + (viewportHeight / 2);

  words.forEach((word, index) => {
    if (word.classList.contains("highlight")) return;

    const wordTop = word.getBoundingClientRect().top + scrollTop;
    const wordBottom = wordTop + word.offsetHeight;

    if (wordTop <= viewportMiddle && wordBottom >= viewportMiddle) {
      word.classList.add("highlight");
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
};

window.addEventListener("scroll", highlightWords);
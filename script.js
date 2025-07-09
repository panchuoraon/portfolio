// Typing animation
const textElement = document.getElementById("typing-text");
const words = ["Web Developer", "Frontend Coder", "Creative Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);
  textElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);

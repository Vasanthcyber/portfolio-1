const typingText = document.getElementById("typing-text");
const phrases = ["Frontend Developer", "Web Designer", "Backend Developer"];
let index = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  currentPhrase = phrases[index];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 80 : 120);
  }
}

type();

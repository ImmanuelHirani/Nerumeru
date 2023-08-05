const texts = [
  "Unleash Joyful Moments",
  "Empower Your Pet's",
  "Happy pets Simple Care",
  "Ride Towards Future",
  "Caring for Your Pets ",
];

const changingTextElement = document.getElementById("changingText");
let currentIndex = 0;

function typeText(text, index) {
  if (index < text.length) {
    changingTextElement.textContent = text.slice(0, index + 1);
    setTimeout(() => typeText(text, index + 1), 100); // Adjust typing speed (milliseconds)
  } else {
    setTimeout(changeText, 300); // Delay before changing to the next text (milliseconds)
  }
}

function changeText() {
  currentIndex = (currentIndex + 1) % texts.length;
  typeText(texts[currentIndex], 0);
}

// Start the typing animation
typeText(texts[currentIndex], 0);

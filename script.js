const reveals = document.querySelectorAll('.reveal');
window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    }
  })
})

document.getElementById("profile").onclick = function() {this.classList.toggle("zoomed");};
const texts = ["Frontend Developer", "JavaScript Developer", "React Developer (soon)"];
let index = 0;
let charIndex = 0;
const speed = 100;
const typingText = document.getElementById("typing-text");
function type() {
  if (charIndex < texts[index].length) {
    typingText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }}
function erase() {
  if (charIndex > 0) {
    typingText.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 300);
  }
}
type();
    

    
